// import React, { useReducer, createContext } from 'react';

// const initialdata = {
//   coverData: {}
// };

// function windstormReducer(state, action) {
//   switch (action.type) {
//     case 'CREATE':
//       return state.concat(action.todo);
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// export function WindstormProvider({ children }) {
//   const [state, dispatch] = useReducer(windstormReducer, initialdata);
//   return children;
// }