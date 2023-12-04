import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext({
  state: { 
    user: {}
  },
  actions: {
    setUser: () => {},
  }
});


const UserProvider = ({children}) => {
  const [user, setUser] = useState({
  })
  const value = {
    state: { user },
    actions: { setUser }
  };
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}

const { Comsumer: UserConsumer } = UserContext;
export { UserProvider, UserConsumer }

export default UserContext;