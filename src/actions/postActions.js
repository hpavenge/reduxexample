import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch=> {
    console.log('fetching');
    // return function(dispatch){
    //         fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({posts: data}))
    // } old code state in the constructor his property with this.setState -> will now come from the store
    //STEP 1 the API CALL
    //1.new code fetches the data 
    //2.dispatches the data to the reducer    
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => 
            dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
        );
};