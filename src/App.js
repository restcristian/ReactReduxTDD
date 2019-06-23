import React, { useState } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions'
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Doe',
  age: 24,
  email: 'joe@gmail.com',
  onlineStatus: true
}];
const initialState = {
  hideBtn: false
};

function App(props) {

  const { posts } = props;
  const [state, setState] = useState(initialState);

  function fetch() {
    props.fetchPosts();
    exampleMethod_updatesState();
  }

  function exampleMethod_updatesState() {
    const { hideBtn } = state;
    setState({
      hideBtn: !hideBtn
    });
  }
  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch
  };
  return (
    <div className="App" data-test="app-component">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
        {!state.hideBtn &&
          <SharedButton {...configButton} />
        }
        {posts.length > 0 &&
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return (
                <ListItem key={post.id} {...configListItem} />
              );
            })}
          </div>
        }
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
