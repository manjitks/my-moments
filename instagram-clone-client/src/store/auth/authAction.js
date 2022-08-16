import '../Type.js'
import { DO_LOGOUT, LOGIN_SUCCESS } from '../Type.js';
export const handleSubmitRed = (res) => {
  return {
    type: LOGIN_SUCCESS,
    payload: res,
  };
};

export const handleLogout = () => {
  return {
    type: DO_LOGOUT,
    
  };
};


