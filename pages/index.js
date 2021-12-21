import Layout from '../components/Layout';
import HomeCard from '../components/HomeCard';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <Layout title="Tour App">
      <HeroSection />
      <section className="bg-gray-100 grid grid-cols-1 md:grid-cols-3 py-36 px-24">
        <HomeCard
          img={`${process.env.NEXT_PUBLIC_URL}/tours/img-2.jpg`}
          title="The Island Adventurer"
          summary="Travel through the Islands of Bali in a Private Cruise"
          cls={'md:col-span-3'}
        />

        <HomeCard
          img={`${process.env.NEXT_PUBLIC_URL}/tours/tour-4-cover.jpg`}
          title="The City Wanderer"
          slug="the-city-wanderer"
          price="₹20,000"
          cls={'md:w-[180px] lg:w-[270px] xl:w-[350px]'}
        />
        <HomeCard
          img={`${process.env.NEXT_PUBLIC_URL}/tours/tour-3-cover.jpg`}
          title="The Snow Adventurer"
          slug="the-snow-adventurer"
          price="₹25,000"
          cls={'md:w-[180px] lg:w-[270px] xl:w-[350px]  md:mx-auto'}
        />
        <HomeCard
          img={`${process.env.NEXT_PUBLIC_URL}/tours/tour-5-cover.jpg`}
          title="The Park Camper"
          slug="the-park-camper"
          price="₹25,000"
          cls={'md:w-[180px] lg:w-[270px] xl:w-[350px] md:ml-auto'}
        />

        <HomeCard
          img={`${process.env.NEXT_PUBLIC_URL}/tours/img-8.jpg`}
          title="The Desert Storm"
          summary="Ride through the Sahara Desert on a guided camel tour"
          cls={'md:col-span-3'}
        />
      </section>
    </Layout>
  );
}
