import {
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const createReduxStore = (initialState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({ thunk: true }), sagaMiddleware],
    preloadedState: initialState,
  });
  // sagaMiddleware.run(rootSaga);
  return store;
};
