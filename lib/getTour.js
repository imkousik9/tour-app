import axios from '../utils/axios';

async function getTour(slug) {
  const tour = await axios.get(`/api/tours/${slug}`).then((res) => res.data);
  return tour;
}

export default getTour;
