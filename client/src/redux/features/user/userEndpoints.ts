import { coreApiSlice } from '../../slices/coreApiSlice';

const userApi = coreApiSlice.injectEndpoints({
  endpoints: build => ({
    createUser: build.mutation({
      query: ipAddress => ({
        url: 'user',
        method: 'POST',
        body: { ipAddress }
      }),
    }),
    findUser: build.query({
      query: userId => `user/${userId}`
    }),
    updateUser: build.mutation({
      query: ({ userId, data }) => ({
        url: `user/${userId}`,
        method: 'PATCH',
        body: data
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useFindUserQuery,
  useUpdateUserMutation,
} = userApi;
