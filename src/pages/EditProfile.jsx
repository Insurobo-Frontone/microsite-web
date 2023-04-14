<<<<<<< HEAD
import React from 'react'
import AuthLayout from '../components/Auth/AuthLayout';
import styled from 'styled-components';
import Input from '../components/Input';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
=======
import React, { useState } from "react";
import AuthLayout from "../components/Auth/AuthLayout";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Input from "../components/Input";
import { Text } from "../components/Font";
import CustomButton from "../components/Button/CustomButton";
import { useEffect } from "react";
import axios from "axios";
import DaumPost from "../components/Modal/DaumPost";
import { Link } from "react-router-dom";
import DaumPostcode from 'react-daum-postcode';

>>>>>>> 2b2d51f308fa091cb0ea1001c8457bf02da64111

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
        margin-bottom: 10px;
      }
    }
  }
`;

const PasswordGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
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

function EditProfile() {
  const {register,setValue,formState: { errors },} = useFormContext();
  const auth = localStorage.getItem("@access-Token");
<<<<<<< HEAD
  const [user, setUser] = useState();
=======
  const name = localStorage.getItem('@user');
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [phoneNum, setPhoneNum] = useState(); //폰번호
  const [address, setAddress] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소
  
>>>>>>> 2b2d51f308fa091cb0ea1001c8457bf02da64111

  useEffect(() => {
    axios({
      url: "http://localhost:8080/api/private/profile",
      method: "get",
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }).then(function (response) {
<<<<<<< HEAD
      console.log(response)
      setUser(response.data.data)
    })
  }, [])
=======
      console.log(response.data)
      setPhoneNum(response.data.data.phoneRole);
    });
  }, []);

  const onChangeOpenPost = () => {
    setIsOpenPost(true);
    
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
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

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "fixed",
    top: "20%",
    right: "40%",
    width: "600px",
    height: "600px",
    padding: "0px",
    margin: "0px",
    border: "0px",
  };
  
  setValue("userName", name);
  setValue("phoneRole",phoneNum);
  setValue("address",address);
  setValue("addressDetail",addressDetail);

>>>>>>> 2b2d51f308fa091cb0ea1001c8457bf02da64111
  return (
    <AuthLayout title="프로필 수정">
      <Form>
        <InputGroup>
          <Input
<<<<<<< HEAD
            label='이름'
            name='userName'
            // placeholder={user.userName}
            require='*필수 입력 사항입니다.'
=======
            label="이름"
            name="userName"
            placeholder="이름을 입력해주세요"
            require="*필수 입력 사항입니다."
>>>>>>> 2b2d51f308fa091cb0ea1001c8457bf02da64111
          />
        </InputGroup>
        <InputGroup>
          <PasswordGroup>
            <lable>비밀번호</lable>
            <Link to="/myProfile/password">비밀번호 변경하기</Link>
          </PasswordGroup>
        </InputGroup>
        <InputGroup>
<<<<<<< HEAD
					<Input
            label='연락처'
            type='phone'
            name='phoneRole' 
            // placeholder={user.phoneRole}
            require='*필수 입력 사항입니다.'
=======
          <Input
            label="연락처"
            type="phone"
            name="phoneRole"
            placeholder="‘-’없이 번호만 입력해주세요"
            require="*필수 입력 사항입니다."
>>>>>>> 2b2d51f308fa091cb0ea1001c8457bf02da64111
            pattern={{
              value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
              message: "규칙에 맞는 휴대폰 번호를 입력해 주세요.",
            }}
          />
        </InputGroup>
        <InputGroup>
            <div className="address">
              <Input label="주소" name="address" readOnly />
              <div className="button" onClick={onChangeOpenPost}>
                <Text color="WHITE" bold="200">
                  주소찾기
                </Text>
                {isOpenPost  ? (
                  <span><DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost } /></span>//span으로 감싸줘야 됨
                ) : null}
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
  );
}

export default EditProfile;
