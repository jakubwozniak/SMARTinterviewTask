import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_GOOGLE_API_URL,
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query<BooksResponse, { key: string }>({
      query: ({ key }) => {
        let params = `?q=people&langRestrict=en&maxResults=40`;
        if (key) params += `&key=${key}`;

        return params;
      },
    }),
  }),
});

export const { useGetAllBooksQuery } = booksApi;
