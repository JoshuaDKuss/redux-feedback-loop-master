import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import registerServiceWorker from './registerServiceWorker';
// import axios from 'axios';

// const reducerInitialState = {
//     feedbackToAdd: {
//         feelz: '',
//         understandz: '',
//         supportz: '',
//         smackTalk: '',
//     },
//     type: []
// };

let feelz;
let understandz;
let supportz;
let smackTalk;

// reducer function
const myReducer = (state = { feelz: '', understandz: '', supportz: '', smackTalk: '' }, action) => {
    //console.log('myReducer:', state, action);
    if (action.type === 'Feelz') {
    //console.log('Feelz be:', action.payload)
    //console.log(`(index.js)`, state)
    feelz = action.payload.feelz;
    console.log(feelz)
    return { ...state, feeling: action.payload.feelz };
}
if (action.type === 'Understandz') {
    //console.log('Understandz', action.payload)
    // console.log(`(index.js)`, state)
    understandz = action.payload.understandz;
    return { ...state, understandz: action.payload.understandz };
}
if (action.type === 'Supportz') {
    console.log('Supportz', action.payload)
    // console.log(`(index.js)`, state)
    supportz = action.payload.supportz;
    return { ...state, supportz: action.payload.supportz };
}
if (action.type === 'smackTalk') {
    //console.log('smackTalk', action.payload)
    // console.log(`(index.js)`, state)
    smackTalk = action.payload.smackTalk;
    return { ...state, smackTalk: action.payload.smackTalk };
}

    return state;
};//end myReducer

const myStore = createStore(myReducer);

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>, document.getElementById('root')); registerServiceWorker();