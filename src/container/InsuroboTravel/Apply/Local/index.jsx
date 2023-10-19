import React, { useState, useEffect, useContext } from "react";
import styled, { css } from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import ApplyHeader from "../ApplyHeader";
import InsuInfo from "./Step1/InsuInfo";
import InsuCalc from "../InsuCalc";
import RadioInput from "../../Input/RadioInput";
import InsuJoin from "../InsuJoin";
import TravelPageContext from "../../../../context/travelPageContext";


const Local= () => {
  // const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const { watch, setFocus } = useFormContext();
  const step = searchParams.get("step");
  const { state, actions } = useContext(TravelPageContext)
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
          actions.setOpen(true);
          window.scrollTo({top: 700, left: 0, behavior: 'smooth'})

        } else {
          alert('입력값을 확인하세요.');
        }
        break;
        case 'step1-2' :
        navigate(`/insuroboTravel/apply?type=local&step=2&join=1`);

        break;
      default: break;
    }
  }
  return (
    <>
      <Wrap info={step === '1' && ! state.open}>
        <ApplyHeader type='local' />
        <ReqContent>
          {step === '1' ? (
            <InsuInfo onClickCalc={() => onClickCalc('step1-1')} />
          ) : step === '2' ? (
            <InsuJoin type='local' />
          ) : '마이페이지'} 
        </ReqContent>
      </Wrap>
      {state.open && (
        <>
          <Wrap>
            <ResContent>
              {step === '1' ? (
                <InsuCalc type='local' />
              ) : 'page2'}
            </ResContent>
          </Wrap>
          <NextStepButton>
            {step === '1' ? (
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
