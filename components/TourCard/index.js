import NextLink from 'next/link';
import { format } from 'date-fns';
import { formatAmountForDisplay } from '../../utils/formatAmount';

function TourCard({ tour }) {
  return (
    <div className="mx-auto my-6 flex w-80 flex-col overflow-hidden rounded bg-white shadow-md transition-all duration-300">
      <div className="relative">
        <div className="relative">
          <div className="absolute h-full w-full bg-gradient-to-br from-green-200 to-green-400 opacity-70">
            &nbsp;
          </div>
          <img
            src={tour.imageCover}
            alt={tour.name}
            className="h-full w-full object-cover"
          />
        </div>

        <h3 className="px-6 pt-2 pb-3 text-xl font-bold uppercase text-green-600">
          <span>{tour.name}</span>
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-y-5 gap-x-6 px-6 pb-5">
        <h4 className="col-span-full text-sm font-semibold uppercase">
          {`${tour.difficulty} ${tour.duration}-day tour`}
        </h4>
        <p className="col-span-full -mt-4 mb-3 text-sm italic">
          {tour.summary}
        </p>
        <div className="flex items-center text-xs text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>{tour.startLocation}</span>
        </div>
        <div className="flex items-center text-xs text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-calendar"></use>
          </svg>
          <span>{format(new Date(tour.startDates[0]), 'MMMM-yyyy')}</span>
        </div>
        <div className="flex items-center text-xs text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-flag"></use>
          </svg>
          <span>{`${tour.stops} stops`}</span>
        </div>
        <div className="flex items-center text-xs text-green-600">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-user"></use>
          </svg>
          <span>{`${tour.maxGroupSize} people`}</span>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-4 border-t border-solid  border-gray-200 bg-gray-50 py-4 px-6 text-sm">
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
          <a className="row-start-1 row-end-3 self-center justify-self-end rounded-full bg-green-500 py-2 px-6 text-base text-white transition-colors hover:bg-green-600">
            Details
          </a>
        </NextLink>
      </div>
    </div>
  );
}

export default TourCard;
