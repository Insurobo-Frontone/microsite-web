import React, { useState, useContext } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import FindAddrModal from "./FindAddrModal";
import { StorageGetInsruance } from "../../Storage/Insurance";


const FindAddress = ({value, onChange}) => {

  const [open, setOpen] = useState(false);
  return ( 
     <>
      <Wrap>
        <div>
          <Input 
            first
            readOnly
            placeholder="기본주소"
            // value={insurance.state.address}
          />
          <Button width={'85px'} onClick={() => setOpen(!open)}>주소검색</Button>
        </div>
        <Input
          onChange={onChange}
          placeholder="상세주소를 입력해 주세요."
        />
      </Wrap>
      {open && (
        <FindAddrModal
          onClick={() => setOpen(!open)} 
        />
      )}
    </>
  )
}

export default FindAddress;

const Wrap = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 60px;
  > div {
    display: flex;
    margin-bottom: 20px;
  }
`;

// const Input = styled.input`
//   width: 100%;
//   height: 50px;
//   margin-right: 10px;
//   padding: 0px 10px;
//   border-radius: 5px;
//   border: 1px solid #BEBEBE;
//   color: #1A1A1A;
//   ::placeholder {
//     color: #BEBEBE;
//   }
//   ${props => props.first && css`
//     width: calc(100% - 84px);
//   `}
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 50px;
//   max-width: 85px;
//   width: 360px;
//   font-size: 14px;
//   font-weight: 700;
//   background-color: #2EA5FF;
//   color: #FFFFFF;
//   border-radius: 5px;
// `;

