import React from 'react';

import { formatAmountForDisplay } from '../../utils/formatAmount';
import axios from '../../utils/axios';
import SelectDay from '../SelectDay';
import RazorPay from '../RazorPay';

function TourDetails({ tour, user }) {
  const [day, setDay] = React.useState('');
  const [slot, setSlot] = React.useState(null);

  const handelSelectDay = async (date) => {
    setDay(date);
    const response = await axios.get(
      `/api/bookings/slot?slug=${tour.slug}&startDate=${date}`
    );

    setSlot(response.data);
  };

  return (
    <div className="pl-10 flex flex-col space-y-4 max-w-xl">
      <h1 className="uppercase text-3xl font-bold text-gray-600">
        {tour.name}
      </h1>
      <h6 className="text-lg capitalize font-semibold">
        {`${tour.difficulty} ${tour.duration}-day tour`}
      </h6>

      <p>
        <span className="px-2 py-1 font-bold text-white bg-green-600 rounded-full">
          {tour.ratingsAverage} ⭐
        </span>{' '}
        <span className="text-gray-500">{` rating (${tour.ratingsQuantity})`}</span>
      </p>

      <div className="text-base flex space-x-8 text-green-600">
        <div className="flex items-center">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-map-pin"></use>
          </svg>
          <span>{tour.startLocation}</span>
        </div>

        <div className="flex items-center">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-flag"></use>
          </svg>
          <span>{`${tour.stops} stops`}</span>
        </div>
        <div className="flex items-center">
          <svg className="mr-2 h-4 w-4 fill-current">
            <use xlinkHref="/img/icons.svg#icon-user"></use>
          </svg>
          <span>{`${tour.maxGroupSize} people`}</span>
        </div>
      </div>
      <div className="flex items-center text-sm font-semibold space-x-4">
        <svg className="h-6 w-6 text-green-600 fill-current">
          <use xlinkHref="/img/icons.svg#icon-calendar"></use>
        </svg>
        {tour.startDates.map((date, index) => (
          <SelectDay
            key={index}
            active={day === date}
            onClick={() => handelSelectDay(date)}
            date={date}
          />
        ))}
      </div>
      {slot === false && (
        <p className="italic text-base font-semibold text-pink-error">
          No slot available on this date please try next date.
        </p>
      )}

      <p className="w-11/12 italic text-sm">{tour.description}</p>

      <p className="flex items-center space-x-1">
        <span className="font-extrabold text-2xl">
          ₹{formatAmountForDisplay(tour.price)}
        </span>
        <span className="text-gray-500">per person</span>
      </p>

      <RazorPay user={user} tour={tour} day={day} slot={slot} />
    </div>
  );
}

export default TourDetails;
