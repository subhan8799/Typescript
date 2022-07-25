import { legacy_createStore, applyMiddleware } from 'redux'
// @ts-ignore
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// @ts-ignore
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'users',
  storage: storage,
  whitelist: ['users'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
// @ts-ignore
const store = legacy_createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };

// @ts-ignore
// const store = legacy_createStore(
//   // @ts-ignore
//  rootReducer,
//  composeWithDevTools(applyMiddleware(logger, thunk))
// )
// export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './slices'

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
// import { configureStore } from "@reduxjs/toolkit";
// import {applyMiddleware} from "redux";
// import userReducer from "./Components/features/createSlice";
// import usersReducer from "./Components/features/usersReducer";
// import { persistReducer, persistStore } from "redux-persist";
// // @ts-ignore
// import logger from 'redux-logger';
// import rootReducer from "./rootReducer";
// import thunk from 'redux-thunk';
// import storage from "redux-persist/lib/storage";
// const persitConfig={
//     key:'users',
//     storage: storage,
//     whitelist: ['users'] // which reducer want to store
// }
// const pReducer = persistReducer(persitConfig,rootReducer);
// const middleware = applyMiddleware(thunk, logger);
// // @ts-ignore
// const store = configureStore(pReducer, middleware);
// // @ts-ignore
//   store = configureStore({
//     reducer: {
//         user:  userReducer,
//         users: usersReducer,
//     },
// });
//  const persistor = persistStore(store)
// export {persistor, store};
