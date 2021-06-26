import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { searchReducer } from './search/reduce';

const middleware = [];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const combineAll = combineReducers({
    search: searchReducer
})

const makeStore = () => createStore(combineAll, enhancer);
export const wrapper = createWrapper(makeStore);