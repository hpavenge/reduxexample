import React, { Component } from 'react';

// rcc tab class and rfc for function
class Posts extends Component {

  constructor(props){
    super(props);
    this.state ={
      posts: []
    }
  }
  //Gets the data from the api to the var data
  // componentWillMount(){
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }
  //Adds it to the constructor property 'state'
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.setState({posts: data}))
  }
  //MaptheItems And render in the return method
  render() {
    const postItems = this.state.posts.map(post => (
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

export default Posts;