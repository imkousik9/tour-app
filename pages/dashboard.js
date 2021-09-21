import React from 'react';
import Router from 'next/router';
import { useAuth } from '../lib/hooks';
import getTours from '../lib/getTours';
import useBookings from '../lib/hooks/useBookings';

import Layout from '../components/Layout';
import SideBar from '../components/Dashboard/SideBar';
import AllBookings from '../components/Dashboard/AllBookings';
import Tour from '../components/Dashboard/Tour';
import AddTour from '../components/Dashboard/AddTour';
import UpdateTour from '../components/Dashboard/UpdateTour';
import Loader from '../components/Loader';

export async function getStaticProps() {
  const tours = await getTours();
  return {
    props: { tours }
  };
}

function Dashboard({ tours }) {
  const [select, setSelect] = React.useState('All Bookings');
  const [slug, setSlug] = React.useState('');
  const { user } = useAuth();
  const bookingsQuery = useBookings();

  React.useEffect(() => {
    if (!user || !user?.role === 'admin') {
      Router.replace('/');
    }
  }, [user]);

  let display;
  switch (select) {
    case 'All Bookings':
      display = (
        <div className="flex flex-col justify-center py-6 px-20">
          {bookingsQuery.isLoading ? (
            <span className="flex justify-center">
              <Loader size="text-6xl" />
            </span>
          ) : bookingsQuery.data?.length === 0 ? (
            <p className="text-2xl font-semibold mx-auto">No bookings found.</p>
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
    case 'Add Tour':
      display = <AddTour />;
      break;
    case 'Update Tour':
      display = <UpdateTour slug={slug} />;
      break;
    case 'Tour List':
      display = (
        <div className="flex flex-col justify-center py-6 px-20">
          {tours.map((tour) => (
            <Tour
              tour={tour}
              key={tour._id}
              setSlug={setSlug}
              setSelect={setSelect}
            />
          ))}
        </div>
      );
      break;
  }

  return (
    <Layout>
      <div className="flex">
        <SideBar select={select} setSelect={setSelect} slug={slug} />
        <div className="flex-4">{display}</div>
      </div>
    </Layout>
  );
}

export default Dashboard;
