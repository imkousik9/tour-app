import React from 'react';
import { useRouter } from 'next/router';

import getTour from '../../lib/getTour';
import getTours from '../../lib/getTours';
import { useAuth } from '../../lib/hooks';

import Layout from '../../components/Layout';
import ImageSlider from '../../components/ImageSlider';
import TourDetails from '../../components/TourDetails';

export async function getStaticPaths() {
  const tours = await getTours();

  const paths = tours.map((tour) => ({
    params: { slug: tour.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const tour = await getTour(params?.slug);

  return {
    props: { tour },
    revalidate: 10
  };
}

function Tour({ tour }) {
  const router = useRouter();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      router.replace('/login?next=/tour/' + tour.slug);
    }
  }, [user, router, tour.slug]);

  return (
    <Layout title={tour.name}>
      <div className="flex flex-col md:flex-row flex-1 p-5">
        <ImageSlider images={tour.images} />
        <TourDetails tour={tour} user={user} />
      </div>
    </Layout>
  );
}

export default Tour;
