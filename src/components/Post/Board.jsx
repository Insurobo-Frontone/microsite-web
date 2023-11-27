import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CommonAPI } from '../../api/CommonAPI';
import useAsync from '../../hooks/useAsync';
import Label from '../Label';
import ContentInner from '../../layout/ContentInner';
import icon from '../../assets/icon/infoMoreIcon.png';

const Wrap = styled.div`
  ${props => props.theme.window.mobile} {
    padding: 20px 24px 0;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    width: 100%;
    margin: 0;
    padding: 30px 0;
    
    .slick-slide {
      width: 383px;
      height: 194px;
      margin-right: 20px;
      border-radius: 15px;
      box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);
      background-color: #FFFFFF;
    }
  }

  ${props => props.theme.window.mobile} {
    .slick-track {
      padding: 0;
      .slick-slide {
        max-width: 100%;
        height: 159px;
        box-shadow: none;
        margin-right: 0;
      }
    }
  }
`;

const Card = styled.div`
  padding: 20px;
  z-index: 999;
  
  ${props => props.theme.window.mobile} {
    padding: 18px 14px;
    border: 2px solid #F4F4F4;
    height: 149px;
    border-radius: 15px;
  }
`;

const CardLink = styled(Link)`
  > div {
    display: flex;
    justify-content: space-between;
    
    > h2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #545454;
      font-size: 18px;
      margin-right: 12px;
      margin-bottom: 20px;
      font-weight: 300;
    }
  }

  ${props => props.theme.window.mobile} {
    > div {
      > h2 {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 16px;
      }
    }
  }
`;


const TextArea = styled.div`
  overflow: hidden;
  
  > div {
    height: 81px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  ${props => props.theme.window.mobile} {
    > div {
      height: 52px;
    }
  }
`;

const InfoMoreBtn = styled.div`
  display: none;
  ${props => props.theme.window.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 46px;
    border: 1.5px solid #2EA5FF;
    background-color: #FFFFFF;
    margin-top: 10px;
    > p {
      font-weight: 300px;
      color: #2D2D2D;
      display: flex;
      align-items: center;
      ::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background-image: url(${icon});
        margin-right: 6px;
      }
    }
  }
`;

function Board() {
  const [state] = useAsync(getData, []);
  const { loading, data, error } = state;
  const sliderRef = useRef(null);
  const next = useCallback(() => sliderRef.current.slickNext(), []);

  if (loading) return <ContentInner>로딩중..</ContentInner>;
  if (error) return <ContentInner>에러가 발생했습니다</ContentInner>;
  if (!data) return null;
  
  async function getData() {
    const res = await CommonAPI.get(`/api/public/infoPlaceList`);
    return res.data.data.slice(0).reverse(); 
  }

  const settings = {
    speed: 1000,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          vertical: true,
          verticalSwiping: true,
          autoplay: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: false,
        }
      },
    ]
  }

  return (
    <Wrap>
      <>
        <StyledSlider 
          {...settings} ref={sliderRef}>
            {data.map((dt) => (
              <Card key={dt.id} className={dt.class}>
                <CardLink to={`/board?id=${dt.id}`}>
                  <div>
                    <h2>{dt.title}</h2>
                    <Label 
                      label={dt.id === 6 ? 'NEW' : 'HOT' }
                      color={dt.id === 6 ? 'BLUE5' : 'RED'}
                      bgColor={dt.id === 6 ? 'BLUE_RGBA' : 'RED_RGBA'}
                    />
                  </div>
                  <TextArea>
                    <div dangerouslySetInnerHTML={{__html: dt.content}}></div>
                  </TextArea>
                </CardLink>
              </Card>
            ))}
          </StyledSlider> 
          <InfoMoreBtn onClick={next}>
            <p>다양한 정보 더보기</p>
          </InfoMoreBtn>
        </>
    </Wrap>
    )
  }

export default Board;


