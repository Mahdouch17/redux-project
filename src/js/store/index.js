import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../Reducers/rootReducers";
import logger from 'redux-logger'

const store = createStore(rootReducers, compose(applyMiddleware(logger),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
