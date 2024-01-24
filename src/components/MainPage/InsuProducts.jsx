import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TitleSet from '../TitleSet';
import ContentInner from '../../layout/ContentInner';
import useWindowSize from '../../hooks/useWindowSize';

import icon1 from '../../assets/icon/insuProduct1.png';
import icon2 from '../../assets/icon/insuProduct2.png';
import icon3 from '../../assets/icon/insuProduct3.png';
import icon4 from '../../assets/icon/insuProduct4.png';
import icon5 from '../../assets/icon/insuProduct5.png';
import icon6 from '../../assets/icon/insuProduct6.png';
import icon7 from '../../assets/icon/insuProduct7.png';
import icon8 from '../../assets/icon/insuProduct8.png';
import icon9 from '../../assets/icon/insuProduct9.png';
import icon10 from '../../assets/icon/insuProduct10.png';
import icon11 from '../../assets/icon/insuProduct11.png';
import icon12 from '../../assets/icon/insuProduct12.png';
import icon13 from '../../assets/icon/insuProduct13.png';
import icon14 from '../../assets/icon/insuProduct14.png';
import icon15 from '../../assets/icon/insuProduct15.png';
import icon16 from '../../assets/img/kyoboCancerCare.png';
import icon17 from '../../assets/img/kyoboInfection.png';
import icon18 from '../../assets/img/kyoboPolyp.png';
import Popup from '../../container/InsuroboTravel/Apply/Popup';

const data = [
  {
    id: 1,
    title: '풍수해보험',
    mobileTitle: '풍수해보험',
    link: '/freeApply',
    mobile: '/freeApply',
    img: icon1,
    tag: '사업장보험'
  },
  {
    id: 2,
    title: '여행자보험',
    mobileTitle: '여행자보험',
    link: '',
    mobile: '',
    img:  icon2,
    class: 'must',
    tag: '개인보험'
  },
  {
    id: 3,
    title: '다중이용시설보험',
    mobileTitle: '다중이용시설',
    link: 'https://platform.hi.co.kr/service.do?m=pipin1000&jehuCd=hyundaipay',
    mobile: 'https://mplatform.hi.co.kr/service.do?m=pipin1000&jehuCd=hyundaipay',
    img: icon3,
    tag: '사업장보험'
  },
  {
    id: 4,
    title: '개인정보보호보험',
    mobileTitle: '개인정보보호',
    link: 'https://platform.hi.co.kr/service.do?m=pipil1000&jehuCd=insurobo',
    mobile: 'https://mplatform.hi.co.kr/service.do?m=pipil1000&jehuCd=insurobo',
    img: icon4,
    tag: '사업장보험'
  },
  {
    id: 5,
    title: '라이더보험',
    mobileTitle: '라이더보험',
    link: '',
    mobile: '',
    img: icon5,
    tag: '개인보험'
  },
  {
    id: 6,
    title: '가스사고보험',
    mobileTitle: '가스사고보험',
    link: 'https://platform.hi.co.kr/service.do?m=pipig1000&jehuCd=insurobo',
    mobile: 'https://mplatform.hi.co.kr/service.do?m=pipig1000&jehuCd=insurobo',
    img: icon6,
    tag: '사업장보험'
  },
  {
    id: 7,
    title: '대출안심보험',
    mobileTitle: '대출안심보험',
    link: 'https://online.cardif.co.kr/spaviews/prdF0201',
    mobile: 'https://online.cardif.co.kr/spaviews/prdF0201',
    img: icon7,
    tag: '개인보험'
  },
  {
    id: 8,
    title: '원데이 레저보험',
    mobileTitle: '원데이 레저',
    link: '',
    mobile: '',
    img: icon8,
    tag: '개인보험'
  },
  {
    id: 9,
    title: '주택화재보험',
    mobileTitle: '주택화재보험',
    link: '',
    mobile: '',
    img: icon9,
    tag: '개인보험'
  },
  {
    id: 10,
    title: '원데이 스포츠보험',
    mobileTitle: '원데이 스포츠',
    link: '',
    mobile: '',
    img: icon10,
    tag: '개인보험'
  },
  {
    id: 11,
    title: '(무)챌린지 미니저축보험',
    mobileTitle: '(무)챌린지 미니저축',
    link: '/kdbLife?insuType=mini',
    mobile: '/kdbLife?insuType=mini',
    img: icon11,
    tag: '개인보험'
  },
  {
    id: 12,
    title: '암보험',
    mobileTitle: '암보험',
    link: '/kdbLife?insuType=cancer',
    mobile: '/kdbLife?insuType=cancer',
    img: icon12,
    tag: '개인보험'
  },
  {
    id: 13,
    title: '연금저축보험',
    mobileTitle: '연금저축보험',
    link: '/kdbLife?insuType=rsp',
    mobile: '/kdbLife?insuType=rsp',
    img: icon13,
    tag: '개인보험'
  },
  {
    id: 14,
    title: '학원배상책임보험',
    mobileTitle: '학원배상책임',
    link: 'https://platform.hi.co.kr/service.do?m=pipih1000&jehuCd=insurobo',
    mobile: 'https://mplatform.hi.co.kr/service.do?m=pipih1000&jehuCd=insurobo',
    img: icon14,
    tag: '사업장보험'
  },
  {
    id: 15,
    title: '재난배상책임보험',
    mobileTitle: '재난배상책임',
    link: 'https://platform.hi.co.kr/service.do?m=pipim1000&jehuCd=hyundaipay',
    mobile: 'https://mplatform.hi.co.kr/service.do?m=pipim1000&jehuCd=hyundaipay',
    img: icon15,
    tag: '사업장보험'
  },
  {
    id: 16,
    title: '교보e암케어보험',
    mobileTitle: 'e암케어',
    link: 'http://kyobo.com/dgt/web/dtp/ei/insurance-detail/1000978?evcode=DR_AD_EI',
    mobile: 'http://kyobo.com/dgt/web/dtp/ei/insurance-detail/1000978?evcode=DR_AD_EI',
    img: icon16,
    tag: '개인보험'
  },
  {
    id: 17,
    title: '교보e감염케어보험',
    mobileTitle: 'e감염케어',
    link: 'http://kyobo.com/dgt/web/dtp/ei/insurance-detail/1000969?evcode=DR_AD_EI',
    mobile: 'http://kyobo.com/dgt/web/dtp/ei/insurance-detail/1000969?evcode=DR_AD_EI',
    img: icon17,
    tag: '개인보험'
  },
  {
    id: 18,
    title: '교보e용종케어보험',
    mobileTitle: 'e용종케어',
    link: 'http://kyobo.com/dgt/web/dtp/ei/insurance-detail/1000973?evcode=DR_AD_EI',
    mobile: 'http://kyobo.com/dgt/web/dtp/ei/insurance-detail/1000973?evcode=DR_AD_EI',
    img: icon18,
    tag: '개인보험'
  },
];

