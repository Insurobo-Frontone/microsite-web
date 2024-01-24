import React from 'react';
import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import rsp from '../assets/img/kdblifeLandingPage.png';

function KdbLife() {
  const [searchParams] = useSearchParams();
  const insuType = searchParams.get('insuType');
  const { width } = useWindowSize();

  return (
    <Wrap>
      {insuType === 'rsp' && 
        <img 
          src={rsp} 
          alt='kdbLife' 
          onClick={() => window.open(width > 767.98 ? 'https://direct.kdblife.co.kr/p/p.do?ev=0718805' : 'https://direct.kdblife.co.kr/p/p.do?ev=0718806')} 
        />
      }
    </Wrap>
     
  )
}

export default KdbLife;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 500px;
  }
`;
