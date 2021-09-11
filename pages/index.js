import Layout from '../components/Layout';
import HomeCard from '../components/HomeCard';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <Layout title="Tour App">
      <HeroSection />
      <section className="bg-gray-100 p-36">
        <div className="flex items-center justify-between space-x-14">
          <HomeCard
            img="/img/img-2.jpg"
            title="The Island Adventurer"
            summary="Travel through the Islands of Bali in a Private Cruise"
            size={{ h: 'h-96', w: 'w-2/4' }}
          />
          <HomeCard
            img="/img/img-8.jpg"
            title="The Desert Storm"
            summary="Ride through the Sahara Desert on a guided camel tour"
            size={{ h: 'h-96', w: 'w-2/4' }}
          />
        </div>
        <div className="flex items-center justify-between mt-8">
          <HomeCard
            img="/img/tours/tour-4-cover.jpg"
            title="The City Wanderer"
            slug="the-city-wanderer"
            price="₹20,000"
            size={{ h: 'h-96', w: 'w-72' }}
          />
          <HomeCard
            img="/img/tours/tour-3-cover.jpg"
            title="The Snow Adventurer"
            slug="the-snow-adventurer"
            price="₹25,000"
            size={{ h: 'h-96', w: 'w-72' }}
          />
          <HomeCard
            img="/img/tours/tour-5-cover.jpg"
            title="The Park Camper"
            slug="the-park-camper"
            price="₹25,000"
            size={{ h: 'h-96', w: 'w-72' }}
          />
        </div>
      </section>
    </Layout>
  );
}
