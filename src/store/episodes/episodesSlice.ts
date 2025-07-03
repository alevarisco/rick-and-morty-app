import { createSlice } from '@reduxjs/toolkit'

export const episodesSlice = createSlice({
  name: 'episodes',
   initialState: {
        page: 1,
        episode: null,
        episodes: [],
        isLoading: false,
        next: null,
        prev: null,
        characters: [],
    },
  reducers: {
    startLoadingEpisodes: (state) => {
        state.isLoading = true;
    },
    setEpisodes: (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.episodes = action.payload.episodes;
    },
    setEpisodeDetail: (state, action) => {
        state.isLoading = false;
        state.episode = action.payload.episode;
    },
    setCharactersList: (state, action) => {
      state.characters = action.payload.characters;
    }
  },
})

export const { startLoadingEpisodes, setEpisodes, setEpisodeDetail, setCharactersList } = episodesSlice.actions

export default episodesSlice.reducer