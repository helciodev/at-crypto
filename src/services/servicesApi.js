import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '82cf4e3377mshb3657fbcaf082a5p19a240jsn491d952fb484'
    };

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders })
// function createRequest(url) {
//   return({
//     url,
//     headers: cryptoApiHeaders,
//   })
// }
// ((url) =>({}));
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