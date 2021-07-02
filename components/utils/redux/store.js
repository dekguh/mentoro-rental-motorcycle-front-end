import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { searchReducer } from './search/reduce';
import { userReducer } from './user/reduce';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
);

const combineAll = combineReducers({
    search: searchReducer,
    user: userReducer
})

const makeStore = (context) => {
    const store = createStore(combineAll, enhancer)
    sagaMiddleware.run(rootSaga)
    return store;
};

export const wrapper = createWrapper(makeStore);