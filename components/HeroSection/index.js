import NextLink from 'next/link';

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundImage:
          'url(https://res.cloudinary.com/dl7eqoydv/image/upload/v1657169399/tour-app/uploads/tour-1-cover_nodfie.jpg)',
        backgroundPosition: 'center center'
      }}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="rounded-2xl border-8 border-green-800 p-14 text-center lg:p-24">
        <h1 className="text-cente text-xl font-bold uppercase text-black md:text-2xl lg:text-4xl">
          It won&apos;t be returned without a story
        </h1>

        <h4 className="mt-2 text-lg font-medium text-green-900 md:text-xl">
          Breathtaking hike through the Canadian Banff National Park
        </h4>
      </div>
      <NextLink href="/tours">
        <a className="mt-24 cursor-pointer rounded-full bg-green-600 px-6 py-3 text-xl font-medium text-gray-50 transition-transform hover:-translate-y-0.5">
          Book Now
        </a>
      </NextLink>
    </div>
  );
};

export default HeroSection;
