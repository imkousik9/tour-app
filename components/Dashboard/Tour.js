import { format } from 'date-fns';
import useDeleteTour from '../../lib/hooks/useDeleteTour';
import { formatAmountForDisplay } from '../../utils/formatAmount';

function Tour({ tour, setSelect, setSlug }) {
  const [deletePost, deletePostInfo] = useDeleteTour();

  const handleDelete = async () => {
    await deletePost(tour._id);
  };

  return (
    <div className="flex bg-gray-100 rounded-lg m-4">
      <div className="w-64 lg:w-img hidden md:inline-flex">
        <img
          className="h-full rounded-lg"
          src={`${process.env.NEXT_PUBLIC_URL}/tours/${tour.imageCover}`}
          alt=""
        />
      </div>
      <div className="px-4 md:px-8 py-4 w-full text-sm md:text-base">
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
      <div className="flex flex-col items-center justify-center space-y-3 mr-2 md:mr-4 lg:mr-8 text-sm md:text-base">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-full w-20 md:w-24 transition-colors"
          onClick={() => {
            setSelect('Update Tour');
            setSlug(tour.slug);
          }}
        >
          Update
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-full w-20 md:w-24 transition-colors"
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
