import { Post, Posts } from "@/models/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<Posts, void>({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
      providesTags: ['Posts']
    }),
    addNewPost: builder.mutation<Post, Pick<Post, 'title' | 'body'| 'userId'>>({
      query: (data) => ({
        url: "posts/add",
        method: "POST",
        body: data
      }),
      invalidatesTags: ['Posts']
    }),
  }),
});

export const { useGetAllPostsQuery, useAddNewPostMutation } = postsApi;
