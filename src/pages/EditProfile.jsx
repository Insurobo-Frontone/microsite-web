import React, { useState, useEffect, useRef } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Input from "../components/Input";
import { Text } from "../components/Font";
import CustomButton from "../components/Button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';
import { CommonAPI } from "../api/CommonAPI";
import useWindowSize from "../hooks/useWindowSize";
import Modal from "../components/Modal";

const Form = styled.form`
  padding: 54px 0 147px;
`;

const InputGroup = styled.div`
  margin-bottom: 30px;

  .address {
    display: flex;
    justify-content: space-between;
    .button {
      width: 40%;
      height: 80px;
      margin-left: 27px;
      background-color: #989898;
      border-radius: 10px;
      align-self: flex-end;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
    .address {
      .button {
        margin-left: 5px;
        height: 50px;
        margin-bottom: 20px;
      }
    }
  }
`;

const PasswordGroup = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    display: block;
    width: 100%;
    color: #2f2f2f;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 15px;
  }
  a {
    display: block;
    color: #6f85e3;
    font-weight: 400;
  }
`;

const ButtonWrap = styled.div`
  padding-top: 20px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 30px;
  }
`;

const AddressModalWrap = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;


function EditProfile() {
  const {handleSubmit ,setValue, watch, formState: { errors },} = useFormContext();
  // const auth = localStorage.getItem("@access-Token");
  const navigate = useNavigate();

  const { width } = useWindowSize();

  const [isOpenPost, setIsOpenPost] = useState(false);
  // const [user, setUser] = useState([]);
  const getUser = localStorage.getItem("@user");
  const user = JSON.parse(getUser);
  const el = useRef();
  // const [phoneNum, setPhoneNum] = useState(); //폰번호
  // const [address, setAddress] = useState(''); // 주소
  // const [addressDetail, setAddressDetail] = useState(''); // 상세주소
  

  
 const onSubmit = async (data) => {
  if (!watch() === '') {
    const res = await CommonAPI.put("/api/private/profileUpdate", 
    { 
      "address": data.address+data.addressDetail,
      "userName": data.userName,
    }
  )
 if(res.status === 200){
    console.log(res)
    alert('프로필 수정이 완료되었습니다');
    navigate('/');
  }
  } else {
    alert('수정된 값이 없습니다')
  }
 
 }

 const onError = (error) => {
  console.log(error)
 }
  const onChangeOpenPost = () => {
    setIsOpenPost(true);
    
  };

  const closePostCode = () => {
    setIsOpenPost(false);
  }

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    console.log(fullAddr)
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }
    setValue('address', fullAddr)
    closePostCode();
    
    window.addEventListener("click", modalOutSideClick);
      return () => {
    window.removeEventListener("click", modalOutSideClick);
   }
    
  };

  //모달 바깥 클릭
  const modalOutSideClick = (e) =>{
    if (isOpenPost && (!el.current || !el.current.contains(e.target))) setIsOpenPost(false);
  }


  const mbPostStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '5%',
  }

  const postCodeStyle = { 
    width: '600px',
    height: '600px',
    position: 'absolute',
    top: '15%'
  };
  
  // setValue("userName", user.userName);
  // setValue("phoneRole",phoneNum);
  // setValue("address",address);
  // setValue("addressDetail",addressDetail);



  return (
    <>
      <AuthLayout title="프로필 수정">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <InputGroup>
            <Input
              label="이름"
              name="userName"
              placeholder="이름을 입력해주세요"
              defaultValue={user.userName}
            />
          </InputGroup>
          <InputGroup>
            <PasswordGroup>
              <lable>비밀번호</lable>
              <Link to="/myProfile/password">비밀번호 변경하기</Link>
            </PasswordGroup>
          </InputGroup>
          <InputGroup>
            <Input
              label="연락처"
              readOnly
              type="phone"
              name="phoneRole"
              placeholder="‘-’없이 번호만 입력해주세요"
              pattern={{
                value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                message: "규칙에 맞는 휴대폰 번호를 입력해 주세요.",
              }}
              defaultValue={user.phoneRole}
            />
          </InputGroup>
          <InputGroup>
              <div className="address">
                <Input 
                  label="주소" 
                  name="address" 
                  readOnly
                />
                <div className="button" onClick={onChangeOpenPost}>
                  <Text color="WHITE" bold="200">
                    주소찾기
                  </Text>
                </div>
              </div>
            <Input name="addressDetail" placeholder="상세주소 입력해주세요" />
          </InputGroup>
          <ButtonWrap>
            <CustomButton bgColor="GRAY" width="100%" type="submit">
              <Text color="WHITE" bold="200">
                수정하기
              </Text>
            </CustomButton>
          </ButtonWrap>
        </Form>
      </AuthLayout>
      {isOpenPost  ? (
        <AddressModalWrap onClick={modalOutSideClick}>
          <DaumPostcode 
            style={width > 768 ? postCodeStyle : mbPostStyle} 
            autoClose 
            onComplete={onCompletePost} 
          />
        </AddressModalWrap>
      ) : null}
    </>
  );
}

export default EditProfile;
