import React from 'react'
import styled from 'styled-components'
import TitleSet from '../TitleSet';
import Board from '../Post/Board';
import useWindowSize from '../../hooks/useWindowSize';

const InfoPlaceWrap = styled.div`
  padding-top: 30px;
  background-color: #FCFCFC;
  > div:first-child {
    max-width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
    padding: 0 60px;
  }

  ${props => props.theme.window.mobile} {
    padding-top: 0;
    background-color: #FFFFFF;
    > div:first-child {
      max-width: 100%;
      min-width: 0;
      padding: 0 24px;
    }
  }
`;

function InfoPlace() {
  const { width } = useWindowSize();
  return (
    <InfoPlaceWrap>
      <TitleSet
        title='알아두면 좋은 소상공인 정보마당'
        text={width > 767.98 ? '혜택이 쏟아지는 모든 정보를 한 눈에, 원하는 정보를 골라서!' : `혜택이 쏟아지는 모든 정보를 한 눈에,\n원하는 정보를 골라서!`}
        arrow
      />
      <Board />
    </InfoPlaceWrap>
  );
}

export default InfoPlace