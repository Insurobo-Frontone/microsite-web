import React, { useState } from "react";
import styled from "styled-components";
import PolicyButton from "../../Input/PolicyButton";
import { list1, list2, list3, list4, list5 } from "../../TravelData/QnaData";
import Button from "../Button";
import useWindowSize from "../../../../hooks/useWindowSize";
import pdf from '../../../../assets/pdf/프로미_국내여행보험Ⅱ_보험약관.pdf';

const Qna = ({ type }) => {
  const [id, setId] = useState({
    qnaId: 1,
    listId: 1
  });
  const { width } = useWindowSize();

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
            <div key={dt.id}>
              <h2>{dt.title}</h2>
              <ul>
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
                    {width < 767.98 && list.id === id.listId && (
                      <div className={list.id === id.listId ? 'active text-view' : 'text-view'}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: qnaData.find((cur) => cur.id === id.qnaId).data.find((cur) => cur.id === id.listId).textData
                          }} 
                        />
                      </div>
                    )}
                  </li>
                  ))}
              </ul>
            </div>
          ))}
          {width < 767.98 && (<Button type='border' title='보험약관' onClick={() => window.open(pdf, '_blank')} />)}
          
        </div>
        <div>
          {width > 767.98 && (
            <div className='text-view'>
              <div dangerouslySetInnerHTML={{
                  __html: qnaData.find((cur) => cur.id === id.qnaId).data.find((cur) => cur.id === id.listId).textData
                }} 
              />
              <Button type='border' title='보험약관' onClick={() => window.open(pdf, '_blank')} />
            </div>
          )}
          
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
    padding: 40px 26px 0 40px;
    
    ::-webkit-scrollbar, ::-webkit-scrollbar-track {
      width: 13px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #D9D9D9;
      border-radius: 30px;
      width: 13px;
      height: 79px;
      background-clip: padding-box;
      border: 4px solid transparent;
    }
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
    position: absolute;
    top: 223px;
    width: 535px;
  }
  .text-view > div {
    padding: 20px 28px;
    font-size: 18px;
    background-color: #F4FAFF;
    border-radius: 10px;
    margin: 55px 0 10px;
    font-weight: 300;
    
  }

  ${(props) => props.theme.window.mobile} {
    padding-bottom: 0;
    > div {
      flex-direction: column;
      height: auto;
      padding: 0;
      > div:last-child {
        border-bottom: 1px solid #F0F0F0;
        padding: 10px 0 24px 0;
      }
      > div {
        width: 100%;
        > div {
          > h2 {
            font-size: 16px;
            padding-bottom: 10px;
            font-weight: 400;
          }
          > ul {
            margin-bottom: 20px;
            > li {
              /* 질문 버튼 custom */
              > div {
                > div {
                  height: auto;
                  > p {
                    width: 84.93150684931507%;
                    ::before {
                      margin-right: 5px;
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
      position: static;
      width: 100%;
    }
    .text-view > div {
      padding: 10px;
      font-size: 14px;
      border-radius: 5px;
      margin: 0;
    }
  }
`;
