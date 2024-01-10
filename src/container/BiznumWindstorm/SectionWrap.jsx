import React from "react";
import styled, { css } from "styled-components";
import ci from '../../assets/img/insuroboNewCi.png';

const SectionWrap = ({ bgColor, title, comment, info, hr, children }) => {
  return (
    <Section bgColor={bgColor}>
      {title && (
        <>
          <div>
            <SectionTitle info={info} hr={hr}>
              <h2>{title}</h2>
              {comment && (<span><b>*</b>{comment}</span>)}
              {info && (<p>{info}</p>)}
            </SectionTitle>
          </div>
        </>
      )}
      {children}
    </Section>
  )
}
export default SectionWrap;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor === 'GRAY' ? '#FAFAFA': '#FFFFFF'};
  > div {
    width: 356px;
    padding-bottom: 24px;
    :last-child {
      padding-bottom: 30px;
    }
    
  }

  ${(props) => props.theme.window.mobile} {
    padding: 0 20px;
    > div {
      width: 100%;
    }
  }
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 44px;
  padding-bottom: ${props => props.hr === 'none' ? '0' : '15px'};
  border-bottom: ${props => props.hr === 'none' ? '0' : '1px solid #000000'};
  > h2 {
    color: #333333;
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    
    ::before {
      content: '';
      display: block;
      width: 18px;
      height: 17px;
      background-image: url(${ci});
      margin-right: 4px;
    }
  }
  > span {
    color: #333333;
    font-weight: 300;
    font-size: 12px;
    > b {
      color: #6262EF;
      font-weight: 300;
    }
  }

  ${props => props.info && css`
    flex-direction: column;
    align-items: flex-start;
    > p {
      font-size: 14px;
      padding-top: 16px;
      color: #666666;
      white-space: pre-wrap;
    }
  `}
`;