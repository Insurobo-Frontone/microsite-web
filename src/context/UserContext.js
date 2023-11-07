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
    birthyear: '',
    birthday: '',
    phone_number: '',
    gender: '',
    name: '',
    email: '',
    
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