import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_USERS_API_URL, //,
  }),
  keepUnusedDataFor: 3600, //Refresh the cache every hour.
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
