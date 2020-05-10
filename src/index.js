import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// const reducerInitialState = {
//     feedbackToAdd: {
//         // feelz: '',
//         // understandz: '',
//         // supportz: '',
//         // smackTalk: '',
//     },
//     type: []
// };

//  { feelz: '', understandz: '', supportz: '', smackTalk: '', ReviewForm: '' }
let feelz; let understandz; let supportz; let smackTalk; 
let ReviewForm = { feelz: feelz, understandz: understandz, supportz: supportz, smackTalk: smackTalk};

// reducer function
const myReducer = (state = { feelz: '', understandz: '', supportz: '', smackTalk: '' }, action) => {  //ReviewForm
    console.log('myReducer:', state, action);
    if (action.type === 'Feelz') {
    console.log('Feelz', action.payload)
    console.log(`(index.js)`, state)
    feelz = action.payload.feelz;
    console.log(feelz)
    return { feelz: feelz };  //...state, feeling: action.payload.feelz
}
if (action.type === 'Understandz') {
    console.log('Understandz', action.payload)
    console.log(`(index.js)`, state)
    understandz = action.payload.understandz;
    return { ...state, understandz: understandz };  //action.payload.
}
if (action.type === 'Supportz') {
    console.log('Supportz', action.payload)
    console.log(`(index.js)`, state)
    supportz = action.payload.supportz;
    return { ...state, supportz: supportz }; // action.payload.
}
if (action.type === 'smackTalk') {
    console.log('smackTalk', action.payload)
    console.log(`(index.js)`, state)
    smackTalk = action.payload.smackTalk;
    return { ...state, smackTalk: smackTalk };  // action.payload.
}
if (action.type === 'submit' ){
    let ReviewForm = { feelz: feelz, understandz: understandz, supportz:supportz, smackTalk: smackTalk};
    console.log('axios post', ReviewForm);
    axios.post('/post', ReviewForm)
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