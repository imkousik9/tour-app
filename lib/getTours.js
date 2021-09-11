import axios from '../utils/axios';

async function getTours() {
  const tours = await axios.get('/api/tours').then((res) => res.data);
  return tours;
}

export default getTours;
