import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { createStore } from 'redux';
import App from './App';
import {composeWithDevTools} from "redux-devtools-extension";
var defaultState =0 ;

//reducers
const balanceReducer =(state=defaultState,action)=>{
    console.log("reducer invoked",action);
    switch (action.type){
        case "DEPOSIT":
            return state + 100;
        case "WITHDRAW":
            return state - 100;
            default:
                return state;
    }
};

//store
var store = createStore(balanceReducer,composeWithDevTools());
store.subscribe(()=>{
    console.log(store.getState());
});
//dispatch
store.dispatch({
    type:"DEPOSIT"
});

store.dispatch({
    type:"DEPOSIT"
});

store.dispatch({
    type:"WITHDRAW"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App></App>
  
);