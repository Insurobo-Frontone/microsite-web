import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const TravelTerm =  ({ type1, type2, type3 }) => {
  const { watch } = useFormContext();
  const date1 = watch('localStart');
  const date2 = watch('localEnd');
  const gap = watch('localEnd') - watch('localStart');
  const travelDay = Math.ceil(gap / (1000 * 60 * 60 * 24) + 1);

  let month1 = date1?.getMonth() + 1;
  let day1 = date1?.getDate();
  let month2 = date2?.getMonth() + 1;
  let day2 = date2?.getDate();
  const startDate = date1?.getFullYear() + '.' + month1 + '.' + day1;
  const endDate = date2?.getFullYear() + '.' + month2 + '.' + day2;


  return (
    <Wrap>
      <>
        {type1 && (
          `(${startDate} 부터 ~${endDate} 까지)`
        )}
        {type2 && (
          `${startDate} ~${endDate} (${travelDay}일)`
        )}
        {type3 && (
          `${travelDay}일`
        )}
      </>
      
    </Wrap>
  ) 
}

export default TravelTerm;

const Wrap = styled.p`
  font-size: 20px;
  color: #333333;
  font-weight: 300;

  ${(props) => props.theme.window.mobile} {
    font-size: 14px;
  }
`;
