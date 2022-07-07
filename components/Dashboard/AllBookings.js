import { format } from 'date-fns';
import { formatAmountForDisplay } from '../../utils/formatAmount';

function AllBookings({ booking }) {
  return (
    <div className="m-4 flex flex-col rounded-lg bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="mr-5 flex justify-between">
        <p className="text-sm">
          <span className="font-medium">Booking Date:</span>{' '}
          {format(new Date(booking?.createdAt), 'dd-MMMM-yyyy')}
        </p>
        <p className="text-sm">
          <span className="font-medium">Booking Id: </span> {booking?.OrderId}
        </p>
      </div>
      <div className="mt-4 flex">
        <div className="hidden w-80 md:inline-flex">
          <img
            src={booking.tour?.imageCover}
            alt={booking.tour?.name}
            className="w-full  rounded-lg object-contain"
          />
        </div>
        <div className="w-full md:px-8">
          <h2 className="text-base font-bold uppercase md:text-lg">
            {booking.tour?.name}
          </h2>

          <h4 className="text-base font-semibold">
            <span className="capitalize">{`${booking.tour?.difficulty} `}</span>
            {`${booking.tour?.duration}-day tour`}
          </h4>
          <p className="mt-3 text-base md:text-lg">
            <span className="font-medium">Booked By:</span> {booking.user?.name}
            ({booking.user?.email})
          </p>
          <div className="mt-12 flex justify-between">
            <div className="flex items-center text-sm md:text-base">
              <svg className="mr-2 h-4 w-4">
                <use xlinkHref="/img/icons.svg#icon-calendar"></use>
              </svg>
              <span>
                {format(new Date(booking?.startDate), 'dd-MMMM-yyyy')}
              </span>
            </div>
            <p className="text-sm font-medium md:text-lg">
              <span className="font-medium">Booking Total:</span> ₹
              {formatAmountForDisplay(booking?.price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBookings;
