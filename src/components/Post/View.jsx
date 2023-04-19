import React from 'react'
import styled from 'styled-components';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {CommonAPI} from "../../api/CommonAPI";

const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10% 0;

  ${(props) => props.theme.window.tab} {
    padding: 5% 0;
  }
`;
const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: #F7F7F7;
  white-space: pre;
  border-top: 1px solid #C4C4C4;
  padding-left: 39px;
  > h2 {
    font-size: 1.5rem;
    width: 800px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    display: flex;
    > span {
      display: block;
      color: #FFFFFF;
      height: 39px;
      padding: 0 23px;
      border-radius: 19px;
      text-align: center;
      line-height: 39px;
      font-size: 0.75rem;
      margin-right: 39px;
    }
  }
  > p {
    font-size: 0.9rem;
  }
  
  ${(props) => props.theme.window.tab} {
    height: 100px;
    padding-left: 0;
    > h2 {
      font-size: 1rem;
    }
  }
`;

const ViewBody = styled.div`
  padding: 5% 0;
  font-size: 0.9rem;
  color: #808080;
  ${(props) => props.theme.window.mobile} {
    padding: 19% 0 50%;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color:#4575F5;
  color: #FFFFFF;
  ${(props) => props.theme.window.mobile} {
    font-size: 0.8666666666666667rem;
  }
`;


function View() {
  let navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [data, setData] = useState([]);

  useEffect(() => {
    handleCommunityDetail();
  }, [id]);

  const handleCommunityDetail = async () =>{
      const res = await CommonAPI.get(`/api/public/communityDetail?id=${id}`);
      setData(res.data.data);
  }

  function handleClick(link) {
    navigate(link);
  }
  return (
    <ViewContainer>
      {data && (
        <>
          <ViewHeader key={data.id}>
            <h2>
              <span style={{
                backgroundColor: data.category === '풍수해' ? '#4575F5' :
                  data.category === '이벤트' ? '#F58839' :
                  data.category === '지원정책' ? '#336BFF' :
                  data.category === '대출' ? '#6F85E3' :
                  data.category === '홍보' ? '#FFCAB2' : null
              }}>
                {data.category}
              </span>
              {data.title}
            </h2>
            <p style={{marginRight:"10px"}}>{data.createdDate}</p>
          </ViewHeader>
          <ViewBody>
            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
          </ViewBody>

          <ButtonWrap>
            <Button onClick={() => handleClick(-1)}>이전</Button>
          </ButtonWrap>
        </>
      )}
    </ViewContainer>
  )
}

export default View
