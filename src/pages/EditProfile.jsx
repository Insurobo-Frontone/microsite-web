import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { CommonAPI } from "../api/CommonAPI";
import { setUserName } from "../container/Storage/Auth";
import AuthLayout from "../components/Auth/AuthLayout";
import Input from "../components/Input";
import SelectInput from "../components/Input/SelectInput";
import DaumPostcode from 'react-daum-postcode';
import useWindowSize from "../hooks/useWindowSize";
import CustomButton from "../components/Button/CustomButton";

const Form = styled.form`
  padding: 54px 0 47px;
  > button {
    > p {
      color: #FFFFFF;
      font-size: 20px;
      font-weight: 300;
    }
  }

  ${(props) => props.theme.window.mobile} {
    padding: 20px 0 0;
    > button {
      margin-top: 50px;
    > p {
      font-size: 15px;
    }
  }
  }
`;

const Label = styled.label`
	display: block;
  width: 100%;
  color: #2F2F2F;
  font-size: 20px;
  margin-bottom: 15px;
  ${(props) => props.theme.window.mobile} {
    font-size: 15px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 30px;

  .address {
    display: flex;
    justify-content: space-between;
    > div:first-child {
      width: 469px;
    }
  }
  .button {
    width: 254px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 44px;
    background-color: #989898;
    cursor: pointer;
    > p {
      font-size: 20px;
      color: #FFFFFF;
      font-weight: 300;
    }
  }
  .recommender {
    display: flex;
    select {
      width: 250px;
      margin-right: 27px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
    .address {
      > div:first-child {
        width: 67.5%;
        margin-bottom: 10px;
      }
    }
    .button {
      width: 30%;
      height: 50px;
      margin-top: 39px;
      > p {
        font-size: 15px;
      }
    }
    .recommender {
      select {
        width: 130px;
        margin-right: 5px;
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
  const {handleSubmit ,setValue, reset} = useFormContext();
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [isOpenPost, setIsOpenPost] = useState(false);
  const auth = localStorage.getItem("@access-Token");
  const el = useRef();
  const [data, setData] = useState();
  const [insuList, setInsuList] = useState([]);

  useEffect(() => {
    myData()
  }, [])

  const myData = async () => {
    const res1 = await CommonAPI.get("/api/private/profile", {
      Authorization: `Bearer ${auth}`,
   })
    const res2 = await CommonAPI.get("/api/private/insuList") 
    if(res1.status === 200){
        setData(res1.data.data);
        reset()
    }
    if (res2.status === 200) {
      setInsuList(res2.data.data);
    }
  }

  
  const onSubmit = async (data) => {
    const res = await CommonAPI.put("/api/private/profileUpdate", 
      JSON.stringify(data)
    )
    if(res.status === 200) {
      alert('프로필 수정이 완료되었습니다');
      setUserName(res.data.data)
      navigate('/');
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
  
  return (
    <>
      <AuthLayout title="프로필 수정">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <InputGroup>
            <Input
              label="이름"
              name="userName"
              defaultValue={data?.userName}
            />
          </InputGroup>
          {data?.loginType === 'insurobo' && (
            <InputGroup>
              <PasswordGroup>
                <lable>비밀번호</lable>
                <Link to="/myProfile/password">비밀번호 변경하기</Link>
              </PasswordGroup>
            </InputGroup>
          )}
          <InputGroup>
            <Input
              label="연락처"
              readOnly
              type="phone"
              name="phoneRole"
              pattern={{
                value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                message: "규칙에 맞는 휴대폰 번호를 입력해 주세요.",
              }}
              defaultValue={data?.phoneRole}
            />
          </InputGroup>
          <InputGroup>
            <div className="address">
              <Input 
                label="주소" 
                name="address" 
                readOnly
                defaultValue={data?.address}
              />
              <div className="button" onClick={onChangeOpenPost}>
                <p>주소찾기</p>
              </div>
            </div>
            <Input 
              name="address_detail" 
              defaultValue={data?.address_detail}
            />
          </InputGroup>
          <InputGroup>
            <Label>추천인</Label>
            <div className="recommender">
              <SelectInput
                name='companyName'
                options={insuList}
                defaultValue={data?.companyName}
              />
              <Input
                name='insuId'
                placeholder='추천인 코드입력'
                defaultValue={data?.insuId}
              />
            </div>
          </InputGroup>
          <CustomButton bgColor="GRAY" width="100%" type="submit">
            <p>수정하기</p>
          </CustomButton>
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
