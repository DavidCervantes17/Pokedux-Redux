import { SET_ISLOADING } from "../actions/types";
import { fromJS } from "immutable";

const initialState = fromJS({
    isLoading: false
});

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_ISLOADING: return state.setIn(['loading'], action.payload);
        default: return state
    }
}