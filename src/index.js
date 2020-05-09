import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux'; 
import registerServiceWorker from './registerServiceWorker';
// import axios from 'axios';

// const reducerInitialState = {
//     customerToAdd: {
//         // name: '',
//         // address: '',
//         // city: '',
//         // zip: '',
//     },
//     type: []
// };

// const myReducer = (state = reducerInitialState, action) => {
//     console.log('myReducer:', state, action);
//     if (action.type === 'addPizza') {
//         console.log('inmyReducerAddPizza', action.payload);
//         state.type = [...state.type, action.payload]; 
//         console.log(state.type);
//         return state;
//     } else if (action.type === 'addCustomer') {
//         console.log('inmyReducerAddCustomer', action.payload);
//         state.customerToAdd = action.payload;
//         console.log('newState', state);
//         return state;
//             // ...this.state.customerToAdd,
//             // [action]: action.payload
//     }
// };//end myReducer

// const myStore = createStore(myReducer);

ReactDOM.render(
<App />, 
document.getElementById('root'));
registerServiceWorker();
