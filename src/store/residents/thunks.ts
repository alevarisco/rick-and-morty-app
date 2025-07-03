import { client } from "../apis";
import { setResidentsList, startLoadingLocations } from "../locations/locationsSlice";

export const getResidents = (residents = []) => {

    return async (dispatch) => {
        dispatch(startLoadingLocations())
        let residentsArray: any[] = [];
        const residentPromises = residents
                .filter(c => c !== null && c !== undefined)
                .map(async (c) => {
                    const { data } = await client.create().get(c);
                    return data;
                });
            residentsArray = await Promise.all(residentPromises);
            console.log('residentsArray = ', residentsArray)
            dispatch(setResidentsList({ residents: residentsArray }));
    }
}