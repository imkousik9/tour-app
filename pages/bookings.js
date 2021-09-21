import React from 'react';
import Router from 'next/router';
import { useAuth } from '../lib/hooks';
import useBookings from '../lib/hooks/useBookings';

import Layout from '../components/Layout';
import BookingCard from '../components/BookingCard';
import Loader from '../components/Loader';

function Bookings() {
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      Router.replace('/');
    }
  }, [user]);

  const bookingsQuery = useBookings();

  return (
    <Layout title="My Bookings">
      <div className="flex flex-col justify-center py-6 px-20">
        {bookingsQuery.isLoading ? (
          <span className="flex justify-center">
            <Loader size="text-6xl" />
          </span>
        ) : bookingsQuery.data?.length === 0 ? (
          <p className="text-2xl font-semibold mx-auto">
            No bookings found, please book some slot.
          </p>
        ) : (
          <>
            <p className="text-2xl font-semibold ml-4 mb-3">My Bookings</p>
            {bookingsQuery.data?.map((booking) => (
              <BookingCard booking={booking} key={booking._id} />
            ))}
          </>
        )}
      </div>
    </Layout>
  );
}

export default Bookings;
