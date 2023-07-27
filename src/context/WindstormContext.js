import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext({
  
});

const initalState = {
  
}

const UserProvider = ({children}) => {


  const value = {};
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

const { Comsumer: UserConsumer } = UserContext;
export { UserProvider, UserConsumer }

export default UserContext;