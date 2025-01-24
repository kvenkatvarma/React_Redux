import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here

import App from './App';
var defaultState =0 ;

//reducers
const balanceReducer =(state=defaultState,action)=>{
    switch (action.type){
        case "DEPOSIT":
            return state + 100;
        case "WITHDRAW":
            return state - 100;
            default:
                return state;
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App></App>
  
);