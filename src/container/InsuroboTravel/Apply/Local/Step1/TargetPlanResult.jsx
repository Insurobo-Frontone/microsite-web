import React from "react";
import styled from "styled-components";

const TargetPlanResult = () => {

  const accident = [
    {
      id: 1,
      title: '사망',
      pay: '30,000,000'
    },
    {
      id: 2,
      title: '고도후유장해',
      pay: '30,000,000'
    },
    {
      id: 3,
      title: '입원(급여/비급여)',
      pay: '30,000,000'
    },
    {
      id: 4,
      title: '통원(급여/비급여)',
      pay: '30,000,000'
    },
  ];

  const disease = [
    {
      id: 1,
      title: '사망',
      pay: '30,000,000'
    },
    {
      id: 2,
      title: '고도후유장해',
      pay: '30,000,000'
    },
    {
      id: 3,
      title: '입원(급여/비급여)',
      pay: '30,000,000'
    },
    {
      id: 4,
      title: '통원(급여/비급여)',
      pay: '30,000,000'
    },
  ]

  const etc = [
    {
      id: 1,
      title: '도수치료비/체외충격파/증식',
      pay: '30,000,000'
    },
    {
      id: 2,
      title: 'MRI/MRA 진단',
      pay: '30,000,000'
    },
    {
      id: 3,
      title: '주사료',
      pay: '30,000,000'
    },
  ];

  const obi = [
    {
      id: 1,
      title: '배상책임',
      pay: '30,000,000'
    },
  ]
  return (
    <>
      <Wrap>
        <div>
          <h2>상해보장</h2>
          <ul>
            {accident.map((dt) => (
              <li key={dt.id}>
                <h3>{dt.title}</h3>
                <p>{dt.pay}&nbsp;원</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>질병보장</h2>
          <ul>
            {disease.map((dt) => (
              <li key={dt.id}>
                <h3>{dt.title}</h3>
                <p>{dt.pay}&nbsp;원</p>
              </li>
            ))} 
          </ul>
        </div>
        <div>
          <ul>
            {etc.map((dt) => (
              <li key={dt.id}>
                <h3>{dt.title}</h3>
                <p>{dt.pay}&nbsp;원</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {obi.map((dt) => (
              <li key={dt.id}>
                <h3>{dt.title}<span>자세히보기</span></h3>
                <p>{dt.pay}&nbsp;원</p>
              </li>
            ))}
          </ul>
        </div>
      </Wrap>
    </>
  );
}

export default TargetPlanResult;

const Wrap = styled.div`
  > div {
    padding: 50px 0;
    border-bottom: 1px solid #F0F0F0;
    :last-child {
      border-bottom: 0;
    }
    > h2 {
      font-size: 24px;
      color: #333333;
      font-weight: 500;
      padding-bottom: 40px;
    }
    > ul {
      > li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
        > h3 {
          font-size: 20px;
          font-weight: 400;
          color: #333333;
          > span {
            color: #176FFF;
            border-bottom: 1px solid #176FFF;
            font-weight: 300;
            margin-left: 10px;
          }
        }
        > p {
          font-size: 20px;
          font-weight: 300;
          color: #333333;
        }
      }
    }
  }
  

`;
