import { useCallback } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.stackexchange.com/2.3/';

export const useHttp = () => {
  const request = useCallback(
    async (
      urlType,
      urlQuery,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' },
    ) => {
      // const response = await fetch(
      //   `${BASE_URL}${urlType}key=${process.env.REACT_APP_API_KEY}${urlQuery}`,
      //   {
      //     method,
      //     body,
      //     headers,
      //   },
      // );
      // if (!response.ok) {
      //   throw new Error(
      //     `Could not fetch ${urlType}, status: ${response.status}`,
      //   );
      // }
      // const data = await response.json();
      // return data;

      const response = await axios.get(
        `${BASE_URL}${urlType}key=${process.env.REACT_APP_API_KEY}${urlQuery}`,

        // JSON.parse(body),
        // JSON.parse(headers),
      );

      console.log(response.data);
      console.log(response);

      if (response.statusText !== 'OK') {
        throw new Error(
          `Could not fetch ${urlType}, status: ${response.status}`,
        );
      }

      const data = response.data;
      return data;
    },
    [],
  );
  return {
    request,
  };
};
