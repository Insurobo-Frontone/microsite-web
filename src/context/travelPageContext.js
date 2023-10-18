import { useState, createContext } from 'react';

const TravelPageContext = createContext({
  state: { page: 1, setPage: 2},
  actions: {
    setPage: () => {},
  }
});


const TravelPageProvider = ({children}) => {
  const [page, setPage] = useState(1)

  const value = {
    state: { page },
    actions: { setPage }
  };
  return (
    <TravelPageContext.Provider value={value}>{children}</TravelPageContext.Provider>
  )
}

const { Comsumer: TravelPageComsumer } = TravelPageContext;
export { TravelPageProvider, TravelPageComsumer }

export default TravelPageContext;