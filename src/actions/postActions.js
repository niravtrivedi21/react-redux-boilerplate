import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(datas => dispatch({
      type: FETCH_POSTS,
      payload: datas
    }))
};

export const createPost = (postData) => dispatch => {
  console.log('Demo');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method :'POST',
    headers : {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(res => res.json())
  .then(data => dispatch({
    type: NEW_POST,
    payload: data
  }));
}