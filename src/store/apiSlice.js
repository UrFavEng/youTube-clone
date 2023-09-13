import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const youTubeApi = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com/",
    prepareHeaders(headers) {
      headers.set("Accept", "application/vnd.api+json");
      headers.set("X-BingApis-SDK", "application/vnd.api+json");
      headers.set(
        "X-RapidAPI-Key",
        "052f7ee3b9mshf92b509aea9001bp1afed4jsn090dbcac8c64"
      );
      headers.set("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCaptions: builder.query({
      query: () => `captions?part=snippet&videoId=M7FIvfx5J10`,
    }),
    getSearch: builder.query({
      query: (cat) => `search?part=snippet&maxResults=50&q=${cat}`,
    }),
    getChannelDetails: builder.query({
      query: (id) => `channels?part=snippet&id=${id}`,
    }),
    getChannelVideos: builder.query({
      query: (id) =>
        `search?part=snippet&channelId=${id}&maxResults=50&order=date`,
    }),
    getSearchVid: builder.query({
      query: (name) => `search?part=snippet&q=${name}`,
    }),
    getVidetails: builder.query({
      query: (id) => `videos?part=snippet,statistics&id=${id}`,
    }),
    getRelatedVid: builder.query({
      query: (id) => `search?part=snippet&relatedToVideoId=${id}&type=video`,
    }),
  }),
});

export const {
  useGetCaptionsQuery,
  useGetSearchQuery,
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
  useGetSearchVidQuery,
  useGetVidetailsQuery,
  useGetRelatedVidQuery,
} = youTubeApi;
