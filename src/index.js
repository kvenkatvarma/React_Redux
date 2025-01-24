import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import { createStore } from 'redux';
import App from './App';
var defaultState =0 ;

//reducers
const balanceReducer =(state=defaultState,action)=>{
    console.log("reducer invoked");
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
var store = createStore(balanceReducer);
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App></App>
  
);