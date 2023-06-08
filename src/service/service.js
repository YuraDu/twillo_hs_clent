import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DELETE, PATCH, POST } from "../consts/callersActionTypes";

// Define a service using a base URL and expected endpoints
export const callersApi = createApi({
  reducerPath: "callersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: builder => ({
    getCallers: builder.query({
      query: () => "callers",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCallersQuery } = callersApi;
