import { ACCESS_TOKEN, IS_AUTHENTICTED, USER } from "../../component/common/constants";
import { DO_LOGOUT, LOGIN_SUCCESS } from "../Type";

const INITIAL_STATE = {
    currentUser: null
  };
  
  const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        console.log("LOGIN_SUCCESS")
        localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
        localStorage.setItem(USER, action.payload.user);
        localStorage.setItem(IS_AUTHENTICTED, true);
        return {
          ...state,
          currentUser: action.payload.user,
          accessToken:action.payload.accessToken,
          isAuthenticated:true
        };
        case DO_LOGOUT:
          console.log("DO_LOGOUT")
          localStorage.removeItem(ACCESS_TOKEN)
          localStorage.removeItem(IS_AUTHENTICTED);
          localStorage.removeItem(USER)
          return {
            ...state,
            currentUser: null,
            isAuthenticated:false,
            accessToken:null
          };
      default:
        return state;
    }
  };
  
  export default authReducer;