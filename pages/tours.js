import Layout from '../components/Layout';
import TourCard from '../components/TourCard';
import getTours from '../lib/getTours';

export async function getStaticProps() {
  const tours = await getTours();
  return {
    props: { tours },
    revalidate: 200
  };
}

function Tours({ tours }) {
  return (
    <Layout title="All Tours Plans">
      <div className="p-10 flex flex-wrap bg-gray-100;">
        {tours?.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </Layout>
  );
}

export default Tours;
