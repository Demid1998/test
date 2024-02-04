import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { useDispatch } from 'react-redux';

import itemsReducer from './features/item/redux/reducer';
import userReducer from './features/auth/redux/reducer';

const rootReducer = combineReducers({
  itemsReducer,
  userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
