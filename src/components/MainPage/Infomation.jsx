import React from 'react'
import styled from 'styled-components'
import Content from '../Content';
import TitleSet from '../TitleSet';
import left from '../../assets/img/left_bg.png';
import right from '../../assets/img/right_bg.png';
import { useScroll } from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';
import Passage from './Passage';
import bannerImg from '../../assets/img/infomationBanner.png';

const InfoBanner = styled.div`
  /* height: 400px; */
  /* background-color: #EEE; */
  margin-top: 9%;
  background-image: url(${bannerImg});
  background-repeat: no-repeat;
  height: 34vh;
  background-position: left bottom;
  background-size: contain;
  background-color: #AEB5EC;

  ${(props) => props.theme.window.mobile} {
    margin-top: 11%;
    height: 320px;
    width: 100%;
  }
`;


const LeftBackground = styled.div`
  position: absolute;
  top: 10vw;
  left: -25vw;
  opacity: 0;
  transform: rotate(37.09deg);
  transition: opacity 1s ease;
  transition-delay: 0.4s;
  > img {
    width: 55.85vw;
  }
  &.show {
    opacity: 1;
  }

  ${(props) => props.theme.window.mobile} {
    /* top: 35%;
    left: -50%; */
    top: 250px;
    left: -280px;
   > img {
      width: 500px;
   } 
  }
`;

const RightBackground = styled.div`
  position: absolute;
  top: -10vw;
  right: -18vw;
  opacity: 0;
  transition: opacity 1s ease;
  > img {
    width: 36.5vw;
  }
  &.show {
    opacity: 1;
  }

  ${(props) => props.theme.window.mobile} {
    
    top: -7.5%;
    right: -22%;
    > img {
      width: 200px;
    }
  }
`;





function Infomation({scrollY1, scrollY2}) {
  const { y } = useScroll();
  const { width } = useWindowSize();

  return (
    <Content
      top={width > 768 ? '3.4%' : '15.4%'} 
      bottom={width > 768 ? '3.4%' : '15.4%'}
      scrollY1={scrollY1}
      scrollY2={scrollY2}
    >
     
      <TitleSet
        small_title='정보 알림이'
        big_title1='소상공인&nbsp;'
        big_title2='정보마당'
        row={width > 768 ? true : false}
      />
       <Passage link='/board' title='지원사업 더 보러가기' circle='POINT'>
          <InfoBanner />
       </Passage> 
        
    </Content>
  )
}

export default Infomation