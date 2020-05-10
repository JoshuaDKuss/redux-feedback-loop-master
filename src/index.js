import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// const reducerInitialState = {
//     feedback: {
//         feeling: '',
//         understanding: '',
//         support: '',
//         comments: '',
//     },
//     type: []
// };

//  state = { feeling: '', understanding: '', support: '', comments: '', ReviewForm: '' }   {reducerInitialState}

let feeling; let understanding; let support; let comments; 
let review = { feeling: feeling, understanding: understanding, support: support, comments: comments};

// reducer function
const myReducer = (state = { feeling: '', understanding: '', support: '', comments: '' }, action) => {  //ReviewForm
    //console.log('myReducer:', state, action);
    if (action.type === 'feeling') {
    console.log('feeling', action.payload)
    console.log(`(index.js)`, state)
    feeling = action.payload.feeling;
    console.log(feeling)
    return { ...state, feeling: feeling };  //...state, feeling: action.payload.feeling
}
if (action.type === 'understanding') {
    console.log('understanding', action.payload)
    console.log(`(index.js)`, state)
    understanding = action.payload.understanding;
    return { ...state, understanding: understanding };  //action.payload.
}
if (action.type === 'support') {
    console.log('support', action.payload)
    console.log(`(index.js)`, state)
    support = action.payload.support;
    return { ...state, support: support }; // action.payload.
}
if (action.type === 'comments') {
    console.log('comments', action.payload)
    console.log(`(index.js)`, state)
    comments = action.payload.comments;
    return { ...state, comments: comments };  // action.payload.
}
if (action.type === 'Submit' ){
    review = { feeling: feeling, understanding: understanding, support:support, comments: comments};
    console.log('axios post', review);
    axios.post('/post', review)
    .then(result => {
        console.log(`axios post works`);
    }).catch(error => {
        console.log(`problem with axios post`, error);
    }) // End AXIOS POST
}
    return state;
};//end myReducer

const myStore = createStore(myReducer);

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>, document.getElementById('root')); registerServiceWorker();