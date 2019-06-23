import { types } from '../../actions/types';
export default (state = [], actions) => {
    switch (actions.type) {
        case types.GET_POSTS:
            return actions.payload;
        default:
            return state;
    }
};