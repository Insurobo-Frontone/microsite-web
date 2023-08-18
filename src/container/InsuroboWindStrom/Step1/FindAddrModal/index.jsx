import React, { useState} from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from '../../../../assets/icon/addrModalCloseBtn.svg';
import searchIcon from '../../../../assets/icon/searchIcon.svg';
import Prev from "./Prev";
import { getCover, getJuso } from "../../../../api/WindstormAPI";
// import { useFormContext } from "react-hook-form";
import ItemInfo from "./ItemInfo";
import { StorageGetInsruance, StorageSetInsurance } from "../../../Storage/Insurance";

const FindAddrModal = ({onClick}) => {
  // const { register, watch, formState: { errors } } = useFormContext({
  //   mode: 'onBlur'
  // });
  const [addrData, setAddrData] = useState();
  const [findAddrModal, setFindAddrModal] = useState(true); 
  const [errorMessage, setErrorMessage] = useState();
  const [value, setValue] = useState();
  const [apiCheck, setApiCheck] = useState(false);
  
  const onClickSearch = () => {
    setApiCheck(true);
    if (!apiCheck) {
      getJuso(value)
        .then((res) => (
          setAddrData(res.data),
          setErrorMessage('')
        ))
        .catch((e) => (setErrorMessage(e.response.data.message)))
        .finally(() => setApiCheck(false));
    }
    console.log(addrData)
    console.log(errorMessage)
  }

  const onClickJuso = (cur) => {
    // 건축물대장 api
    getCover({
      sigungucd: cur.admCd.slice(0, 5),
      bjdongcd: cur.admCd.slice(-5),
      bun: cur.lnbrMnnm,
      ji: cur.lnbrSlno,
      zip: cur.zipNo,
    }).then((res) => {
      StorageSetInsurance(res.data, '');
      // const InsuroboInsurance = StorageGetInsruance()
      // console.log(InsuroboInsurance);
      setFindAddrModal(false);
    }).catch(() => {
      alert(
        '해당 지역은 건축물 대장에 데이터 존재하지 않습니다, 다시 선택해 주세요',
      );
    })

  }
  return (
    <FindAddrModalWrap visible={findAddrModal}>
      <Content>
        <TitleWrap>
          <p>주소검색</p>
          <StyledCloseBtn onClick={onClick} />
        </TitleWrap>
        <SearchInputWrap>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="주소를 입력하세요"
          />
          <SearchButton onClick={onClickSearch} />
        </SearchInputWrap>
        {addrData || errorMessage ? (
          <ItemsWrap>
            {errorMessage ? 
              (<NonDataInfo>{errorMessage}</NonDataInfo>) : 
              (
                addrData?.results?.juso?.map((cur) => {
                  return (
                    <ItemInfo
                      onClick={() => onClickJuso(cur)}
                      zipCode={cur.zipNo}
                      jibunAddr={cur.jibunAddr}
                      roadAddr={cur.roadAddr}
                    />
                  )
                })
              )
            } 
          </ItemsWrap>) : (<Prev />)
        }
      </Content>
    </FindAddrModalWrap>
  )
}

export default FindAddrModal;

const FindAddrModalWrap = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.visible ? 'flex' : 'none'};
`;

const Content = styled.div`
  min-width: 375px;
  max-width: 395px;
  border-radius: 5px;
  background-color: #FFFFFF;
  overflow: scroll;
`;

const TitleWrap = styled.div`
  padding: 25px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 23px;
    line-height: 42px;
    font-weight: 700;
  }
`;

const StyledCloseBtn = styled(CloseBtn)`
  stroke: #000;
`;

const SearchInputWrap = styled.div`
  padding: 16px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  > input {
    width: 100%;
    height: 40px;
  }
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
`;

const ItemsWrap = styled.div`
  height: 100%;
  max-height: 500px;
  padding: 10px 16px;
  overflow: scroll;
  background-color: #FAFAFA;
  & > *:nth-child(1) {
    margin: 0px;
  }
`;

const NonDataInfo = styled.div`
  min-height: 500px;
  margin: 0 auto;
  color: #000000;
  font-weight: 400;
  font-size: 15px;
  line-height: 27px;
  white-space: pre-wrap;
`;