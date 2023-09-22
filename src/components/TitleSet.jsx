import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../components/Font';
import Label from './Label';


const MainTitle = styled.div`
 
`;


function TitleSet({title, text, label}) {
  return (
    <MainTitle>
      {title && (
        <div>
          <Title>{title}</Title>
          {label && (<Label>{label}</Label>)}
        </div>
      )}
      {text && (<Text color='BLACK2' bold='600'>{text}</Text>)}
    </MainTitle>
  )
};

export default TitleSet