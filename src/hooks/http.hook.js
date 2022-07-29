import { useCallback } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.stackexchange.com/2.3/';

export const useHttp = () => {
  const request = useCallback(async (urlType, urlQuery) => {
    const response = await axios.get(
      `${BASE_URL}${urlType}key=${process.env.REACT_APP_API_KEY}${urlQuery}`,
    );

    if (response.statusText !== 'OK') {
      throw new Error(`Could not fetch ${urlType}, status: ${response.status}`);
    }

    const data = response.data;
    return data;
  }, []);
  return {
    request,
  };
};
