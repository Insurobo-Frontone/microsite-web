import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CommonAPI } from '../../api/CommonAPI';
import useAsync from '../../hooks/useAsync';
import View from './View';
import Label from '../Label';
import ContentInner from '../../layout/ContentInner';

const Wrap = styled.div`

  
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

`;

const Card = styled.li`
  padding: 20px;
  
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
      font-weight: 350;
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
`;

function Board() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const id = searchParams.get('id');
  const [state] = useAsync(getData, []);
  const { loading, data, error } = state;
 
  if (loading) return <ContentInner>로딩중..</ContentInner>;
  if (error) return <ContentInner>에러가 발생했습니다</ContentInner>;
  if (!data) return null;
  
  async function getData() {
    const res = await CommonAPI.get(`/api/public/infoPlaceList`)
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
  }

  return (
    <Wrap>
      {location.search === `?id=${id}` ? (<View api='infoPlaceDetail' block />) : (
        <StyledSlider {...settings}>
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
        )}
    </Wrap>

  )
}

export default Board;


