import { useState, useEffect } from 'react';

import getTour from '../../lib/getTour';
import useSaveTour from '../../lib/hooks/useSaveTour';

import DateTime from './DateTime';

function UpdateTour({ slug }) {
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
  }, [slug]);

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
    <div className="p-10 bg-gray-50 min-h-screen">
      <form className="flex flex-col px-52" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-lg font-semibold mb-3">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />
        <label
          htmlFor="startLocation"
          className="block text-lg font-semibold mb-3"
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
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />
        <DateTime dates={dates} setDates={setDates} />

        <label htmlFor="price" className="block text-lg font-semibold mb-3">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />
        <label
          htmlFor="maxGroupSize"
          className="block text-lg font-semibold mb-3"
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
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />

        <label htmlFor="stops" className="block text-lg font-semibold mb-3">
          Number of Stops
        </label>
        <input
          type="text"
          name="stops"
          id="stops"
          value={stops}
          onChange={(e) => setStops(e.target.value)}
          placeholder="number of stops"
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />

        <label htmlFor="duration" className="block text-lg font-semibold mb-3">
          Duration
        </label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="duration"
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />
        <label
          htmlFor="difficulty"
          className="block text-lg font-semibold mb-3"
        >
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="difficult">Difficult</option>
        </select>
        <label htmlFor="summary" className="block text-lg font-semibold mb-3">
          Summary
        </label>
        <input
          type="text"
          name="summary"
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="summary"
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        />
        <label
          htmlFor="description"
          className="block text-lg font-semibold mb-3"
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
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        ></textarea>

        <button
          type="submit"
          className="mt-10 text-lg py-2 px-7 rounded-full uppercase inline-block font-medium cursor-pointer text-white bg-green-500 transition-all duration-300 hover:-translate-y-px hover:shadow-lg disabled:bg-gray-400 disabled:text-gray-300"
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
