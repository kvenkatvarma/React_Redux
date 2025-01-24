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
            return state + action.payload.amount;
        case "WITHDRAW":
            return state - action.payload.amount;
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
    type:"DEPOSIT",payload:{amount:1000}
});

store.dispatch({
    type:"DEPOSIT",payload:{amount:450}
});

store.dispatch({
    type:"WITHDRAW",payload:{amount:250}
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App></App>
  
);