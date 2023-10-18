import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import ApplyHeader from "../ApplyHeader";
import TravelPageContext from "../../../../context/travelPageContext";
import InsuInfo from "./Step1/InsuInfo";
import InsuCalc from "../InsuCalc";
import RadioInput from "../../Input/RadioInput";
import InsuJoin from "../InsuJoin";

const Local= () => {
  const [open, setOpen] = useState(false);
  const { watch, setFocus } = useFormContext()
  const { state, actions } = useContext(TravelPageContext);
  const navigate = useNavigate();

  const pepelSelect = [
    {
      id: 1,
      value: '1',
      title: '1인 가입'
    },
    {
      id: 2,
      value: '2',
      title: '2인 이상 가입'
    },
  ];

  useEffect(() => {
    navigate(`/insuroboTravel/apply?type=local&step=${state.page}`);
  }, []);

  const onClickCalc = (step) => {
    switch (step) {
      case 'step1-1' :
        if (
          watch('localStart') &&
          watch('localEnd') &&
          watch('birthRep') &&
          watch('genderRep')
        ) {
          setOpen(true);
        } else {
          alert('입력값을 확인하세요.');
        }
        break;
        case 'step1-2' :
        actions.setPage(2);
        navigate(`/insuroboTravel/apply?type=local&step=2&join=1`);
        setOpen(false)
        break;
      default: break;
    }
  }
  return (
    <>
      <Wrap info={state.page === 1 && !open}>
        <ApplyHeader type='local' />
        <ReqContent>
          {state.page === 1 ? (
            <InsuInfo onClickCalc={() => onClickCalc('step1-1')} />
          ) : state.page === 2 ? (
            <InsuJoin type='local' />
          ) : '마이페이지'} 
        </ReqContent>
      </Wrap>
      {open && (
        <>
          <Wrap>
            <ResContent>
              {state.page === 1 ? (
                <InsuCalc type='local' />
              ) : 'page2'}
            </ResContent>
          </Wrap>
          <NextStepButton>
            {state.page === 1 ? (
              <RadioInput
                name='personType'
                data={pepelSelect}
                defaultValue='2'
                onClick={() => onClickCalc('step1-2')}
              /> 
            ) : 'page2'}
          </NextStepButton>
        </>
        

      )}
    </>
  );
}

export default Local;

const Wrap = styled.div`
  position: relative;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  ${props => props.info && css`
    margin-bottom: 50px;
  `}
`;

const ReqContent = styled.div`
  padding: 40px 80px 50px;
`;

const ResContent = styled.div`
  padding: 0 80px;
`;

const NextStepButton = styled.div`
  margin-bottom: 20px;
`;
