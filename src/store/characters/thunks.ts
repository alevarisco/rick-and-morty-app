import { client } from "../apis";
import { setCharactersList, startLoadingEpisodes } from "../episodes/episodesSlice";

export const getCharacters = (characters = []) => {

    return async (dispatch) => {
        dispatch(startLoadingEpisodes())
        let characterArray: any[] = [];
        const characterPromises = characters
                .filter(c => c !== null && c !== undefined)
                .map(async (c) => {
                    const { data } = await client.create().get(c);
                    return data;
                });
            characterArray = await Promise.all(characterPromises);

            dispatch(setCharactersList({ characters: characterArray }));
    }
}