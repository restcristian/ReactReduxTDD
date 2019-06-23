import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => {
    return async dispatch => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
            await dispatch({
                type: types.GET_POSTS,
                payload: res.data
            });
        } catch (e) {
            console.error(e);
        }
    }
};