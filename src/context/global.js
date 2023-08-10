import { useContext, useReducer, createContext } from "react";

const dispatchContext = createContext(undefined);
const stateContext = createContext(undefined);


const initialState = {

}
const globalReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      }
    default: 
      return { state };
  }
}
export const GlobalContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  )
}
//useState
export const useGlobalState = () => {
  const state = useContext(stateContext);
  if (!state) {
    throw new Error('useGlobalState not found');
  }
}

// useDispatch
export const useGlobalDispatch = () => {
  const dispatch = useContext(dispatchContext);
  if (!dispatch) {
    throw new Error('useGlobalDispatch not found');
  }
  return dispatch;
}