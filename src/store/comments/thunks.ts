import { rickandmortyApi } from "../apis";

interface Comment {
    name: string;
    email: string;
    comment: string;
}

export const postNewComment = ({comment}: Comment) => {

    return async (dispatch) => {
           const {data} = await rickandmortyApi.post('/episode', {
            comment,
           });
           console.log('new comment = ', data)
       }
}