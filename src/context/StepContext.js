import { useState } from 'react';
import { createContext } from 'react';

const StepContext = createContext()

  const StepProvider = ({children}) => {
    const [step] = useState({
      firstStep: false,
      secondStep: false,
      thirdStep: false
    })
    const value = {
      state: { step },
    }
    return (
      <StepContext.Provider value={value}>
        {children}
      </StepContext.Provider>
    )
  }

  const { Comsumer: StepConsumer } = StepContext;
  export { StepProvider, StepConsumer }
  
  export default StepContext;