import React, { Component } from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux';
import Posts from './post';
import PostForm from './postForm';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <h2>React Boilerplate !</h2>
        <PostForm />
        <hr />
          <Posts />
      </div>
      </Provider>
        );
      }
    }
    
    export default App;
