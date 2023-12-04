import { useState, createContext } from 'react';

const TravelPageContext = createContext({
  state: { open: false, setOpen: true},
  actions: {
    setOpen: () => {},
  }
  
});

const TravelPageProvider = ({children}) => {
  const [open, setOpen] = useState(false)
  const value = {
    state: { open },
    actions: { setOpen }
  };
  
  return (
    <TravelPageContext.Provider value={value}>{children}</TravelPageContext.Provider>
  )
}

const { Comsumer: TravelPageComsumer } = TravelPageContext;
export { TravelPageProvider, TravelPageComsumer }

export default TravelPageContext;