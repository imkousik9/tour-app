import { useState } from 'react';
import { format } from 'date-fns';

function DateTime({ dates, setDates }) {
  const [date, setDate] = useState('');

  function selectDate() {
    setDates([...dates, date]);
  }

  return (
    <>
      <label htmlFor="startDates" className="block text-lg font-semibold mb-3">
        Start Dates
      </label>

      <p className="mb-2">
        {dates.map((date, i) => (
          <span key={i}> {format(new Date(date), 'dd-MMMM-yyyy')} </span>
        ))}
      </p>
      <div className="flex items-center mb-8 space-x-4">
        <input
          type="date"
          name="startDates"
          id="startDates"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="w-full block text-lg px-2 py-1 outline-none rounded border-2 border-solid border-green-400 "
        />
        <button
          className="text-white bg-green-500 font-medium rounded-full w-24 h-8 transition-all duration-300 hover:-translate-y-px hover:shadow-lg"
          type="button"
          onClick={selectDate}
        >
          Select
        </button>
      </div>
    </>
  );
}

export default DateTime;
