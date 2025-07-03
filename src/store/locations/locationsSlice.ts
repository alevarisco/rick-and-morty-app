import { createSlice } from '@reduxjs/toolkit'

export const locationsSlice = createSlice({
  name: 'locations',
   initialState: {
        page: 1,
        location: null,
        locations: [],
        isLoading: false,
        next: null,
        prev: null,
        residents: [],
    },
  reducers: {
    startLoadingLocations: (state) => {
        state.isLoading = true;
    },
    setLocations: (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.next = action.payload.next;
        state.prev = action.payload.prev;
        state.locations = action.payload.locations;
    },
    setLocationDetail: (state, action) => {
        state.isLoading = false;
        state.location = action.payload.location;
    },
    setResidentsList: (state, action) => {
      state.residents = action.payload.residents;
    }
  },
})

export const { startLoadingLocations, setLocations, setLocationDetail, setResidentsList } = locationsSlice.actions

export default locationsSlice.reducer