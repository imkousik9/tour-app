import { format } from 'date-fns';
import { formatAmountForDisplay } from '../../utils/formatAmount';

function BookingCard({ booking }) {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg m-4 p-8">
      <div className="flex justify-between mr-5">
        <p className="text-sm">
          <span className="font-medium">Booking Date:</span>{' '}
          {format(new Date(booking?.createdAt), 'dd-MMMM-yyyy')}
        </p>
        <p className="text-sm">
          <span className="font-medium">Booking Id: </span> {booking?.OrderId}
        </p>
      </div>
      <div className="flex mt-4">
        <div className="w-80">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/tours/${booking.tour?.imageCover}`}
            alt="Tour 1"
            className="object-contain  w-full rounded-lg"
          />
        </div>
        <div className="px-8 w-full">
          <h2 className="text-lg font-bold uppercase">{booking.tour?.name}</h2>

          <h4 className="text-base font-semibold">
            <span className="capitalize">{`${booking.tour?.difficulty} `}</span>
            {`${booking.tour?.duration}-day tour`}
          </h4>
          <p className="text-sm italic mt-3">{booking.tour?.summary}</p>
          <div className="flex justify-between mt-12">
            <div className="text-base flex items-center">
              <svg className="mr-2 h-4 w-4">
                <use xlinkHref="/img/icons.svg#icon-calendar"></use>
              </svg>
              <span>
                {format(new Date(booking?.startDate), 'dd-MMMM-yyyy')}
              </span>
            </div>
            <p className="text-lg font-medium">
              <span className="font-medium">Booking Total:</span> ₹
              {formatAmountForDisplay(booking?.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
