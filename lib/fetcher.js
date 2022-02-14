import axios from '../utils/axios';

const getError = (error) => {
  if (error.isAxiosError && error.response) return error.response.data;
  return 'Unexpected error';
};

const refreshTokens = async () => {
  await axios.post('/api/users/refresh', undefined);
};

const handleRequest = async (request) => {
  try {
    return await request();
  } catch (error) {
    if (error?.response?.status === 401) {
      try {
        await refreshTokens();

        return await request();
      } catch (innerError) {
        throw getError(innerError);
      }
    }

    throw getError(error);
  }
};

export const fetcher = async (url) => {
  try {
    const request = () => axios.get(url);
    const { data } = await handleRequest(request);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const poster = async (url, payload) => {
  try {
    const request = () => axios.post(url, payload);
    const { data } = await handleRequest(request);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const updater = async (url, payload) => {
  try {
    const request = () => axios.patch(url, payload);
    const { data } = await handleRequest(request);
    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const deleter = async (url) => {
  try {
    const request = () => axios.delete(url);
    await handleRequest(request);
  } catch (error) {}
};
