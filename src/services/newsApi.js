import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/dist/query/react";
const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTOAPI,
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

function createRequest(url) {
    return {
        url, 
        headers: newsHeaders,
    }
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
          query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)  
        })
    })
});

export const {
    useGetNewsQuery
} = newsApi;