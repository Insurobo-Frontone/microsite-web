import React from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../layout';
import TitleSet from '../TitleSet';
import Content from '../Content';
import bg from '../../assets/img/left_bg.png';
import useWindowSize from '../../hooks/useWindowSize';
import { CommonAPI } from '../../api/CommonAPI';
import useAsync from '../../hooks/useAsync';
import View from './View';

const BoardWrap = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 142px 0;

  ${(props) => props.theme.window.mobile} {
    padding: 27px 10px;
  }
`;

const Card = styled.li`
  display: flex;
  width: 545px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFFF;
  overflow: hidden;
  z-index: 2;
  box-shadow: 8px 11px 50px 0 rgba(69, 117, 245, 0.15);
  border-radius: 20px;
  padding: 40px 35px;
  margin-bottom: 80px;
  :hover {
    box-shadow: 8px 11px 50px 0 rgba(69, 117, 245, 0.3);
  }
  :last-child {
    margin-bottom: 0;
  }
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 160px;
    box-shadow: 0 4px 15px 0 rgba(69, 117, 245, 0.15);
    padding: 31px 16px;
    justify-self: center;
    margin-bottom: 30px;
  }
`;

const Background = styled.img`
  position: absolute;
  width: 70%;
  left: -29%;
  top: 15%;

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    left: -50%;
    top: 25%;
    transform: scale(1.8);
  }
`;

const TextArea = styled.div`
  overflow: hidden;
  
  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    height: 100px;
  }
  > div {
    height: 150px;
    margin-top: 20px;
    overflow: hidden;
  }
  ${(props) => props.theme.window.mobile} {
    > h2 {
      font-size: 1rem;
      height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    > div {
      margin-top: 5px;
      height: 70px;
    }
  }
`;

const CardLink = styled(Link)`
  display: block;
  height: 100%;
`;

function Board() { 
  const { width } = useWindowSize();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const id = searchParams.get('id');
  const [state] = useAsync(getData, []);
  const { loading, data, error } = state;
 
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  
  async function getData() {
    const res = await CommonAPI.get(`/api/public/infoPlaceList`)
    return res.data.data.slice(0).reverse(); 
  }
  
  return (
    <Layout>
      <Content 
        top={width > 768 ? '6.56%' : '16.5%'}
        bottom={width > 768 ? '10%' : '16.5%'}
      >
        <TitleSet
          small_title='정보 알림이'
          big_title1='소상공인&nbsp;'
          big_title2='정보마당'
          row={width > 768 ? true : false}
        />
        <Background src={bg} alt='배경화면'/>
        {location.search === `?id=${id}` ? (<View api='infoPlaceDetail' block/>) : (
          <BoardWrap>
            {data.map((dt) => (
              <Card key={dt.id} className={dt.class}>
                <CardLink to={`?id=${dt.id}`}> 
                  <TextArea>
                    <h2>{dt.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: dt.content}}></div>
                  </TextArea>
                </CardLink>
              </Card>
            ))}
          </BoardWrap> 
        )}
      </Content> 
    </Layout>
  )
}

export default Board;


