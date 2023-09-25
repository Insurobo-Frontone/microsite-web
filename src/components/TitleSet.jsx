import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../components/Font';
import Label from './Label';


const MainTitle = styled.div`
  padding-bottom: 30px;
  > div {
    display: flex;
    align-items: center;
    padding-bottom: 6px;
    > div {
      margin-left: 10px;
    }
  }
`;


function TitleSet({title, text, label}) {
  return (
    <MainTitle>
      {title && (
        <div>
          <Title>{title}</Title>
          {label && (<Label label={label}/>)}
        </div>
      )}
      {text && (<Text color='BLACK2' bold='600'>{text}</Text>)}
    </MainTitle>
  )
};

export default TitleSet