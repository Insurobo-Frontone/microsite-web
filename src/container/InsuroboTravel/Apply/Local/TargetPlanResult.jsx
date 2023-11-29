import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useFormContext } from "react-hook-form";
import Popup from "../Popup";
import useWindowSize from "../../../../hooks/useWindowSize";

const TargetPlanResult = ({ type, data }) => {
  const [close, setClose] = useState(true);
  const { width } = useWindowSize();
  const { watch } = useFormContext(); 
 
  return (
    <>
      <Wrap type={type}>
        {type === 'popup' ? (
          <>
            <div>
              <h2>상해보장</h2>
              {data.map((item) => {
                return (
                  <ul key={item.category}>
                    {item.tripBojangResponseDtos.filter((cur) => cur.category === 1).map((dt) => (
                      <li key={dt.order}>
                        <h3>{dt.displayName ? dt.displayName : dt.bname}</h3>
                        <p>{dt.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                      </li>
                    ))}
                  </ul>
                )
              })}
            </div>
            <div>
              <h2>질병보장</h2>
              {data.map((item) => {
                return (
                  <ul key={item.category}>
                    {item.tripBojangResponseDtos.filter((cur) => cur.category === 2).map((dt) => (
                      <li key={dt.order}>
                        <h3>{dt.displayName ? dt.displayName : dt.bname}</h3>
                        <p>{dt.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                      </li>
                    ))}
                  </ul>
                )
              })}
            </div>
            <div>
              {data.map((item) => {
                return (
                  <ul key={item.category}>
                    {item.tripBojangResponseDtos.filter((cur) => cur.category === 3).map((dt) => (
                      <li key={dt.bcode}>
                        <h3>{dt.displayName ? dt.displayName : dt.bname}</h3>
                        <p>{dt.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                      </li>
                    ))}
                  </ul>
                )
              })}
            </div>
            <div>
              {data.map((item) => {
                return (
                  <ul key={item.category}>
                    {item.tripBojangResponseDtos.filter((cur) => cur.category === 4).map((dt) => (
                      <li key={dt.bcode}>
                        <h3>{dt.displayName ? dt.displayName : dt.bname}</h3>
                        <p>{dt.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                      </li>
                    ))}
                  </ul>
                )
              })}
            </div>
          </>
        ) : (
          <>
            <div>
              <h2>상해보장</h2>
              <ul>
                {data.filter((dt) => dt.gubun === watch('calcPlan')).map((item) => {
                  return (
                    item.tripBojangResponseDto.filter((cur) => cur.category === 1).map((td) => {
                      return (
                        <li key={td.order}>
                          <h3>{td.displayName ? td.displayName : td.bname}</h3>
                          <p>{td.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                        </li>
                      )
                    })
                  )
                })}
              </ul>
            </div>
            <div>
              <h2>질병보장</h2>
              <ul>
                {data.filter((dt) => dt.gubun === watch('calcPlan')).map((item) => {
                  return (
                    item.tripBojangResponseDto.filter((cur) => cur.category === 2).map((td) => {
                      return (
                        <li key={td.order}>
                          <h3>{td.displayName ? td.displayName : td.bname}</h3>
                          <p>{td.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                        </li>
                      )
                    })
                  )
                })}
              </ul>
            </div>
            <div>
              <ul>
                {data.filter((dt) => dt.gubun === watch('calcPlan')).map((item) => {
                  return (
                    item.tripBojangResponseDto.filter((cur) => cur.category === 3).map((td) => {
                      return (
                        <li key={td.order}>
                          <h3>{td.displayName ? td.displayName : td.bname}</h3>
                          <p>{td.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                        </li>
                      )
                    })
                  )
                })}
              </ul>
            </div>
            <div>
              <ul>
                {data.filter((dt) => dt.gubun === watch('calcPlan')).map((item) => {
                  return (
                    item.tripBojangResponseDto.filter((cur) => cur.category === 4).map((td) => {
                      return (
                        <li key={td.order}>
                          <h3>{td.displayName ? td.displayName : td.bname}</h3>
                          <p>{td.bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}&nbsp;원</p>
                        </li>
                      )
                    })
                  )
                })}
              </ul>
            </div>
          </>
      )}
         

     </Wrap>
      {!close && (
        <Popup close={() => setClose(true)} type='info'>
          <h2>배상책임</h2>
          <div>
            다른 사람의 물품을 파손/유실되게 하거나, 다른 사람을 다치게 한 경우에 부담하게 된 손해배상금과 변호사비용, 소송비용을 보상합니다.<br />
            <br />
            <span>자주 발생하는 보상사례</span><br />
            <br />
            <ul>
              <li>호텔의 물품을 깨트린 경우</li>
              <li>쇼핑 중 전시된 물품에 피해를 입힌 경우</li>
              <li>
                실수로 다른 사람에게 골절상을 입혀 고액의 의료비를 부담할 경우<br />
                <br />
                {width > 767.98 && '그러나 함께 여행하는 친족에 대한 손해배상, 자동차(오토바이 포함)의 사용, 관리로 인한 손해배상 등에 대해서는 보상하지 않습니다.'}
              </li>
            </ul>
            {width < 767.98 && (
              <>
                그러나 함께 여행하는 친족에 대한 손해배상, 자동차(오토바이 포함)의 사용, 관리로 인한 손해배상 등에 대해서는 보상하지 않습니다.
              </>
            )}
          </div>
        </Popup>
      )}
    </>
  );
}

export default TargetPlanResult;

const Wrap = styled.div`
  > div {
    padding: 50px 0;
    border-bottom: 1px solid #F0F0F0;
    :last-child {
      border-bottom: 0;
    }
    > h2 {
      font-size: 24px;
      color: #333333;
      font-weight: 500;
      padding-bottom: 40px;
    }
    > ul {
      > li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
        > h3 {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          > span {
            color: #176FFF;
            border-bottom: 1px solid #176FFF;
            font-weight: 300;
            margin-left: 10px;
            display: inline-block;
            line-height: 1;
          }
        }
        > p {
          font-size: 20px;
          font-weight: 300;
          color: #333333;
        }
      }
    }
  }

  ${props => props.type === 'popup' && css`
    > div {
      padding: 20px 0;
      border-top: 1px solid #F0F0F0;
      border-bottom: 0;
      :last-child {
        padding-bottom: 0;
      }
      > h2 {
        font-size: 16px;
        line-height: 23px;
        font-weight: 500;
        padding-bottom: 10px;
      }
      > ul {
        > li {
          margin-bottom: 10px;
          > h3 {
            font-size: 16px;
            font-weight: 300;
            line-height: 23px;
            > span {
              font-size: 14px;
            }
          }
          > p {
            font-size: 16px;
            line-height: 23px;
          }
        }
      }
    }
  `}
  
  ${(props) => props.theme.window.mobile} {
    padding: 20px 0;
    > div {
      padding: 20px 0;
      > h2 {
        font-size: 16px;
        font-weight: 700;
        padding-bottom: 19px;
      }
      > ul {
        > li {
          margin-bottom: 10px;
          > h3 {
            font-size: 14px;
            font-weight: 400;
            > span {
              font-weight: 400;
            }
          }
          > p {
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
  }

  ${props => props.type === 'popup' && css`
    > div {
      padding: 10px 0;
      border-top: 1px solid #F0F0F0;
      border-bottom: 0;
      :last-child {
        padding-bottom: 0;
      }
      > h2 {
        font-size: 14px;
        line-height: 18px;
        font-weight: 500;
        padding-bottom: 10px;
      }
      > ul {
        > li {
          margin-bottom: 10px;
          > h3 {
            font-size: 14px;
            font-weight: 300;
            line-height: 18px;
            > span {
              font-size: 12px;
            }
          }
          > p {
            font-size: 14px;
            line-height: 18px;
          }
        }
      }
    }
  `}
`;
