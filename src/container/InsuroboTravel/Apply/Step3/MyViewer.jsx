import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useSearchParams } from "react-router-dom";
import ReactToPrint from 'react-to-print';
import { getPaymentDate, getTourList } from "../../../../api/TravelAPI";
import dbLogo from '../../../../assets/img/insuroboTravel/dbLogo.png';
import collabo from '../../../../assets/img/insuroboTravel/collaboIcon.png';
import insuLogo from '../../../../assets/img/insuroboTravel/insuroboLogo.png';
import dbSeal from '../../../../assets/img/insuroboTravel/dbSeal.png';
import download from '../../../../assets/img/insuroboTravel/downloadIcon.png';
import billPdf from '../../../../assets/pdf/DB손해보험 장기보험금청구서(상세).pdf';
import agreePdf from '../../../../assets/pdf/동의서_화재특종_20210601.pdf';
import useWindowSize from "../../../../hooks/useWindowSize";
// import mailIcon from '../../../../assets/img/insuroboTravel/mailIcon.png';

const MyViewer = () => {
  const [myData, setMydata] = useState([]);
  const { width } = useWindowSize();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const printRef = useRef(null);
  const data = {
    merchant_uid: id
  }
  useEffect(() => {
    getTourList().then((res) => {
      setMydata(res.data.data)
    })
    getPaymentDate(
      data
      
    ).then((res) => console.log(res))
  }, []);
  return (
      <Wrap ref={printRef}>
        <div>
          <ImgWrap>
            <img src={dbLogo} alt="DB손해보험" />
            <img src={collabo} alt="x" />
            <img src={insuLogo} alt="인슈로보" />
          </ImgWrap>
          {id && width > 767.98 && (<ReactToPrint
            trigger={() => <button className="print-btn">인쇄</button>}
            content={() => printRef.current}
          />)}
        </div>
        <TitleWrap>
          <h2>{id ? '국내여행자보험 가입증명서' : '보험금청구서류'}</h2>
        </TitleWrap>
        {id ? (
          myData.filter((dt) => dt.id === Number(id)).map((fd) => {
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
                      <td></td>
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
                        <span>사망 시: 법정상속인</span>
                        <span>사망 외: 본인(단, 미성년자 경우 법정대리인)</span>
                      </td>
                    </tr>
                  </Table>
                </InfoBox>
                <InfoBox>
                  <InfoBoxTitle>
                    <h2>보장내용</h2>
                  </InfoBoxTitle>
                  <Table cellSpacing="0" name='table_01'>
                    <tr>
                      <th colSpan="3"></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td rowSpan="6">상해보장</td>
                      <td colSpan="2">사망</td>
                      <td>{fd.tripBojangResponseDtos[0].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td colSpan="2">후유장해</td>
                      <td>{fd.tripBojangResponseDtos[0].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td rowSpan="2">입원</td>
                      <td>급여</td>
                      <td>{fd.tripBojangResponseDtos[1].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td>비급여</td>
                      <td>{fd.tripBojangResponseDtos[2].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td rowSpan="2">통원</td>
                      <td>급여</td>
                      <td>{fd.tripBojangResponseDtos[1].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td>비급여</td>
                      <td>{fd.tripBojangResponseDtos[2].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td rowSpan="6">질병보장</td>
                      <td colSpan="2">사망</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td colSpan="2">후유장해</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td rowSpan="2">입원</td>
                      <td>급여</td>
                      <td>{fd.tripBojangResponseDtos[3].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td>비급여</td>
                      <td>{fd.tripBojangResponseDtos[4].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td rowSpan="2">통원</td>
                      <td>급여</td>
                      <td>{fd.tripBojangResponseDtos[3].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td>비급여</td>
                      <td>{fd.tripBojangResponseDtos[4].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td colSpan="3">도수치료비/체외충격파/증식</td>
                      <td>{fd.tripBojangResponseDtos[5].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td colSpan="3">MRI/MRA 진단</td>
                      <td>{fd.tripBojangResponseDtos[7].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td colSpan="3">주사료</td>
                      <td>{fd.tripBojangResponseDtos[6].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
                    </tr>
                    <tr>
                      <td colSpan="3">배상책임 (본인부담금 1만원)</td>
                      <td>{fd.tripBojangResponseDtos[8].bmoney.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} 원</td>
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
                    <ReactToPrint
                      trigger={() => 
                        <button>
                          <img src={download} alt="다운로드" />
                          <span>약관 다운로드</span>
                        </button>
                      }
                      content={() => printRef.current}
                    />
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
          
        ): (
          // 보험청구서류
          <>
            <Table cellSpacing="0" name='table_02'>
              <tr>
                <th colSpan="2">구분</th>
                <th>필요서류</th>
                <th>발급처</th>
                <th>양식 다운로드</th>
              </tr>
              <tr>
                <th rowSpan="2" colSpan="2">여행자보험</th>
                <td>
                  <ul>
                    <li>보험금청구서</li>
                    <li>
                      개인정보동의서 : 피보험자 목격자 등 관련자 필수
                      <span>
                        <br />
                        - 미성년자의 경우 : 부모님 개인정보동의서
                      </span>
                    </li>
                  </ul>
                </td>
                <th>
                  보험회사
                </th>
                <td>
                  <button onClick={() => window.open(billPdf, '_blank')}>
                    <img src={download} alt="다운로드" />
                    <span>보험금청구서</span>
                  </button>
                  <button onClick={() => window.open(agreePdf, '_blank')}>
                    <img src={download} alt="다운로드" />
                    <span>동의서</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <ul>
                    <li>
                      통장사본
                      <span>
                        <br />
                        - 미성년자의 경우 : 부모님 통장사본, 주민등록등본 또는 가족
                      </span>
                    </li>
                    <li>신분증 사본</li>
                  </ul>
                </td>
                <th>
                  -
                </th>
              </tr>
              <tr>
                <th>입원</th>
                <th>실손의료비</th>
                <td>
                  <ul>
                    <li>
                      진단서
                      <span>
                        <br />
                        (단, 청구금액 50만원 이하 시 진단명이 포함된 입퇴원 확인서 또는 진단명 및 입원기간이 포함된 진료확인서로 대체 가능)
                      </span>
                    </li>
                    <li>
                      <span>진료비계산서(영수증)</span>
                    </li>
                    <li><span>진료비세부(상세)내역서</span></li>
                  </ul>
                </td>
                <th>병원</th>
              </tr>
              <tr>
                <th rowSpan="2">통원</th>
                <th>외래의료비</th>
                <td>
                  <ul>
                    <li>
                      진단명/통원일자,기간이 포함된 서류
                      <span>
                        <br />
                        (예: 진단서, 통원확인서, 처방전, 진료확인서, 소견서, 진료차트 등) 단, 3만원 이하 시(산부인과, 항문외과, 비뇨기과, 피부과 등 제외) 제출 생략 가능
                      </span>
                    </li>
                    <li><span>진료비계산서(영수증)</span></li>
                  </ul>
                </td>
                <th>병원</th>
              </tr>
              <tr>
                <th>약제의료비</th>
                <td>
                  <ul>
                    <li>처방전</li>
                    <li>약제비계산서(영수증)</li>
                  </ul>
                </td>
                <th>약국</th>
              </tr>
            </Table>
          </>
        )}
      </Wrap>

    
   
  )
}
export default MyViewer;

const Wrap = styled.div`
  width: 1080px;
  padding: 121px 0 100px;
  margin: 0 auto;
  background-color: #FFFFFF;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    .print-btn {
      border: 1px solid #2EA5FF;
      width: 98px;
      height: 44px;
      border-radius: 5px;
      color: #2EA5FF;
    }
  }
  @page {
    size: auto; // 프린트 사이즈
    margin: 0 10mm; // 프린트 여백
  }
  @media print {
    .print-btn {
      display: none;
    }
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    overflow: scroll;
    > div:first-child {
      width: 1080px;
    }
  }
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
  ${(props) => props.theme.window.mobile} {
    width: 1080px;
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
  
  ${props => props.name === 'table_01' && css`
    table-layout: fixed;
    tr:first-child th:first-child {
      border-right: 1px solid #DDDDDD;
      width: 435px;
      height: 60px;
    }
    tr:first-child th:last-child {
      width: auto;
      text-align: end;
      padding-right: 24px;
    }
    tr td {
      border-right: 1px solid #DDDDDD;
    }
    tr td:last-child {
      border-right: 0;
      text-align: end;
      padding-right: 24px;
    }

    tr:nth-child(2) td:first-child,
    tr:nth-child(8) td:first-child,
    tr:nth-child(14) td:first-child,
    tr:nth-child(15) td:first-child,
    tr:nth-child(16) td:first-child,
    tr:nth-child(17) td:first-child {
      font-weight: 600;
    }
  `}

  ${props => props.name === 'table_02' && css`
    border-top: 2px solid #333333;
    table-layout: fixed;
    tr:first-child th {
      background-color: #FFFFFF;
      border-color: #333333;
      border-right: 0;
    }
    tr:nth-child(2) td:last-child {
      border-right: 0;
    }
    tr th:first-child {
      width: 214px;
    }
    tr th:nth-child(2) {
      width: 465px;
    }
    tr th:nth-child(3) {
      width: 177px;
    }

    tr th:last-child {
      width: 223px;
    }
    tr th {
      text-align: center;
      vertical-align: middle;
    }
    th, td {
      border-right: 1px solid #DDDDDD;
      text-indent: 0;
      color: #333333;
      > ul {
        > li {
          font-size: 16px;
          position: relative;
          padding: 0 27px 0 40px;
          margin-bottom: 20px;
          :last-child {
            margin-bottom: 0;
          }
          > span {
            font-size: 14px;
          }
          ::before {
            content: '';
            display: block;
            position: absolute;
            top: 11px;
            left: 29px;
            width: 3.5px;
            height: 3.5px;
            border-radius: 50%;
            background-color: #333333;
          }
        }
      }

      > button {
        display: flex;
        width: 144px;
        
        align-items: center;
        background-color: #FFFFFF;
        padding: 9px 12px;
        margin-left: 40px;
        border: 1px solid #BCBDBE;
        border-radius: 5px;
        cursor: pointer;
        > span {
          color: #333333;
          margin-left: 4px;
        }
        :first-child {
          margin-bottom: 20px;
        }
      }
    }
  `}

  ${(props) => props.theme.window.mobile} {
    width: 1080px;
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

