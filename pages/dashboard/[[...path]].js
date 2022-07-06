import React from 'react';
import { useRouter } from 'next/router';

import { authRouteAdmin } from '../../lib/authRoute';
import useBookings from '../../lib/hooks/useBookings';
import useTours from '../../lib/hooks/useTours';

import Layout from '../../components/Layout';
import SideBar from '../../components/Dashboard/SideBar';
import AllBookings from '../../components/Dashboard/AllBookings';
import Tour from '../../components/Dashboard/Tour';
import AddTour from '../../components/Dashboard/AddTour';
import UpdateTour from '../../components/Dashboard/UpdateTour';
import Loader from '../../components/Loader';

function Dashboard() {
  const router = useRouter();

  const pathRoute = router.query?.path;
  const path = pathRoute ? pathRoute[0] : null;

  const bookingsQuery = useBookings();
  const tours = useTours();

  let display;
  switch (path) {
    case 'bookings':
      display = (
        <div className="flex flex-col justify-center py-6 px-20">
          {bookingsQuery.isLoading ? (
            <span className="flex justify-center">
              <Loader size="text-6xl" />
            </span>
          ) : bookingsQuery.data?.length === 0 ? (
            <p className="mx-auto text-2xl font-semibold">No bookings found.</p>
          ) : (
            <>
              {bookingsQuery.data?.map((booking) => (
                <AllBookings booking={booking} key={booking._id} />
              ))}
            </>
          )}
        </div>
      );
      break;
    case 'add-tour':
      display = <AddTour />;
      break;
    case 'update-tour':
      display = <UpdateTour path={pathRoute} />;
      break;
    case 'tours':
      display = (
        <div className="flex flex-col justify-center py-6 px-20">
          {tours.data?.map((tour) => (
            <Tour tour={tour} key={tour._id} />
          ))}
        </div>
      );
      break;
  }

  return (
    <Layout>
      <div className="flex">
        <SideBar path={path} />
        <div className="flex-4">{display}</div>
      </div>
    </Layout>
  );
}

export default authRouteAdmin(Dashboard);
