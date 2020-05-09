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

const myReducer = (state = { feels: '' }, action) => {
    console.log('myReducer:', state, action);
    if (action.type === 'Feelz') {
    console.log('Feelz be:', action.payload)
    //console.log(`(index.js)`, state)
    feelz = action.payload.feelz;
    console.log(feelz)
    return { ...state, feeling: action.payload.feelz };
}
// if (action.type === 'Understandz') {
//     console.log('Understandz', action.payload)
//     // console.log(`(index.js)`, state)
//     understandz = action.payload.understanding;
//     return { ...state, understandz: action.payload.understanding };
// }
// if (action.type === 'Supportz') {
//     console.log('Supportz', action.payload)
//     // console.log(`(index.js)`, state)
//     supportz = action.payload.supportz;
//     return { ...state, supportz: action.payload.supportz };
// }
// if (action.type === 'smackTalk') {
//     console.log('smackTalk', action.payload)
//     // console.log(`(index.js)`, state)
//     smackTalk = action.payload.smackTalk;
//     return { ...state, smackTalk: action.payload.smackTalk };
// }

    return state;
};//end myReducer

const myStore = createStore(myReducer);

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>, document.getElementById('root')); registerServiceWorker();

//     } else if (action.type === 'addCustomer') {
//         console.log('inmyReducerAddCustomer', action.payload);
//         state.customerToAdd = action.payload;
//         console.log('newState', state);
//         return state;
//             // ...this.state.customerToAdd,
//             // [action]: action.payload
//     }