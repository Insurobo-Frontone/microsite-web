import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { deleteTourList, postPaymentCom } from "../../../../api/TravelAPI";
import { onClickPayment } from "../onClickPayment";
import useWindowSize from "../../../../hooks/useWindowSize";
import ApplyInfo from "../ApplyInfo";
import Popup from "../Popup";
import Button from "../Button";
import TargetPlanResult from "../Local/TargetPlanResult";
import dbLogo from '../../../../assets/img/insuroboTravel/payMentDBLogo.png';
import nextIcon from "../../../../assets/icon/insuJoinNextIcon.png";

const MyJoinInfo = ({ open, close, onClick, type, data, myPageState }) => {
  const { width } = useWindowSize();

  const [popupOpen, setPopupOpen] = useState({
    state: false,
    type: '',
    message: ''
  });
  const [infoId, setInfoId] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);   
  }, [open]);


  const onClickDetail = (id) => {
    setInfoId(id);
    onClick()
  }
  const tourRemove = () => {
    deleteTourList(infoId)
    .then((res) => {
      console.log(res)
      setPopupOpen((prevState) => ({
        ...prevState,
        state: false,
        type: 'select',
        message: ''
      }))
      if(res.data) {
        setPopupOpen((prevState) => ({
          ...prevState,
          state: true,
          type: 'alert',
          message: '신청내역이 취소되었습니다.'
        }))
      }
    }).catch((e) => console.log(e))
  }

  const tourRemoveListBack = () => {
    setPopupOpen((prevState) => ({
      ...prevState,
      state: false,
      type: '',
      message: ''
    }));
    myPageState();
  }

  const callback = (response) => {
    const { success, imp_uid, merchant_uid, paid_amount, buyer_email, error_msg } = response;
    if (success) {
      postPaymentCom({
        imp_uid: imp_uid,
        merchant_uid: merchant_uid,
        amount: paid_amount,
        email: buyer_email,
        dt_id: merchant_uid
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          setPopupOpen((prevState) => ({
            ...prevState,
            state: true,
            type: 'alert',
            message: res.data
          }));
        }
      }).catch((e) => {
        console.log(e)
      })
    } else {
      alert(`결제에 실패하였습니다. 에러 내용: ${error_msg}`);
      return;
    }
  }

  const openViewPage = (data, id) => {
    if (data) {
      window.open(`/insuroboTravel/apply/myPage/download?id=${id}`);
    } else {
      window.open(`/insuroboTravel/apply/myPage/download/invoice`);
    }
    
  }
  return (
    <>
      {close ? (
        data.map((dt) => {
          return (
            <BoxWrap open={open} close={close} key={dt.id}>
              <div>
                <div>
                  <div>
                    {open && <img src={dbLogo} alt='db손해보험' />}
                    <h2>
                      {width > 767.98 ? (
                        <>
                          {type === 'local' ?  "국내 여행자 보험" : '해외 여행자 보험'}
                        </>
                        ) : (
                        <>
                          {type === 'local' ?  "국내여행자보험" : '해외여행자보험'}
                        </>
                      )}
                      <span>({dt.travelPurpose})</span>
                    </h2>
                  </div>
                  <div>
                    <p>{dt.startDate.substring(0, 10).replace(/-/g, '.')} ~ {dt.endDate.substring(0, 10).replace(/-/g, '.')} ({dt.period}일)</p>
                    <span onClick={open ? () => 
                      setPopupOpen((prevState) => ({
                        ...prevState,
                        state: true,
                        type: 'popup'
                      })) : () => onClickDetail(dt.id)}>{open ? '보장내용 확인' : '자세히보기'}</span>
                  </div>
                </div>
                <PaymentStatus status={dt.beforePayment}>
                  {dt.beforePayment === 'Y' ? '결제전' : '가입완료'}
                </PaymentStatus>
              </div>
              {/* 오픈시 결제금액 */}
            </BoxWrap>
          )
        })
      ) : (
        data.filter((cur) => cur.id === infoId).map((dt) => {
          return (
            <>
              <BoxWrap open={open} close={close} key={dt.id}>
                <div>
                  <div>
                    <div>
                      {open && <img src={dbLogo} alt='db손해보험' />}
                      <h2>
                        {width > 767.98 ? (
                          <>
                            {type === 'local' ?  "국내 여행자 보험" : '해외 여행자 보험'}
                          </>
                        ) : (
                          <>
                            {type === 'local' ?  "국내여행자보험" : '해외여행자보험'}
                          </>
                        )}
                        <span>({dt.travelPurpose})</span>
                      </h2>
                    </div>
                    <div>
                      <p>{dt.startDate.substring(0, 10).replace(/-/g, '.')} ~ {dt.endDate.substring(0, 10).replace(/-/g, '.')} ({dt.period}일)</p>
                      <span 
                        onClick={open ? () => 
                          setPopupOpen((prevState) => ({
                            ...prevState,
                            state: true,
                            type: 'popup'
                          })) : () => onClickDetail(dt.id)}>
                          {open ? '보장내용 확인' : '자세히보기'}
                      </span>
                    </div>
                    {open && width > 767.98 && (
                      <div>
                        <p>{dt.fee.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</p>
                      </div>
                    )}
                  </div>
                  <PaymentStatus status={dt.beforePayment}>
                    {dt.beforePayment === 'Y' ? '결제전' : '가입완료'}
                  </PaymentStatus>
                </div>
                <div>
                  <ApplyInfo data={dt} />
                  <div>
                    <p>결제금액</p>
                    <h2>{dt.fee.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</h2>
                  </div>
                </div>
              </BoxWrap>
              <ButtonWrap>
                {dt.beforePayment === 'Y' ? (
                  <>  
                    <Button
                      type='cancel'
                      title='신청취소'
                      onClick={() => 
                        setPopupOpen((prevState) => ({
                          ...prevState,
                          state: true,
                          type: 'select',
                          message: '신청내역을 취소하시겠습니까?'
                        }))
                      }
                    />
                    <Button
                      title='결제하기'
                      onClick={() => onClickPayment({
                        id: dt.id,
                        amount: dt.fee,
                        buyer_name: dt.userName,
                        buyer_tel: dt.phoneNum,
                        buyer_email: dt.email,
                        m_redirect_url: process.env.REACT_APP_PAYMENT_REDIRECT
                      }, callback)}
                    />
                  </>
                ) : (
                  <> 
                    <Button
                      title={width > 767.98 ? '가입증명서 발행' : '가입증명서 발행'}
                      onClick={() => openViewPage(dt, dt.id)}
                    />
                    <Button
                      title={width > 767.98 ? '보험금청구서류 보기' : '보험금청구 서류'}
                      onClick={() => openViewPage()}
                    />
                  </>
                )}
              </ButtonWrap>
            </>
          )
        })
      )}
      {popupOpen.type === 'popup' && popupOpen.state && (
        <Popup 
          type='info' 
          close={() => 
          setPopupOpen((prevState) => ({
          ...prevState,
          state: false,
          type: 'popup'
        }))}>
          <h2 className="close-header"> {data.filter((cur) => cur.id === infoId).map((dt) => dt.gubun === '1' ? '안심플랜' : '든든플랜')}
            <span 
              onClick={() => 
                setPopupOpen((prevState) => ({
                  ...prevState,
                  state: false,
                  type: 'popup',
                  message: ' '
              }))}
            />
          </h2>
          <TargetPlanResult type='popup' data={data.filter((cur) => cur.id === infoId)} />
        </Popup>
      )}
      {popupOpen.type === 'select' && popupOpen.state && (
        <Popup 
          type='select'
          onClickYse={tourRemove}
          close={() =>  setPopupOpen((prevState) => ({
            ...prevState,
            state: false,
            type: 'select',
            message: ''
          }))} 
        >
          <p>{popupOpen.message}</p>
        </Popup>
      )}
      {popupOpen.type === 'alert' && popupOpen.state && (
        <Popup 
          type='alert'
          close={tourRemoveListBack} 
        >
          <p>{popupOpen.message}</p>
        </Popup>
      )}
    </>
  );
}

export default MyJoinInfo;

const BoxWrap = styled.div`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 40px 40px 50px;
    > div {
      > div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
        > span {
          display: inline-block;
          color: #176FFF;
          line-height: 1;
          font-size: 20px;
          font-weight: 300;
          margin-left: 24px;
          border-bottom: 1px solid #176FFF;
        }
        > img {
          width: 129px;
          margin-right: 20px;
        }
        > p {
          font-size: 20px;
          color: #333333;
          font-weight: 300;
        }
      }
    }
  }
  > div:nth-child(2) {
    padding: 50px 40px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-top: 1px solid #F0F0F0;
    > div:last-child {
      display: flex;
      align-items: center;
      > p {
        color: #333333;
        font-weight: 700;
        margin-right: 20px;
        font-size: 20px;
      }
      > h2 {
        color: #2EA5FF;
        font-size: 28px;
      }
    }
  }
  ${props => props.close && css`
    height: 164px;
    margin-bottom: 20px;
    :last-child {
      margin-bottom: 0;
    }
  `}
  ${props => props.open && css`
    height: auto;

  `}

  ${(props) => props.theme.window.mobile} {
    > div:first-child {
      padding: 16px 20px 16px;
      > div {
        > div {
          margin-bottom: 4px;
          > span {
            font-size: 14px;
            margin-left: 0;
          }
          > h2 {
            font-size: 16px;
          }
          > img {
            display: none;
          }
          > p {
            font-size: 14px;
          }
        }
      }
    }
    ${props => props.close && css`
      height: 113px;
      > div:first-child {
        flex-direction: column;
        > div:first-child {
          order: 1;
        }
        > div {
          position: relative;
          > div:first-child {
            padding-top: 10px;
          }
          > div {
            justify-content: space-between;
            > span {
              width: 24px;
              height: 24px;
              color: transparent;
              overflow: hidden;
              border: none;
              background-image: url(${nextIcon});
              background-repeat: no-repeat;
              background-position: center;
              position: absolute;
              top: 4px;
              right: 0;
            }
          }
        }
      }
    `}
    ${props => props.open && css`
      height: auto;
      border-radius: 0;
      box-shadow: none ;
      > div:first-child {
        padding: 0 0 24px 0;
        > div {
          > div:nth-child(2) {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 54px;
          }
          > div {
            > span {
              padding-top: 10px;
            }
            > h2 {
              font-size: 16px;
            }
            > img {
              display: none;
            }
            > p {
              font-size: 14px;
            }
          }
        }
      }
      > div:nth-child(2) { 
        padding: 24px 0;
        position: relative;
        > div:last-child {
          display: flex;
          align-items: center;
          position: absolute;
          top: -50px;
          > p {
            margin-right: 10px;
            font-size: 14px;
          }
          > h2 {
            font-size: 18px;
          }
        }
      }
    `}
  }
`;

const PaymentStatus = styled.div`
  width: 98px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  ${props => props.status === 'Y' && css`
    border: 1px solid #FF2C2C;
    color: #FF2C2C;
  `}

  ${props => props.status === 'N' && css`
    background-color: #E9F6FF;
    color: #2EA5FF;
  `}

  ${(props) => props.theme.window.mobile} {
    width: 50px;
    height: 24px;
    font-size: 12px;
    border-radius: 5px;
    line-height: 24px;
  }
`;

const ButtonWrap = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  > button {
    width: 49.29718875502008%;
  }
  ${(props) => props.theme.window.mobile} {
    padding: 0;
    > button {
      width: 48.3974358974359%;
    }
  }
`;


