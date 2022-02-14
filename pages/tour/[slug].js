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
  return (
    <Layout title={tour.name}>
      <div className="flex flex-col md:flex-row flex-1 p-5">
        <ImageSlider images={tour.images} />
        <TourDetails tour={tour} />
      </div>
    </Layout>
  );
}

export default Tour;
