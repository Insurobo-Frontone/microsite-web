import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { clearGetTravelMenu, getTravelMenu } from "../../Storage/InsuTravel";
import Popup from "./Popup";
import TravelPageContext from "../../../context/travelPageContext";

const TabMenu = ({ type }) => {
  const location = useLocation();
  const stepNum = location.state.step;
  const navigate = useNavigate();
  const { reset } = useFormContext();
  const [close, setClose] = useState(true);
  const [message, setMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const { actions } = useContext(TravelPageContext);
  
  const menu = [
    {
      id: '1',
      title: '간편계산',
    },
    {
      id: '2',
      title: '보험가입',
    },
    {
      id: '3',
      title: '마이페이지',
    },
    {
      id: '4',
      title: 'Q&A',
    },
  ];

  const onClickReset = () => {
    setClose(true);
    reset();
    actions.setOpen(false);
    clearGetTravelMenu();
    navigate(`/insuroboTravel/apply?step=1`, {
      state: {
        type: type,
        step: '1',
      }
    });
  }

  const handleClose = () => {
    if (stepNum === '1') {
      setClose(true);
    } 
    if (stepNum === '2') {
      // const getTourId = localStorage.getItem("@travelId");
      // if (getTourId) {
      //   console.log(getTourId)
      //   deleteTourList(getTourId).then((res) => {
          
      
      // setClose(true);
      //   }).catch((e) => console.log(e))
        
      
      // }
      reset();    
      actions.setOpen(false);
      navigate(`/insuroboTravel/apply?step=1`, {
        state: {
          type: type,
          step: '1',
        }
      });
    }

    if (stepNum === '3' || stepNum === '4') {
      const pageInfo =  getTravelMenu();
      if (pageInfo.getLocation) {
        setClose(true);
        navigate(`${pageInfo.getLocation.path}${pageInfo.getLocation.search}`, {
          state: {
            type: pageInfo.getLocation.state.type,
            step: pageInfo.getLocation.state.step,
            join: pageInfo.getLocation.state.join
          }
        });
      } else {
        setClose(true);
        reset();
        navigate(`/insuroboTravel/apply?step=1`, {
          state: {
            type: type,
            step: '1',
          }
        });
      }
    }
    
  }
  // apply nav에서 페이지 이동
  const nextStep = (step) => {
    switch (step) {
      // 간편계산 클릭
      case '1' :
        if (stepNum === '2') {
          setMessage('이동 시 입력하신 정보가 초기화 됩니다.\n간편계산으로 이동하시겠습니까?');
          setPopupType('select');
          setClose(false);
          
        } 
        if (stepNum === '3' || stepNum === '4') {
          const pageInfo =  getTravelMenu();
          if (pageInfo.getLocation) {
            setMessage('진행중인 신청내역이 있습니다');
            setPopupType('alert');
            setClose(false);
          } else {
            reset();
            navigate(`/insuroboTravel/apply?step=1`, {
              state: {
                type: type,
                step: '1',
              }
            });
          }
        } 
        break;
      // 보험가입 클릭
      case '2' :
        if (stepNum === '1') {
          setMessage('간편계산을 먼저 진행해주세요.');
          setPopupType('alert');
          setClose(false);
        } 
        if (stepNum === '3' || stepNum === '4') {
          const pageInfo =  getTravelMenu();
          if (pageInfo.getLocation) {
            navigate(`${pageInfo.getLocation.path}${pageInfo.getLocation.search}`, {
              state: {
                type: pageInfo.getLocation.state.type,
                step: pageInfo.getLocation.state.step,
                join: pageInfo.getLocation.state.join
              }
            });
          } else {
            setMessage('간편계산을 먼저 진행해주세요.');
            setPopupType('alert');
            setClose(false);
          }
        }
        break;
      // 마이페이지 클릭
      case '3' :
        navigate(`/insuroboTravel/apply/myPage`, {
          state: {
            type: type,
            step: '3',
          }
        });
        break;
      // qna 클릭
      case '4' :
        navigate(`/insuroboTravel/apply/qna`, {
          state: {
            type: type,
            step: '4'
          }
        });
        break;
      default :
    
    }
  }
  return (
    <>
      <TabMenuWrap>
        {menu.map((dep) => (
          <MenuButton 
            key={dep.id} 
            onClick={() => nextStep(dep.id)}
            active={stepNum === dep.id}
          >
            {dep.title}  
          </MenuButton>
        ))}
      </TabMenuWrap>
      {!close && (
        <>
          {popupType === 'select' ? (
            <Popup type='select' onClickYse={onClickReset} close={() => setClose(true)}>
              <p style={{
                whiteSpace: "pre-wrap"
              }}>{message}</p>
            </Popup>
          ) : (
            <Popup type={popupType} close={handleClose}>
              <p>{message}</p>
            </Popup>
          )}
        </>
       
      )}
    </>
  )
}

export default TabMenu;

const TabMenuWrap = styled.ul`
  display: flex;
  align-items: flex-end;

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    justify-content: center;
  }
`;

const MenuButton = styled.li`
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 54px;
  font-size: 20px;
  border-radius: 5px 5px 0 0;
  border: 1.5px solid #2EA5FF;
  background-color: #FFFFFF;
  color: #2EA5FF;
  ${props => props.active && css`
    background-color: #2EA5FF;
    color: #FFFFFF;
  `}
  :last-child {
    margin-right: 0px;
  }

  ${(props) => props.theme.window.mobile} {
    width: auto;
    height: 43px;
    padding: 10px;
    border: none;
    background-color: #2EA5FF;
    color: #FFFFFF;
    font-size: 16px;
    margin-right: 2px;
    ${props => props.active && css`
      background-color: #FFFFFF;
      color: #393939;
    `}
  }
`;

