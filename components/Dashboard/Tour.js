import NextLink from 'next/link';
import { format } from 'date-fns';
import useDeleteTour from '../../lib/hooks/useDeleteTour';
import { formatAmountForDisplay } from '../../utils/formatAmount';

function Tour({ tour }) {
  const [deletePost, deletePostInfo] = useDeleteTour();

  const handleDelete = async () => {
    await deletePost(tour._id);
  };

  return (
    <div className="m-4 flex rounded-lg bg-gray-100">
      <div className="hidden w-64 md:inline-flex lg:w-img">
        <img
          className="h-full rounded-lg"
          src={`${process.env.NEXT_PUBLIC_URL}/tours/${tour.imageCover}`}
          alt=""
        />
      </div>
      <div className="w-full px-4 py-4 text-sm md:px-8 md:text-base">
        <p>
          <span className="font-semibold">Name:</span> {tour.name}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ₹
          {formatAmountForDisplay(tour.price)}
        </p>
        <p>
          <span className="font-semibold">Maximum group size:</span>{' '}
          {tour.maxGroupSize}
        </p>
        <p>
          <span className="font-semibold">Difficulty level:</span>{' '}
          {tour.difficulty}
        </p>
        <p>
          <span className="font-semibold">Number of stops:</span> {tour.stops}
        </p>
        <p>
          <span className="font-semibold">Dates:</span>{' '}
          {tour.startDates.map((date) => (
            <span key={date}>{format(new Date(date), 'dd-MMMM-yyyy')} </span>
          ))}
        </p>
        <p>
          <span className="font-semibold">Start Location:</span>{' '}
          {tour.startLocation}
        </p>
      </div>
      <div className="mr-2 flex flex-col items-center justify-center space-y-3 text-sm md:mr-4 md:text-base lg:mr-8">
        <NextLink href={`/dashboard/update-tour/${tour?.slug}`}>
          <a className="w-20 rounded-full bg-green-500 px-4 py-2 font-medium text-white transition-colors hover:bg-green-600 md:w-24">
            Update
          </a>
        </NextLink>

        <button
          className="w-20 rounded-full bg-red-500 px-4 py-2 font-medium text-white transition-colors hover:bg-red-600 md:w-24"
          onClick={handleDelete}
        >
          {deletePostInfo.isLoading
            ? 'Deleting...'
            : deletePostInfo.isError
            ? 'Error!'
            : deletePostInfo.isSuccess
            ? 'Deleted!'
            : 'Delete'}
        </button>
      </div>
    </div>
  );
}

export default Tour;
