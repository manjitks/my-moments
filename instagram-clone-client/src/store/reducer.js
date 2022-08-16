const initialState = {
    someProp: "",
    anotherProp: ""
  };
  const reducer = (state=initialState, action) => {
    switch(action.type) {
      case 'SOME_ACTION':
        return {
          ...state,
          someProp: ""
        };
  
      default:
        return state;
    }
  };
  export default reducer;