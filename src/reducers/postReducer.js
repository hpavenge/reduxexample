import {FETCH_POSTS, NEW_POST} from '../actions/types';
//initial = lists and vars need to be initalized 
const initialstate = {
    items: [],
    item: {}
}

export default function(state = initialstate, action){
    //STEP 2 Returns the state with items being fetched
    //returns state and payload from the call posts.js
    switch(action.type){
        case FETCH_POSTS:
        console.log('reducer')
            return {
                ...state,
                items: action.payload
            }
        default:
        return state;
    }
}