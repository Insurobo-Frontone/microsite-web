import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import rsp from '../assets/img/kdblifeLandingPage.png';
import cancer from '../assets/img/kdblifeLandingPage2.png';
import cancerMb from '../assets/img/kdblifeLandingPage2Mb.png';
import mini from '../assets/img/kdblifeLandingPage3.png';
import miniMb from '../assets/img/kdblifeLandingPage3Mb.png';

function KdbLife() {
  const [searchParams] = useSearchParams();
  const insuType = searchParams.get('insuType');
  const { width } = useWindowSize();

  return (
    <Wrap>
      {insuType === 'rsp' && 
        <img
          className='rsp'
          src={rsp} 
          alt='kdbLife' 
          onClick={() => window.open(width > 767.98 ? 'https://direct.kdblife.co.kr/p/p.do?ev=0718805' : 'https://direct.kdblife.co.kr/p/p.do?ev=0718806')} 
        />
      }
      {insuType === 'cancer' && 
        <img 
          src={width  > 767.98 ? cancer : cancerMb} 
          alt='kdbLife' 
          onClick={() => window.open(width > 767.98 ? 'https://direct.kdblife.co.kr/p/p.do?ev=0718803' : 'https://direct.kdblife.co.kr/p/p.do?ev=0718804')} 
        />
      }
      {insuType === 'mini' && 
        <img 
          src={width  > 767.98 ? mini : miniMb} 
          alt='kdbLife' 
          onClick={() => window.open(width > 767.98 ? 'https://direct.kdblife.co.kr/p/p.do?ev=0718801' : 'https://direct.kdblife.co.kr/p/p.do?ev=0718802')} 
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
    cursor: pointer;
  }
  .rsp {
    width: 500px;
  }
`;
