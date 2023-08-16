import React from 'react'
import styled from 'styled-components';
// import dwcnd from '../../assets/pdf/dwcnd_report.pdf';
// import pre from '../../assets/pdf/pre_report.pdf';

function Slider3() {
  const link1 = 'https://drive.google.com/file/d/1ZIiuRSfkuHSQj9V1kSLHcmB_49UJNZK8/view?usp=share_link';
  const link2 = 'https://drive.google.com/file/d/1QWO9rsYT9ihG3zJCp_JwWYd1Q2IZhRsq/view?usp=share_link';
  const applyLink = 'http://www.insrb.com:7070/bizcare/short';

  const onClickLink = (url) => {
    window.open(url);
  }
  return (
    <>
      <Wrapper>
        <MainTitle>
          <SlideTitle>비즈케어 프로그램 <br /><span onClick={() => {onClickLink(applyLink)}}>신청하기</span></SlideTitle>
        </MainTitle>
        <ContentBox>
          <LinkButtonBox>
            <LinkButton onClick={() => {onClickLink(applyLink)}}>비즈케어 프로그램 신청서</LinkButton>
            <p>비즈케어 프로그램 가입을 원하는 경우 위 ‘링크' <br />클릭 후 신청서 작성 후 제출해주세요.</p>
          </LinkButtonBox>
          <PdfViewButtonBox>
            <PdfViewButton bgColor='#4575F5' onClick={() => {onClickLink(link1)}}>비즈케어 프로그램 샘플 보기_예비진단서</PdfViewButton>
            <PdfViewButton bgColor='#6F85E3' onClick={() => {onClickLink(link2)}}>비즈케어 프로그램 샘플 보기_결과보고서</PdfViewButton>
          </PdfViewButtonBox>
        </ContentBox>
      </Wrapper>
    </>
  )
}

export default Slider3

const Wrapper = styled.div`
`;

const MainTitle = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const SlideTitle = styled.p`
  font-size: 2.1vw;
  color: '#404040';
  font-weight: 400;
  line-height: 2.815vw;
  
  > span {
    color: #FFFFFF;
    background: #4053CD;
    font-weight: 700;
    font-size: 2.1vw;
    display: inline-block;
    cursor: pointer;
  }
  > br {
    display: none;
  }
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 1.2;
    span {
      font-size: 16px;
      padding: 0 1px;
      margin-top: 5px;
    }

    > br {
      display: block;
    }

  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.785vw;
  ${(props) => props.theme.window.mobile} {
    height: 50vh;
    padding: 0;
    align-content: space-between;
  }
`;

const LinkButtonBox = styled.div`
  width: 100%;
  margin: 3.49vw 0 14.115vw;

  > p {
    color: #515151;
    font-weight: 700;
    font-size: 1.045vw;
    display: flex;
    align-items: center;
    ::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 5px;
      background: #515151;
      border-radius: 50%;
      margin: 0 10px;
    }
    > br {
      display: none;
    }
  }
  
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    margin: 30px 0 0;
    > p {
      align-items: flex-start;
      font-size: 12px;
      letter-spacing: 0;
      ::before {
        width: 3px;
        height: 3px;
        margin: 5px 7px 0 5px;
      }
      > br {
        display: block;
      }
    }
  }
`;

const LinkButton = styled.button`
  width: 100%;
  display: block;
  height: 5.22vw;
  font-size: 1.221vw;
  font-weight: 400;
  color: #515151;
  border-radius: 20px;
  margin-bottom: 1.15vw;
  cursor: pointer;
  background-color: #EBEBEB;
  
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 7vh;
    font-size: 12px;
    letter-spacing: -2%;
    border-radius: 9px;
    margin-bottom: 6px;
  }
`;

const PdfViewButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    flex-direction: column;
    > button:first-child {
      margin-bottom: 10px;
    }
  }
`;

const PdfViewButton = styled.button`
  width: 28.65vw;
  height: 4.17vw;
  color: #FFFFFF;
  font-weight: 400;
  border-radius: 10px;
  font-size: 1.045vw;
  background: ${props => props.bgColor};
  cursor: pointer;
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 7vh;
    font-size: 13px;
  }
`;
