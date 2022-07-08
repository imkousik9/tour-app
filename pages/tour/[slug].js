import React from 'react';

import getTour from '../../lib/getTour';
import getTours from '../../lib/getTours';

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
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const tour = await getTour(params?.slug);

  return {
    props: { tour }
  };
}

function Tour({ tour }) {
  return (
    <Layout title={tour.name}>
      <div className="flex flex-1 flex-col p-5 md:flex-row">
        <ImageSlider images={tour.images} />
        <TourDetails tour={tour} />
      </div>
    </Layout>
  );
}

export default Tour;
