import { format } from 'date-fns';

function SelectDay({ date, active, ...props }) {
  return (
    <>
      <span
        onClick={props.onClick}
        className={`border-2 border-solid rounded-md py-1 px-2 cursor-pointer ${
          active && 'border-green-600'
        } textColor`}
        style={{
          color: active ? 'rgba(5, 150, 105, 1)' : 'rgba(75, 85, 99, 1)'
        }}
      >
        {format(new Date(date), 'dd-MMMM-yyyy')}
      </span>
    </>
  );
}

export default SelectDay;
