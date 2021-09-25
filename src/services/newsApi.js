import { createApi, fetchBaseQuery  } from "@reduxjs/toolkit/dist/query/react";
const newsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '82cf4e3377mshb3657fbcaf082a5p19a240jsn491d952fb484'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

function createRequest(url) {
    return {
        url, 
        headers: newsHeaders,
    }
}

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => {
        getNews: builder.query({
          query: () => createRequest('/news/trendingtopics')  
        })
    }
});

export const {
    useGetNewsQuery
} = newsApi;