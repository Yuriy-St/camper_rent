import axios from 'axios';

axios.defaults.baseURL = 'https://661c3541e7b95ad7fa69efd6.mockapi.io/api';

export const fetchAllCampers = async ({ page, limit, filters = {} } = {}) => {
  const data = await processQuery({
    url: '/campers',
		method: 'get',
		params: {
			page,
			limit,
			...filters
		}
  });
  return data;
};

export const fetchCamper = async id => {
  const data = await processQuery({
    url: `/campers/${id}`,
    method: 'get',
  });
  return data;
};

const processQuery = async options => {
  try {
    const response = await axios(options);
    if (response.status >= 300) throw response;
    return response.data;
  } catch (err) {
    const { response } = err;
    throw response?.data || response || err;
  }
};
