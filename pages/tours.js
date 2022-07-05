import Layout from '../components/Layout';
import TourCard from '../components/TourCard';
import getTours from '../lib/getTours';

export async function getStaticProps() {
  const tours = await getTours();
  return {
    props: { tours },
    revalidate: 10
  };
}

function Tours({ tours }) {
  return (
    <Layout title="All Tours Plans">
      <div className="flex flex-wrap bg-gray-100 p-10">
        {tours?.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </Layout>
  );
}

export default Tours;
