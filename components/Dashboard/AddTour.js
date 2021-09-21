import { useState } from 'react';

import useCreateTour from '../../lib/hooks/useCreateTour';
import DateTime from './DateTime';

function AddTour() {
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
  const [imageCover, setImageCover] = useState(null);
  const [images, setImages] = useState([]);

  const [createPost, createPostInfo] = useCreateTour();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    formData.append('imageCover', imageCover);
    formData.append('name', name);
    formData.append('startLocation', location);

    for (let i = 0; i < dates.length; i++) {
      formData.append('startDates', new Date(dates[i]));
    }

    formData.append('price', price);
    formData.append('maxGroupSize', groupSize);
    formData.append('stops', stops);
    formData.append('duration', duration);
    formData.append('difficulty', difficulty);
    formData.append('summary', summary);
    formData.append('description', description);

    await createPost(formData);
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
          className="w-full block text-lg px-2 py-1 rounded mb-8 outline-none border-2 border-solid border-green-400"
        ></textarea>

        <label
          htmlFor="imageCover"
          className="block text-lg font-semibold mb-3"
        >
          Cover Image
        </label>
        <input
          type="file"
          name="imageCover"
          id="imageCover"
          required
          onChange={(e) => setImageCover(e.target.files[0])}
        />
        <label
          htmlFor="images"
          className="block text-lg font-semibold mt-6  mb-3"
        >
          Images
        </label>
        <input
          type="file"
          name="images"
          multiple
          id="images"
          required
          onChange={(e) => setImages(e.target.files)}
        />
        <button
          type="submit"
          className="mt-10 text-lg py-2 px-7 rounded-full uppercase inline-block font-medium cursor-pointer text-white bg-green-500 transition-all duration-300 hover:-translate-y-px hover:shadow-lg disabled:bg-gray-400 disabled:text-gray-300"
        >
          {createPostInfo.isLoading
            ? 'Saving...'
            : createPostInfo.isError
            ? 'Error!'
            : createPostInfo.isSuccess
            ? 'Saved!'
            : 'Create Tour'}
        </button>
      </form>
    </div>
  );
}

export default AddTour;
