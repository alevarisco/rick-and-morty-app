import { configureStore } from '@reduxjs/toolkit'
import { episodesSlice } from './episodes/episodesSlice'
import { locationsSlice } from './locations/locationsSlice'

export const store = configureStore({
  reducer: {
    episodes: episodesSlice.reducer,
    locations: locationsSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch