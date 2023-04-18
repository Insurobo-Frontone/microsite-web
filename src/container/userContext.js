import { createContext } from "react";

const Context = createContext({
    loggedUser: {
        userName:'',
        first_name: '',
        phoneRole: '',
        marketing_yn: ''
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {}
});

export default Context;



