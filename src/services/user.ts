import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IUser } from "../interfaces/interfaces"
import type { RootState } from "../store/store"

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }

      return headers
    },
  }),
  endpoints: builder => ({
    getUserDataByAuth0Id: builder.query<IUser, string>({
      query: auth0UserId => `users/${decodeURIComponent(auth0UserId)}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDataByAuth0IdQuery } = userApi
