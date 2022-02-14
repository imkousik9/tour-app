import { useRouter } from 'next/router';
import { useAuth } from '../../lib/hooks';
import axios from '../../utils/axios';

function RazorPay({ tour, day, slot }) {
  const router = useRouter();
  const { user } = useAuth();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    const response = await axios.post('/api/bookings/order', {
      tourId: tour._id,
      startDate: day
    });

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      currency: response.data.currency,
      amount: response.data.amount.toString(),
      order_id: response.data.id,
      name: tour.name,
      description: tour.summary,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: user?.name,
        email: user?.email ? user?.email : 'xyz@mail.com',
        contact: '9899999999'
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <button
      className={`cursor-pointer self-center bg-green-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed`}
      disabled={!day || !slot}
      onClick={() => {
        user
          ? displayRazorpay()
          : router.replace('/login?next=/tour/' + tour.slug);
      }}
    >
      Book Now
    </button>
  );
}

export default RazorPay;
