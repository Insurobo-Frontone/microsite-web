import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import { getTourList } from "../../../../api/TravelAPI";
import dbLogo from '../../../../assets/img/insuroboTravel/dbLogo.png';
import collabo from '../../../../assets/img/insuroboTravel/collaboIcon.png';
import insuLogo from '../../../../assets/img/insuroboTravel/insuroboLogo.png';
import dbSeal from '../../../../assets/img/insuroboTravel/dbSeal.png';
import download from '../../../../assets/img/insuroboTravel/downloadIcon.png';
// import mailIcon from '../../../../assets/img/insuroboTravel/mailIcon.png';

const MyViewer = () => {
  const [myData, setMydata] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    getTourList().then((res) => {
      setMydata(res.data.data)
    })
  }, []);

  return (
      <Wrap>
        <ImgWrap>
          <img src={dbLogo} alt="DB손해보험" />
          <img src={collabo} alt="x" />
          <img src={insuLogo} alt="인슈로보" />
        </ImgWrap>
        <TitleWrap>
          <h2>{id ? '국내여행자보험 가입증명서' : '보험금청구서류'}</h2>
        </TitleWrap>
        {id ? (
          myData.filter((dt) => dt.id == id).map((fd) => {
            return (
              <>          
            <InfoBox>
              <InfoBoxTitle>
                <h2>기본정보</h2>
                <p>증권번호 : 120231994821</p>
              </InfoBoxTitle>
              <Table cellSpacing="0">
                <tr>
                  <th>결제자</th>
                  <td>{fd.userName}</td>
                  <th>단체계약자</th>
                  <td>인슈로보</td>
                </tr>
                <tr>
                  <th>보험기간</th>
                  <td>{fd.startDate.substring(0, 10).replace(/-/g, '.')} - {fd.endDate.substring(0, 10).replace(/-/g, '.')}</td>
                  <th>여행지</th>
                  <td>국내</td>
                </tr>
                <tr>
                  <th>납입보험료</th>
                  <td>{fd.fee.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                  <th>보험료 납입일시</th>
                  <td>2023-11-08 14:30</td>
                </tr>
              </Table>
              <InfoBoxText>*이 상품은 인슈로보를 계약자로 지정한 단체보험으로,  피보보험자의 보험청구는 DB손해보험에서 정삭적으로 처리됩니다.</InfoBoxText>
            </InfoBox>
            <InfoBox>
              <InfoBoxTitle>
                <h2>보험가입자(피보험자) 정보</h2>
              </InfoBoxTitle>
              <Table cellSpacing="0">
                <tr>
                  <th>결제자</th>
                  <td>{fd.userName}</td>
                  <th>보험종류</th>
                  <td>국내여행자보험</td>
                </tr>
                <tr>
                  <th>출생년도</th>
                  <td>{fd.juminBack.substring(0, 1) === '1' || '2' || '5' || '6' ? '19' : '20'}{fd.juminFront.substring(0, 2)}년</td>
                  <th>휴대폰번호</th>
                  <td>{fd.phoneNum.substring(0, 7)}****</td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td>{fd.email}</td>
                  <th>보험금수령인</th>
                  <td>
                    <span>사망 시:법정상속인</span>
                    <span>사망 외: 본인(단, 미성년자 경우 법정대리인)</span>
                  </td>
                </tr>
              </Table>
            </InfoBox>
            <InfoBox>
              <InfoBoxTitle>
                <h2>보장내용</h2>
              </InfoBoxTitle>
              <Table cellSpacing="0" id='table'>
                <tr>
                  <th colspan="3"></th>
                  <th>1~14세</th>
                  <th>15~69세</th>
                  <th >70~79세</th>
                </tr>
                <tr>
                  <th rowspan="6">상해보장</th>
                  <th colspan="2">사망</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th colspan="2">후유장해</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th rowspan="2">입원</th>
                  <th>급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th>비급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th rowspan="2">통원</th>
                  <th>급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th>비급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th rowspan="6">상해보장</th>
                  <th colspan="2">사망</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th colspan="2">후유장해</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th rowspan="2">입원</th>
                  <th>급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th>비급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th rowspan="2">통원</th>
                  <th>급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th>비급여</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th colspan="3">도수치료비/체외충격파/증식</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th colspan="3">MRI/MRA 진단</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th colspan="3">주사료</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
                <tr>
                  <th colspan="3">배상책임 (본인부담금 1만원)</th>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                  <td>3,500,000 원</td>
                </tr>
              </Table>
            </InfoBox>
            <ConfirmWrap>
              <p>DB손해보험은 {fd.userName}님이 <b>국내여행자보험</b>에 가입하였음을 <b>확인</b>합니다.</p>
              <ConfirmSign>
                <img src={dbSeal} alt="DB손해보험주식회사" />
              </ConfirmSign>
            </ConfirmWrap>
            <CautionList>
              <li>*보장성보험이므로 만기시 환급금이 없습니다.</li>
              <li>*이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호한도는 본 보험회사에 있는 귀하의 모든 예금보호대상 금융상품의 해지환급금(또는 만기시 보험금이나 사고보험금)에 기타지급금을 합하여 1인당 “최고 5천만원”이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다.</li>
              <li>*자세한 사항은 약관을 읽어보시기 바랍니다.</li>
            </CautionList>
            <CsBox>
              <p>문의사항이 있으신 경우 info@insurobo.com으로 이메일을 주시거나 070-4126-3333로 전화주세요.</p>
              <div>
                <button>
                  <img src={download} alt="다운로드" />
                  <span>약관 다운로드</span>
                </button>
                {/* <button>
                  <img src={mailIcon} alt="이메일받기" />
                  <span>보상청구서류 이메일받기</span>
                </button> */}
              </div>
            </CsBox>
            <InfoBox>
              <InfoBoxTitle>
                <h2>보장내용</h2>
              </InfoBoxTitle>
              <ul>
                <li>
                  <span>상해 사망/후유장해</span>
                  <p>여행중 상해로 인해 사망하거나, 장해상태가 되었을 때 보상. 사망시 보험가입금액 전액 지금, 장해상태시 장해지급율에 따라지급</p>
                </li>
                <li>
                  <span>질병 사망/고도후유장해</span>
                  <p>여행중 발생한 질병으로 인한 사망 시 보상. 사망 혹은 80%이상 후유장해시 보험가입금액 전액 지급</p>
                </li>
                <li>
                  <span>상해/질병 국내 입원의료비</span>
                  <p>여행중 입은 상해/질병으로 국내에서 입원치료를 받은 경우에 국내실손의료보험 기준에 따라 보상</p>
                </li>
                <li>
                  <span>상해/질병 국내 통원의료비</span>
                  <p>여행중 입은 상해/질병으로 국내에서 통원하여 치료를 받거나 처방조제를 받은 경우에 국내실손의료보험 기준에 따라 보상</p>
                </li>
                <li>
                  <span>도수치료 등, MRI/MRA 진단,주사료</span>
                  <p>여행중 입은 상해/질병으로 국내병원에서 의료보험이 적용되지 않는 도수치료, 체외충격파치료, 증식치료, 주사치료, 자기공명영상진단을 받은 경우에 보상</p>
                </li>
                <li>
                  <span>배상책임</span>
                  <p>여행중 우연한 사고로 타인의 신체, 재물에 입힌 손해에 대한 배상책임을 보상(자기부담금 1만원)</p>
                </li>
              </ul>
              <InfoBoxText>*위의 모든 보장내용은 보험가입금액 한도로 보상합니다.</InfoBoxText>
            </InfoBox>
          </>
            )
          }) 
          
        ): ''}
      </Wrap>
    
   
  )
}
export default MyViewer;

