import { rickandmortyApi } from "../apis";
import { getResidents } from "../residents/thunks";
import { setLocationDetail, setLocations, startLoadingLocations } from "./locationsSlice";


export const getLocations = (page = 1) => {

    return async (dispatch) => {
        dispatch(startLoadingLocations())
        const {data} = await rickandmortyApi.get(`/location?page=${page}`);
        dispatch(setLocations({locations: data.results, page: page, next: data.info.next, prev: data.info.prev}))
    }
}

export const getLocationDetail = (id = 0) => {

    return async (dispatch) => {
        dispatch(startLoadingLocations())
        const {data} = await rickandmortyApi.get(`/location/${id}`)
        dispatch(getResidents(data.residents));
        dispatch(setLocationDetail({location: data}))
    }
}