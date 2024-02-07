import React, { useRef, useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { BsPrinterFill } from 'react-icons/bs';
import styled from 'styled-components';
import axios from 'axios';
import ReactToPrint from 'react-to-print';
import Modal from '.';
import tamplate from '../../assets/img/hyundaiTamplate.png';
import dbImg1 from '../../assets/img/dbCertificate1.png';
import dbImg2 from '../../assets/img/dbCertificate2.png';
import dbImg3 from '../../assets/img/dbCertificate3.png';
import dbListIcon from '../../assets/img/dbListIcon.png';
const Form = styled.form`
  background-color: #FFFFFF;
  padding: 50px 20px;
  width: 500px;
  border-radius: 10px;

  > h2 {
    margin-bottom: 50px;
    font-weight: 500;
    text-align: center;
  }
  > .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background-color: #6F85E3;
    border-radius: 10px;
    height: 50px;
    font-size: 15px;
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    
    > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;

const InputGroup = styled.div`
  padding-bottom: 50px;
  > div {
    position: relative;
    input {
      width: 100%;
      border-bottom: 1px solid #EBEBEB;
      /* border-radius: 5px; */
      height: 50px;
      margin-bottom: 20px;
      padding: 10px 15px; 
      ::placeholder {
        color: #989898;
      }
    }
  } 
  
`;

const HiInsuranceCertificate = styled.div`
  background-color: #FFFFFF;
  width: 570px;
  height: 840px;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 43% 50%;
  box-shadow: 7px 10px 39px 0 rgba(0, 0, 0, 0.3);
  background-image: url(${tamplate});
  padding: 150px 50px;
  /* width : 1.458765022793211
    height : 1.336332958380238 */
  @media print {
    width: 21cm;
    height: 29.7cm;
    background-size: 87%;
    padding: 200px 72.9px;
    box-shadow: none;
  }

  ${(props) => props.theme.window.mobile} {
    width: 320px;
    height: 450px;
    padding: 70px 20px;
    margin: 0 auto;

  }
`;

const InputWrap = styled.div`
  border-top: 1px dashed #c4c4c4;
  display: flex;
  align-items: center;
  padding: 5px 0;
  :first-child {
    margin-top: 5px;
  }
  :nth-child(8) {
    border-bottom: 1px dashed #c4c4c4;
  }
  :nth-child(9) {
    margin-top: 75px;
  }
  > p {
    font-size: 12px;
    line-height: 1;
    color: #2F2F2F;
    font-weight: 700;
    width: 60px;
    
  }
  > span {
    color: #2F2F2F;
    padding-left: 5px;
    font-size: 12px;
    > b {
      width: 80px;
      display: inline-block;
    }
  }
  @media print {
    padding: 6.1px 0;
    :first-child {
      margin-top: 5px;
    }
    :nth-child(8) {
      margin-bottom: 50px;
    }
    :nth-child(9) {
      margin-top: 109px;
    }
    > p {
      font-size: 16px;
      width: 87.5px;
    }
    > span {
      padding-left: 7.29px;
      font-size: 16px;
      > b {
        width: 116.7px;
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    padding: 2px 0;
    :first-child {
      margin-top: 10px;
    }
    :nth-child(7) {
      margin-top: 50px;
    }
    :nth-child(8) {
      border-bottom: 1px dashed #c4c4c4;
    }
    :nth-child(9) {
      border-top: 0;
      margin-top: 0;
    }
    > p {
      font-size: 10px;
      width: 50px;
      margin-left: 5px;
    }
    > span {
      padding-left: 5px;
      font-size: 10px;
      > b {
        width: 50px;
      }
    }
  }
`;

const ErrorText = styled.p`
  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  position: absolute;
  bottom: 0;

  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const CustomIcon = styled(BsPrinterFill)`
  position: absolute;
  top: 65px;
  right: -65px;
  font-size: 30px;
  fill: #FFFFFF;
  cursor: pointer;

  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

const DbInsuranceCertificate = styled.div`
  width: 700px;
  height: 840px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFFF;
  padding: 27px 22px;
  
  @media print {
    width: 21cm;
    height: 29.7cm;
    padding: 62px 40px 37px;
    box-shadow: none;
  }

  ${(props) => props.theme.window.mobile} {

  }
`;

const HeaderBox = styled.div`
  display: flex;

  
  > img {
    width: 11.08695652173913%;

  }
  
  @media print {

  }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #2E9E40;
    border-radius: 10px;
  }
  > h2 {
    font-size: 15px;
    padding-left: 4.673913043478261%;
    padding-bottom: 10px;
    font-weight: 500;
    > span {
      display: block;
      font-size: 11px;
    }
  }
  > img {
    width: 14%;
  }
  @media print {
    ::after {
      height: 4px;
    }
    > h2 {
      font-size: 18px;
      > span {
        font-size: 14px;
      }
    }
  }

`;

const LogoBox = styled.div`
  width: 19%;
  align-self: flex-end;
  
  > img {
    padding-bottom: 10px;
  }
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #89C021;
    border-radius: 10px;
    overflow: hidden;
    transform: translateY(-1px);
  }

  @media print {
    width: 129px;
    > img {
      padding-bottom: 16px;
    }
    ::after {
      height: 4px;
    }
  }
`;

const Info = styled.div`
  padding-top: 15px;

  @media print {
    padding-top: 22px;
    
  }
`;

const TableGroup = styled.div`
  > h2 {
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #393939;
    ::before {
      content: '';
      width: 7px;
      height: 10px;
      display: block;
      margin-right: 5px;
      background-image: url(${dbListIcon});
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
  > table {
    width: 100%;
    border-top: 1px solid #2E9E40;
    margin-bottom: 10px;
    th, td {
      border: 1px solid #CDD2C5;
      padding: 3px 0;
    }
    .top {
      border-top: none;
    }
    .right {
      border-right: none;
    }
    .left {
      border-left: none;
    }
    .size1 {
      width: 45%;
    }
    .size2 {
      width: 100%;
    }
    .size3 {
      width: 5%;
    }
    .size5 {
      width: 6%;
    }
    .size6 {
      width: 20%;
    }
    .center {
      text-align: center;
      padding-left: 0;
    }
    th {
      background-color: #EFF6E2;
      color: #333333;
      font-weight: 400;
      font-size: 10px;
      vertical-align: middle;
      width: 15%;
      border-left: none;
    }
    td {
      color: #333333;
      font-size: 9px;
      vertical-align: middle;
      font-weight: 500;
      padding-left: 15px;
    }
  }
  @media print {
    > h2 {
      font-size: 15px;
      ::before {
        width: 8.17px;
        height: 14px;
      }
    }
    > table {
      th {
        font-size: 13px;
      }
      td {
        font-size: 11px;
      }
    }
  }
`;

const ConfirmArea = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #2E9E40;
  > ul {
    counter-reset: number 0;
    background-color: #DDEBBF;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
    padding: 15px 35px;
    > li {
      font-weight: 700;
      font-size: 11px;
      position: relative;
      color: #393939;
      ::before {
        content: counter(number)'.';
        counter-increment: number 1;
        position: absolute;
        left: -15px;
      }
      > span {
        display: block;
        text-align: center;
        font-weight: 700;
      }
    }
  }
  > img {
    width: 20%;
    align-self: flex-end;
    margin-right: 4%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > table {
    border: 1px solid #CDD2C5;
    border-left: none;
    border-right: none;
    margin-bottom: 7px;
  }
  > table, th, td {
    border-collapse: collapse;
    color: #333333;
    font-weight: 500;
    font-size: 10px;
  }
  th {
    background-color: #EFF6E2;
    padding: 3px 0;
  }
  td {
    padding-left: 15px;
  }
  .size1 {
    width: 15%;
  }
  .size2 {
    width: 30%;
  }
`;

function WindStormModal({ onClick }) {
  const { register, watch, reset, formState: { errors } } = useFormContext();
  const [data, setData] = useState([]);
  const printRef = useRef(null);

  const HiFrame = [
    {
      id: '1',
      name: '증권번호',
      value: data.SEC_NO
    },
    {
      id: '2',
      name: '보험기간',
      value: data.INSDATE + '  부터 1년'
    },
    {
      id: '3',
      name: '보험종목',
      value: data.PROD_NAME
    },
    {
      id: '4',
      name: '가입업체',
      value: data.BUSSINESS_NAME
    },
    {
      id: '5',
      name: '주소',
      value: data.INSLOC
    },
    {
      id: '6',
      name: '보장내용',
      value: '풍수해로 인한 사고를 보장'
    }
  ];

  useEffect(() => {
    reset()
  }, []);

  const openWindstormCheck = async () => {
    let bizNum = '';

    if (watch('WindstormBussiness').length === 10) {
      bizNum = watch('WindstormBussiness').replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
    } else {
      bizNum = watch('WindstormBussiness')
    }
    await axios({
      url: 'https://insrb.com/apis/windstorm/join/check',
      method: 'get',
      headers: {
        'X-insr-servicekey' : 'Q29weXJpZ2h0IOKTkiBpbnN1cm9iby5jby5rciBBbGwgcmlnaHRzIHJlc2VydmVkLg==',
        withCredentials: true,
      },
      params: {
        name: watch('WindstormName'),
        bussiness: bizNum
      }
    })
    .then(function (response) {
      console.log(response)
      if (response.data === '') {
        alert('입력한 값을 확인해 주세요.');
        return false;
      }
      if (response.data.STAT === '만료') {
        alert('풍수해보험 계약이 만료되었습니다.')
      }
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error)
      alert('네트워크에러가 발생했습니다.')
    })
  }


  return (
    <Modal onClick={onClick} print>
      {data.STAT === '유지' ? (
        <>
          <ReactToPrint
            trigger={() => <CustomIcon />}
            content={() => printRef.current}
          />
          {data.PROD_NAME === '현대해상 풍수해VI보험_G' ? (
            <HiInsuranceCertificate ref={printRef}>
              {HiFrame.map((dt) => (
                <InputWrap key={dt.name}>
                  <p>{dt.name}</p><span>:</span>
                  <span>{dt.value}</span>
                </InputWrap>
              ))}
              <InputWrap>
                <p>보장한도액</p><span>:</span>
                <span><b>시설</b><b>3 천만원</b><b>재고자산</b><b>1 천만원</b></span>
              </InputWrap>
              <InputWrap>
                <p></p><span></span>
                <span><b>총보상한도</b><b>미적용</b><b>자기부담금</b><b>20 만원</b></span>
              </InputWrap>
              <InputWrap>
                <p>가입약관</p><span>:</span>
                <span>풍수해보험 VI 보통약관</span>
              </InputWrap>
              <InputWrap>
                <p></p><span></span>
                <span>날짜인식오류 보장제외 추가약관</span>
              </InputWrap>
            </HiInsuranceCertificate>
          ) : (
            <DbInsuranceCertificate ref={printRef}>
              <div>
                <HeaderBox>
                  <LogoBox>
                    <img src={dbImg1} alt='DB손해보험' />
                  </LogoBox>
                  <TitleBox>
                    <h2><span>증명서</span>보험가입확인서 (질권자용)</h2>
                    <img src={dbImg2} alt='DB손해보험' />
                  </TitleBox>
                </HeaderBox>
                <Info>
                  <TableGroup>
                    <h2>기본사항</h2>
                    <table>
                      <tr>
                        <th className='top'>증권번호</th>
                        <td className='top right'>{data.SEC_NO}</td>
                      </tr>
                      <tr>
                        <th>계약자</th>
                        <td className='size1'>{data.RMARK}</td>
                        <th>주민/사업자번호</th>
                        <td className='right'>{data.BUSSINESS_NUMBER}</td>
                      </tr>
                      <tr>
                        <th>피보험자</th>
                        <td>{data.BUSSINESS_NAME}</td>
                        <th>주민/사업자번호</th>
                        <td className='right'>{data.BUSSINESS_NUMBER}</td>
                      </tr>
                    </table>
                  </TableGroup>
                  <TableGroup>
                    <h2>계약사항</h2>
                    <table>
                      <tr>
                        <th className='top'>보험종목</th>
                        <td className='size1 top'>실손보상 소상공인 풍수해보험(VI)</td>
                        <th className='top'>납입보험료</th>
                        <td className='top'>WON</td>
                        <td className='right top'>{data.PREMIUM.split('.')[0].replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
                      </tr>
                      <tr>
                        <th>보험기간</th>
                        <td>{data.INS_FROM.split('.')[0]}년 {data.INS_FROM.split('.')[1]}월 {data.INS_FROM.split('.')[2]}일 24:00부터 {data.INS_TO.split('.')[0]}년 {data.INS_TO.split('.')[1]}월 {data.INS_TO.split('.')[2]}일 24:00까지</td>
                        <th>납입방법</th>
                        <td className='right' colSpan='2'>일시납</td>
                      </tr>
                    </table>
                  </TableGroup>
                  <TableGroup>
                    <h2>소재지 사항</h2>
                    <table>
                      <tr>
                        <th className='top'>소재지 번호</th>
                        <th className='size2 top right'>소재지 정보</th>
                      </tr>
                      <tr>
                        <td className='left center'>1</td>
                        <td className='right'>{data.INSLOC}</td>
                      </tr>
                    </table>
                  </TableGroup>
                  <TableGroup>
                    <h2>질권 사항</h2>
                    <table>
                      <tr>
                        <th className='size3 top'>순번</th>
                        <th className='size4 top'>질권자명</th>
                        <th className='size5 top'>화폐</th>
                        <th className='size4 top'>질권기간</th>
                        <th className='size4 top'>질권금액</th>
                        <th className='size6 right top'>질권대상목적물</th>
                      </tr>
                      <tr>
                        <td colSpan='6' className='left right center'>등록된 질권정보가 없습니다</td>
                      </tr>
                    </table>
                  </TableGroup>
                </Info>
              </div>
              <ConfirmArea>
                <ul>
                  <li>위와 같이 당사에 가입되어 있음을 증명합니다.</li>
                  <li>
                    보험사고 발생 후 보험금 지급 시 보험목적물 소유자의 동의가 있으면 위 질권금액을 한도로 직접 질권자에게 지급보험금을<br />
                    지급할 것임을 확인합니다.
                    <span>{data.INSDATE.split('.')[0]}년&nbsp;&nbsp;&nbsp;&nbsp;{data.INSDATE.split('.')[1]}월&nbsp;&nbsp;&nbsp;&nbsp;{data.INSDATE.split('.')[2]}일</span>
                  </li>
                </ul>
                <img src={dbImg3} alt='DB손해보험주식회사'/>
                <table>
                  <tr>
                    <th className='size1'>담당자</th>
                    <td>인슈로보</td>
                    <th className='size1'>홈페이지</th>
                    <td className='size2'>www.idbins.com</td>
                  </tr>
                </table>
              </ConfirmArea>
            </DbInsuranceCertificate>
          )}
          
        </>
       
      ) : (
      <Form>
        <h2>풍수해보험 가입확인</h2>
        <InputGroup>
          <div>
            <input
              placeholder='대표자 성명'
              {...register('WindstormName', {
                required: '*필수 입력 사항입니다.',
              })}
            />
            {errors.WindstormName?.message && <ErrorText>{errors.WindstormName?.message}</ErrorText>}
          </div>
          <div>
            <input
              placeholder='사업자등록번호'
              {...register('WindstormBussiness', {
                required: '*필수 입력 사항입니다.',

              })}
            />
            {errors.WindstormBussiness?.message && <ErrorText>{errors.WindstormBussiness?.message}</ErrorText>}
          </div>

        </InputGroup>
        <div className='button' onClick={openWindstormCheck}>확인</div>
      </Form>
      )}



    </Modal>
  )
}

export default WindStormModal
