import { rickandmortyApi } from "../apis";
import { getCharacters } from "../characters/thunks";
import { setEpisodeDetail, setEpisodes, startLoadingEpisodes } from "./episodesSlice";

export const getEpisodes = (page = 1) => {

    return async (dispatch) => {
        dispatch(startLoadingEpisodes())
        const {data} = await rickandmortyApi.get(`/episode?page=${page}`);
        dispatch(setEpisodes({episodes: data.results, page: page, next: data.info.next, prev: data.info.prev}))
    }
}
export const getEpisodesDetail = (id = 0) => {

    return async (dispatch) => {
        dispatch(startLoadingEpisodes())
        const {data} = await rickandmortyApi.get(`/episode/${id}`);
        dispatch(getCharacters(data.characters));
        dispatch(setEpisodeDetail({episode: data}))
    }
}