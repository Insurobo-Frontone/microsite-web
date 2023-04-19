import { createContext, useState } from "react";

const UserContext = createContext({
    loggedUser: {
        loginType: '',
        userId: '',
        userName:'',
        first_name: '',
        phoneRole: '',
        marketing_yn: ''
    },
    // loggedIn: false,
    setLoggedUser: () => {},
    // setLoggedIn: () => {}
});

const UserContextProvider = ({children}) => {

  const setLoggedUser = (data) => {
    setState(prevState => ({
    ...prevState,
    loggedUser: data
    }))
  }

  // const setLoggedIn = () => {
  //   setState(prevState => ({
  //     ...prevState, 
  //     loggedIn: !prevState.loggedIn
  //   }))
  // }

  const initialState = {
    loggedUser: {},
    // loggedIn: false,
    setLoggedUser,
    // setLoggedIn
  }

  const [state, setState] = useState(initialState);

  return (
    <UserContext.Provider value={state}>
        {children}
    </UserContext.Provider>
  )
}

const { Consumer: UserConsumer } = UserContext;

export { UserContextProvider, UserConsumer };

export default UserContext