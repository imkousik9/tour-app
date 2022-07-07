import Layout from '../components/Layout';
import HomeCard from '../components/HomeCard';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <Layout title="Tour App">
      <HeroSection />
      <section className="grid grid-cols-1 bg-gray-100 py-36 px-24 md:grid-cols-3">
        <HomeCard
          img="https://res.cloudinary.com/dl7eqoydv/image/upload/v1657169452/tour-app/uploads/img-2_f5wqkg.jpg"
          title="The Island Adventurer"
          summary="Travel through the Islands of Bali in a Private Cruise"
          cls={'md:col-span-3'}
        />

        <HomeCard
          img="https://res.cloudinary.com/dl7eqoydv/image/upload/v1657169418/tour-app/uploads/tour-4-cover_ntm11q.jpg"
          title="The City Wanderer"
          slug="the-city-wanderer"
          price="₹20,000"
          cls={'md:w-[180px] lg:w-[270px] xl:w-[350px]'}
        />
        <HomeCard
          img="https://res.cloudinary.com/dl7eqoydv/image/upload/v1657169407/tour-app/uploads/tour-3-cover_im6opd.jpg"
          title="The Snow Adventurer"
          slug="the-snow-adventurer"
          price="₹25,000"
          cls={'md:w-[180px] lg:w-[270px] xl:w-[350px]  md:mx-auto'}
        />
        <HomeCard
          img="https://res.cloudinary.com/dl7eqoydv/image/upload/v1657169437/tour-app/uploads/tour-5-cover_vdibyi.jpg"
          title="The Park Camper"
          slug="the-park-camper"
          price="₹25,000"
          cls={'md:w-[180px] lg:w-[270px] xl:w-[350px] md:ml-auto'}
        />

        <HomeCard
          img="https://res.cloudinary.com/dl7eqoydv/image/upload/v1657169384/tour-app/uploads/img-8_clb6yg.jpg"
          title="The Desert Storm"
          summary="Ride through the Sahara Desert on a guided camel tour"
          cls={'md:col-span-3'}
        />
      </section>
    </Layout>
  );
}
