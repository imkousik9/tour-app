import NextLink from 'next/link';

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}/tours/tour-1-cover.jpg)`,
        backgroundPosition: 'center center'
      }}
      className="min-h-screen flex justify-center items-center flex-col"
    >
      <div className="border-8 border-green-800 rounded-2xl p-14 lg:p-24 text-center">
        <h1 className="text-black uppercase text-cente text-xl md:text-2xl lg:text-4xl font-bold">
          It won&apos;t be returned without a story
        </h1>

        <h4 className="text-green-900 text-lg md:text-xl font-medium mt-2">
          Breathtaking hike through the Canadian Banff National Park
        </h4>
      </div>
      <NextLink href="/tours">
        <a className="cursor-pointer bg-green-600 hover:-translate-y-0.5 transition-transform text-xl font-medium text-gray-50 mt-24 px-6 py-3 rounded-full">
          Book Now
        </a>
      </NextLink>
    </div>
  );
};

export default HeroSection;
