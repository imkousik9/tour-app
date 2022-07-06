import { useState, useEffect } from 'react';

import getTour from '../../lib/getTour';
import useSaveTour from '../../lib/hooks/useSaveTour';

import DateTime from './DateTime';

function UpdateTour({ path }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [dates, setDates] = useState([]);
  const [price, setPrice] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [stops, setStops] = useState('');
  const [duration, setDuration] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    async function fetchTour() {
      const tour = await getTour(slug);
      setId(tour._id);
      setName(tour.name);
      setLocation(tour.startLocation);
      setPrice(tour.price);
      setGroupSize(tour.maxGroupSize);
      setStops(tour.stops);
      setDuration(tour.duration);
      setDifficulty(tour.difficulty);
      setSummary(tour.summary);
      setDescription(tour.description);
    }

    fetchTour();
  }, []);

  const slug = path ? path[1] : null;

  const [savePost, savePostInfo] = useSaveTour();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let startDates = [];
    dates.forEach((date) => startDates.push(new Date(date)));

    const formData = {
      name,
      price,
      stops,
      duration,
      difficulty,
      summary,
      description,
      startDates,
      startLocation: location,
      maxGroupSize: groupSize
    };

    await savePost(id, formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <form className="flex flex-col md:px-20 lg:px-52" onSubmit={handleSubmit}>
        <label htmlFor="name" className="mb-3 block text-lg font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />
        <label
          htmlFor="startLocation"
          className="mb-3 block text-lg font-semibold"
        >
          Start Location
        </label>
        <input
          type="text"
          name="startLocation"
          id="startLocation"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="start location"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />
        <DateTime dates={dates} setDates={setDates} />

        <label htmlFor="price" className="mb-3 block text-lg font-semibold">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />
        <label
          htmlFor="maxGroupSize"
          className="mb-3 block text-lg font-semibold"
        >
          Maximum Group Size
        </label>
        <input
          type="text"
          name="maxGroupSize"
          id="maxGroupSize"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          placeholder="maximum group size"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />

        <label htmlFor="stops" className="mb-3 block text-lg font-semibold">
          Number of Stops
        </label>
        <input
          type="text"
          name="stops"
          id="stops"
          value={stops}
          onChange={(e) => setStops(e.target.value)}
          placeholder="number of stops"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />

        <label htmlFor="duration" className="mb-3 block text-lg font-semibold">
          Duration
        </label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="duration"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />
        <label
          htmlFor="difficulty"
          className="mb-3 block text-lg font-semibold"
        >
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
        <label htmlFor="summary" className="mb-3 block text-lg font-semibold">
          Summary
        </label>
        <input
          type="text"
          name="summary"
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="summary"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        />
        <label
          htmlFor="description"
          className="mb-3 block text-lg font-semibold"
        >
          Description
        </label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          className="outline-none mb-8 block w-full rounded border-2 border-solid border-green-400 px-2 py-1 text-lg"
        ></textarea>

        <button
          type="submit"
          className="mt-10 inline-block cursor-pointer rounded-full bg-green-500 py-2 px-7 text-lg font-medium uppercase text-white transition-all duration-300 hover:-translate-y-px hover:shadow-lg disabled:bg-gray-400 disabled:text-gray-300"
        >
          {savePostInfo.isLoading
            ? 'Saving...'
            : savePostInfo.isError
            ? 'Error!'
            : savePostInfo.isSuccess
            ? 'Saved!'
            : 'Save Tour'}
        </button>
      </form>
    </div>
  );
}

export default UpdateTour;
