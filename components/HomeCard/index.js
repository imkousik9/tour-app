import NextLink from 'next/link';

function HomeCard({ img, title, summary, slug, price, size }) {
  const link = slug ? `/tour/${slug}` : '/tours';
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center center'
      }}
      className={`${size.h} ${size.w} flex justify-center items-center flex-col m-3 rounded-md shadow-lg`}
    >
      <h1 className="text-green-800 text-uppercase text-center text-2xl font-bold">
        {title}
      </h1>
      <p className="text-gray-700 mt-4 font-medium">{summary}</p>
      {slug && (
        <p className="text-green-800 text-lg font-medium">
          &#11088;&#11088;&#11088;&#11088;&#11088;
        </p>
      )}
      <p className="text-lg text-green-800 font-semibold mt-4">{price}</p>
      <NextLink href={link}>
        <a className="cursor-pointer bg-green-600 transition-transform text-base font-medium text-gray-50 mt-24 px-5 py-2 rounded-full shadow-md hover:-translate-y-0.5">
          Book Now
        </a>
      </NextLink>
    </div>
  );
}

export default HomeCard;
