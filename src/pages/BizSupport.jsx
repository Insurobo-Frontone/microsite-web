import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../components/Font';

import useWindowSize from '../hooks/useWindowSize';
import Button from '../components/Button';
import Layout from '../layout/index';
import banner from '../assets/img/event/bizsupport_banner.png';
import ContentInner from '../layout/ContentInner';
import DetailContent from '../components/Content/DetailContent';

const Wrap = styled.div`
  background-color: #F9F9F9;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  > img {
    position: absolute;
    top: 0;
    left: 358px;
    z-index: 0;
  }
  ${(props) => props.theme.window.mobile} {
    padding: 0 24px;
    > img {
      width: 200px;
      top: 13px;
      left: calc(100% - 180px);
    }
  }
`;

const BottonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 76px;

  ${(props) => props.theme.window.mobile} {
    padding-bottom: 0px;
  }
`;

const TextBox = styled.div`
  padding-top: 120px;
  z-index: 1;
  > h2 {
    font-size: 30px;
    font-weight: 400;
    > br {
      display: none;
    }
  }
  > p {
    font-size: 80px;
    font-weight: 800;
    color: #FF9243;
    line-height: 115%;
    padding-top: 165px;
    padding-bottom: 179px;
    letter-spacing: -1%;
  }
  ${(props) => props.theme.window.mobile} {
    padding-top: 0px;
    padding-bottom: 74.43px;

    > h2 {
      font-size: 15px;
      padding-top: 50px;
      padding-bottom: 70px;
      > br {
        display: block;
      }
    }
    > p {
      font-size: 23px;
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

function BizSupport() {
  const { width } = useWindowSize();
  return (
    <Layout>
      <Wrap>
        <ContentInner>
          <DetailContent >
            <Banner>
              <TextBox>
                <h2>2023년 소상공인 <br />지원정책</h2>
                <p>
                  정부 예산<br />
                  소진전에<br />
                  신청하셔서<br />
                  혜택 누리세요
                </p>
              </TextBox>
              <img src={banner} alt='icon'/>
            </Banner>
            <BottonBox>
              <Link to='/bizsupport/list1'>
                <Button title='소상공인 정책자금' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
              </Link>
              {/* <Link to='/bizsupport/list2'>
                <Button title='소상공인 창업지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
              </Link>
              <Link to='/bizsupport/list3'>
                <Button title='소상공인 성장지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
              </Link>
              <Link to='/bizsupport/list4'>
                <Button title='소상공인 재기지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
              </Link>
              <Link to='/bizsupport/list5'>
                <Button title='소상공인 특화지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
              </Link>
              <Link to='/bizsupport/list6'>
                <Button title='전통시장 활성화지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
              </Link> */}
            </BottonBox>
          </DetailContent>
        </ContentInner>
      </Wrap>
    </Layout>
  )
}

export default BizSupport