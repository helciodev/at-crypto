import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_CRYPTOAPI,
    };

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })

export const coinRankApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    })
  })

})

export const {
  useGetCryptosQuery
} = coinRankApi