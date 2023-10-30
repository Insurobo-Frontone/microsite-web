import React from 'react'
import styled, { css } from 'styled-components'
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
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 20px;
    > div {
      padding-bottom: 4px;
      justify-content: flex-start;
      > div {
        margin-left: 10px;
      }
    }

    ${props => props.arrow && css`
      > div {
        justify-content: flex-start;
        > div {
          margin-left: 6px;
        }
      }
    `}
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

function TitleSet({ title, text, label, arrow, bgColor }) {
  return (
    <MainTitle arrow={arrow}>
      {title && (
        <div>
          <Title>{title}</Title>
          {label && (<Label label={label} bgColor={bgColor} />)}
          {arrow && <Arrow />}
        </div>
      )}
      {text && (<Text color='BLACK2' bold='400'>{text}</Text>)}
    </MainTitle>
  )
};

export default TitleSet