import { useCallback } from 'react';

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
      try {
        const response = await fetch(
          `${BASE_URL}${urlType}key=${process.env.REACT_APP_API_KEY}${urlQuery}`,
          {
            method,
            body,
            headers,
          },
        );
        if (!response.ok) {
          throw new Error(
            `Could not fetch ${urlType}, status: ${response.status}`,
          );
        }
        const data = await response.json();
        return data;
      } catch (e) {
        throw e;
      }
    },
    [],
  );
  return {
    request,
  };
};
