import NextLink from 'next/link';
import { format } from 'date-fns';
import { formatAmountForDisplay } from '../../utils/formatAmount';

function TourCard({ tour }) {
  return (
    <div className="mx-auto my-6 w-80 rounded overflow-hidden shadow-md bg-white transition-all duration-300 flex flex-col">
      <div className="relative">
        <div className="relative">
          <div className="absolute w-full h-full bg-gradient-to-br from-green-200 to-green-400 opacity-70">
            &nbsp;
          </div>
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/tours/${tour.imageCover}`}
            alt="Tour 1"
            className="object-cover h-full w-full"
          />
        </div>

        <h3 className="text-green-600 uppercase font-bold text-xl px-6 pt-2 pb-3">
          <span>{tour.name}</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-y-5 gap-x-6 px-6 pb-5">
        <h4 className="text-sm uppercase font-semibold col-span-full">
          {`${tour.difficulty} ${tour.duration}-day tour`}
        </h4>
        <p className="col-span-full text-sm italic -mt-4 mb-3">
          {tour.summary}
        </p>
        <div className="text-xs flex items-center text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>{tour.startLocation}</span>
        </div>
        <div className="text-xs flex items-center text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-calendar"></use>
          </svg>
          <span>{format(new Date(tour.startDates[0]), 'MMMM-yyyy')}</span>
        </div>
        <div className="text-xs flex items-center text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-flag"></use>
          </svg>
          <span>{`${tour.stops} stops`}</span>
        </div>
        <div className="text-xs flex items-center text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-user"></use>
          </svg>
          <span>{`${tour.maxGroupSize} people`}</span>
        </div>
      </div>

      <div className="text-sm bg-gray-50 py-4 px-6 border-t border-solid border-gray-200  grid mt-auto grid-cols-2 gap-x-4 gap-y-4">
        <p>
          <span className="font-bold">
            ₹{formatAmountForDisplay(tour?.price)}
          </span>{' '}
          <span className="text-gray-500">per person</span>
        </p>
        <p className="row-start-2 row-end-3">
          <span className="font-bold">{tour.ratingsAverage}</span>{' '}
          <span className="text-gray-400">{`rating (${tour.ratingsQuantity})`}</span>
        </p>
        <NextLink href={`/tour/${tour.slug}`}>
          <a className="row-start-1 row-end-3 justify-self-end self-center bg-green-500 text-white text-base py-2 px-6 rounded-full hover:bg-green-600 transition-colors">
            Details
          </a>
        </NextLink>
      </div>
    </div>
  );
}

export default TourCard;