const Wrap = styled.div`
  width: 100%;
  width: 1280px;
  padding: 125px 100px 100px;
  margin: 0 auto;

  background-color: #FFFFFF;
`;

const ImgWrap = styled.div`
  width: 288px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrap = styled.div`
  height: 52px;
  background-color: #2EA5FF;
  padding: 13px 0 12px;
  margin: 19.53px 0 55px;
  > h2 {
    text-indent: 23px;
    font-size: 18px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 27px;
  }
`;

const InfoBox = styled.div`
  margin-bottom: 50px;
  :last-child {
    margin-bottom: 0;
  }

  > ul {
    border-top: 1px solid #333333;
    border-bottom: 1px solid #333333;
    padding: 30px 0;
    counter-reset: number 0;
    > li {
      display: flex;
      justify-content: space-between;
      line-height: 21px;
      padding-left: 24px;
      margin-bottom: 11px;
      :last-child {
        margin-bottom: 0;
      }
      > span {
        font-size: 14px;
        display: flex;
        width: 187px;
        ::before {
          content: counter(number)'.';
          display: block;
          counter-increment: number 1;
          margin-right: 5px;
        }
      }
      > p {
        width: 825px; 
      }
    }
  }
`;

const InfoBoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
  > h2 {
    font-size: 18px;
    color: #393939;
    font-weight: 500;
    display: flex;
    align-items: center;
    ::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2EA5FF;
      margin-right: 8px;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #333333;
  tr, td, th {
    border-bottom: 1px solid #DDDDDD;
    padding: 17px 0 18px;
    text-indent: 24px;
    text-align: start;
    font-weight: 400;
  }
  tr th {
    background-color: #F5F5F5;
    width: 214px;
  }
  tr td {
    width: 326px;
  }
  tr td > span {
    display: block;
    line-height: 24.5px;
  }
  &#table tr:nth-child(2) th:first-child,
  &#table tr:nth-child(8) th:first-child {
    width: 135px;
    vertical-align: top;
  }
  &#table tr:nth-child(2) th:first-child,
  &#table tr:nth-child(8) th:first-child,
  &#table tr:nth-child(14) th:first-child,
  &#table tr:nth-child(15) th:first-child,
  &#table tr:nth-child(16) th:first-child,
  &#table tr:nth-child(17) th:first-child {
    font-weight: 500;
  }
  &#table tr:first-child th {
    background-color: #F5F5F5;
    text-align: end;
    padding-right: 24px;
  }
  &#table th, td {
    background-color: #FFFFFF;
    border-right: 1px solid #DDDDDD;
  }
  &#table th:last-child, td:last-child {
    border-right: 0;
  }
  &#table td{
    text-align: end;
    padding-right: 24px;
  }
`;

const InfoBoxText = styled.p`
  font-size: 14px;
  line-height: 21px;
  padding-top: 31px;
`;

const ConfirmWrap = styled.div`
  padding-top: 10px;
  > p {
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    > b {
      color: #007F41;
      font-weight: 500;
    }
  }
`;

const ConfirmSign = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 75px 0 72px;
`;

const CautionList = styled.ul`
  background-color: #F5F5F5;
  padding: 24px 24px 20px;
  > li {
    font-size: 14px;
    line-height: 21px;
    padding-bottom: 10px;
    :last-child {
      padding-bottom: 0;
    }
  }
`;

const CsBox = styled.div`
  border: 1px solid #DDDDDD;
  font-size: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 50px;
  > div {
    font-weight: 400;
    display: flex;
    align-self: flex-end;
    padding-top: 35px;
    > button {
      display: flex;
      align-items: center;
      background-color: #FFFFFF;
      padding: 9px 12px;
      border: 1px solid #BCBDBE;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

