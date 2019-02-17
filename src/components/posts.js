import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

//so if made the action call and saved the data in the reducer
//can get the data from connect import
//1. create api call
//2. dispatch this to a reducer (maps state, variables)
//3. get data from connect import (connects components to redux store)
//4. and ofc do the api call 

// rcc tab class and rfc for function
class Posts extends Component {
    componentWillMount(){
      //call the action to map it to a property
      this.props.fetchPosts();
    }

  render() {
    //old situation const postItems = this.state.posts.map(post => (
    //new uses mapped properties from store  
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

//STEP 4 not sure why
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

//STEP 3
//map state to properties so they can be used in the component
const mapStateToProps = state => ({
  posts: state.posts.items
  //reducer had this name in the reducerCombiner
  //this.props.posts will be mapped
})
//do the fetch request
export default connect(mapStateToProps,{ fetchPosts })(Posts);