const ProductsWrap = styled.div`
  padding: 70px 0 0 0;

  ${(props) => props.theme.window.mobile} {
    padding: 30px 0;
  }
`;

const ProductsList = styled.ul`
  display: grid;
  grid-column: 1 / 7;
  row-gap: 40px;
  column-gap: 53px;
  grid-template-columns: repeat(7, auto);
  > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 8px;
    }
    :hover {
      > div {
        background-color: #F4F4F4;
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    row-gap: 10px;
    column-gap: 0;
    > li {
      width: 47.43589743589744%;
      height: 52px;
      padding: 8px 12px;
      background-color: #FAFAFA;
      flex-direction: row;
      justify-content: flex-start;
      border-radius: 5px;
      > div {
        width: 36px;
        height: 36px;
        margin-bottom: 0;
        margin-right: 4px;
      }
      > p {
        width: 84px;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      :hover {
        background-color: #F4F4F4;
      }
    }
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  

  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;

const TabBar = styled.div`
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 5px;
  }
`;


const TabMenu = styled.div`
  ${(props) => props.theme.window.mobile} {
    width: 50%;
    border-bottom: 2px solid #F4F4F4;
    text-align: center;
    color: #393939;
    font-weight: 700;
    line-height: 33px;
    ${props => props.open && css`
      border-color: #2EA5FF;
    `}
  }
`;

function InsuProducts() {
  const [open, setOpen] = useState(false);
  const [tagName, setTagName] = useState('사업장보험');
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const onClickLink = (id, link) => {
    if (link) {
      switch(id) {
        case 1 :
          navigate(link);
          break;
        case 11 : 
          navigate(link);
          break;
        case 12 : 
          navigate(link);
          break;
        case 13 : 
          navigate(link);
          break;
      default: window.open(link);
      }
    } else {
      setOpen(true);
    }
  }
  return (
    <>
      <ContentInner>
        <ProductsWrap>
          <TitleWrap>
            <TitleSet
              title='어떤 보험에 관심이 있으신가요?'
              text='다양한 보험을 직접 확인하고 비교해보세요!'
              label='New!'
              bgColor='RED'
            />
          </TitleWrap>
          <TabBar>
            <TabMenu open={tagName === '사업장보험' ? true : false} onClick={() => setTagName('사업장보험')}>사업장보험</TabMenu>
            <TabMenu open={tagName === '개인보험' ? true : false} onClick={() => setTagName('개인보험')}>개인보험</TabMenu>
          </TabBar>
          <ProductsList>
            {width > 767.98 ? (
              <>
                {data.map((dt) => (
                  <li onClick={() => onClickLink(dt.id, dt.link)} key={dt.id}>
                    <div>
                      <img src={dt.img} alt={dt.title} />
                    </div>
                    <p>{dt.title}</p>
                  </li>
                ))}
              </>
            ) : (
              <>
                {data.filter((item) => item.tag === tagName).map((dt) => (
                  <li onClick={() => onClickLink(dt.id, dt.mobile)} key={dt.id}>
                    <div>
                      <img src={dt.img} alt={dt.title} />
                    </div>
                    <p>{dt.mobileTitle}</p>
                  </li>
                ))}
              </>
            )}
            
          </ProductsList>
        </ProductsWrap>
      </ContentInner>
      {open && (
        <Popup type='alert' close={() => setOpen(false)}>
          <p>준비중입니다.</p>
        </Popup>
      )}  
    </>

  )
}

export default InsuProducts;