import React, { useState } from "react";
import styled from "styled-components";
import PolicyButton from "../../Input/PolicyButton";
import { list1, list2, list3, list4, list5 } from "../../TravelData/QnaData";
import Button from "../Button";

const Qna = ({ type }) => {
  const [id, setId] = useState({
    qnaId: 1,
    listId: 1
  });

  const qnaData = [
    {
      id: 1,
      title: '가입',
      data: list1
    },
    {
      id: 2,
      title: '취소/변경/연장',
      data: list2
    },
    {
      id: 3,
      title: '가입증명서',
      data: list3
    },
    {
      id: 4,
      title: '보상청구',
      data: list4
    },
    {
      id: 5,
      title: '의료비',
      data: list5
    },
  ]


  return (
    <QnaWrap>
      <div>
        <div>
          {type === 'local' && qnaData.map((dt) => (
            <div>
              <h2>{dt.title}</h2>
              <ul key={dt.id}>
                {dt.data.map((list) => (
                  <li key={list.id}>
                    <PolicyButton
                      title={list.title}
                      onClick={() => setId({
                        ...id,
                        qnaId: dt.id,
                        listId: list.id
                      })}
                      active={list.id === id.listId}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className='text-view' dangerouslySetInnerHTML={{
              __html: qnaData.find((cur) => cur.id === id.qnaId).data.find((cur) => cur.id === id.listId).textData
            }} 
          />
          <Button type='terms' title='보험약관' />
        </div>
      </div>
    </QnaWrap>
  )
}

export default Qna;

const QnaWrap = styled.div`
  padding-bottom: 40px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 697px;
    overflow-y: scroll;
    padding: 40px 40px 0;
    > div {
      width: 535px;
      > div {
        > h2 {
          font-size: 24px;
          padding-bottom: 20px;
        }
        :last-child {
          > ul {
            margin-bottom: 0px;
          }
        }
        > ul {
          counter-reset: number 0;
          margin-bottom: 40px;
          
          > li {
            margin-bottom: 10px;
            :last-child {
              margin-bottom: 0;
            }
            /* 질문 버튼 custom */
            > div {
              > div {
                > p {
                  display: flex;
                  ::before {
                    content: counter(number)'.';
                    display: block;
                    counter-increment: number 1;
                    margin-right: 8px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .text-view {
    padding: 20px 28px;
    font-size: 18px;
    background-color: #F4FAFF;
    border-radius: 10px;
    margin: 55px 0 10px;
    font-weight: 300;
  }
`;
