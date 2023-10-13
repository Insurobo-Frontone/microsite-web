import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  padding-top: 90px;
  padding-bottom: 118px;
  > h2 {
    font-size: 100px;
    line-height: 1;
    color: #FF9243;
  }
  > div {
    margin-left: 1.3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h2 {
      font-size: 50px;
      color: #FF9243;
    }
    > p {
      font-size: 20px;
      color: #2F2F2F;
      font-weight: 300;
    }
  }
  ${(props) => props.theme.window.mobile} {
    padding-top: 0;
    padding-bottom: 0;
    > h2 {
      font-size: 28px;
      line-height: 1;
      padding-bottom: 10px;
    }
    > div {
      white-space: pre-wrap;
      > h2 {
        font-size: 15px;
      }
      > p {
        font-size: 13px;
      }
    }
  }
`;

function ListTitle({page, title, desc}) {
  return (
    <Wrap>
      <h2>{page}</h2>
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </Wrap>
  )
}

export default ListTitle;