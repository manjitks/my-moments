import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist'


import userReducer from './user/user.reducer';
import authReducer from './auth/authReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}

const rootReducer =  combineReducers({
  shop: userReducer,
  auth:authReducer
});

export default persistReducer(persistConfig,rootReducer)