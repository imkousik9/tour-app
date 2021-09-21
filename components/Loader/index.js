import { ImSpinner2 } from 'react-icons/im';

export default function Loader({ size }) {
  return (
    <ImSpinner2
      className={`${size} opacity-100 animate-spin transition-all duration-300 text-green-300`}
    />
  );
}
