import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext({
  state: { 
    user: {
        loginType: '',
        marketing_yn: '',
        phoneRole: '',
        userId: '',
        userName: '',
        address: '',
        address_detail: ''
      }
  },
  actions: {
    setUser: () => {},
  }
});

const initalState = {
  loginType: '',
  marketing_yn: '',
  phoneRole: '',
  userId: '',
  userName: '',
  address: '',
  address_detail: ''

}

const UserProvider = ({children}) => {
  const [user, setUser] = useState(initalState)

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

export default UserContext