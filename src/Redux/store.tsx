import { legacy_createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../rootReducer';
const middleware = composeWithDevTools(applyMiddleware(thunk));
const store = legacy_createStore(rootReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };