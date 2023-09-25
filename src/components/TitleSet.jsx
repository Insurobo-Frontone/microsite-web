import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../components/Font';
import Label from './Label';
import arrowIcon from '../assets/icon/titleArrowIcon.png';

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

const Arrow = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function TitleSet({ title, text, label, arrow }) {
  return (
    <MainTitle>
      {title && (
        <div>
          <Title>{title}</Title>
          {label && (<Label label={label} />)}
          {arrow && <Arrow />}
        </div>
      )}
      {text && (<Text color='BLACK2' bold='600'>{text}</Text>)}
    </MainTitle>
  )
};

export default TitleSet