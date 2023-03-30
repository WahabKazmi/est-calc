import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tabApi = createApi({
  reducerPath: 'tabApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getQuestionsByName: builder.query({
      query: (name: string) => name
    })
  }),
})

export const { useGetQuestionsByNameQuery } = tabApi