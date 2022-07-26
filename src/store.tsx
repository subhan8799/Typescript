import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
// @ts-ignore
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
const store = legacy_createStore(rootReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };

