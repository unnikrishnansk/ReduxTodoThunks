import { legacy_createStore , compose, applyMiddleware } from "redux";
import {reducer as todoreducer} from "./reducer";
import  thunk from 'redux-thunk'; 

// const customMiddleware = ({dispatch}) => (next) => (action) => {
//     if(typeof action === "function")
//     {
//         return action(dispatch);
//     }
//     else if(typeof action === "object")
//     {
//     return next(action);
//     }
// }


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(todoreducer,composeEnhancers(applyMiddleware(thunk)));

export {store};