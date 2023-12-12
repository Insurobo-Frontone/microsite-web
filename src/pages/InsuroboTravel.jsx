import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import Layout from "../layout";
import RollingBanner from "../components/MainPage/RollingBanner";
import ContentInner from "../layout/ContentInner";
import SelectType from "../container/InsuroboTravel/SelectType";
import Apply from "../container/InsuroboTravel/Apply";
import bg_img from '../assets/img/insuroboTravel/travelBg.png';
import { postPaymentCom } from "../api/TravelAPI";

const Wrap = styled.div`
  background-image: url(${bg_img});
  background-repeat: no-repeat;
  background-position: 50% -126px;
  padding: 189px 0 181px;
  ${props => props.apply && css`
    padding: 60px 0 70px;
  `}
  ${(props) => props.theme.window.mobile} {
    padding: 128px 0 24px;
    background-size: 984px;
    background-position: -80px 0;

    ${props => props.apply && css`
      padding-top: 0;
      background-image: none;
    `}
  }
`;

const InsuroboTravel = ({ apply }) => {
  const location = useLocation();
  const pageState = location.state;
  const [searchParams, setSearchParams] = useSearchParams();
  const imp_success = searchParams.get('imp_success');
  const error_msg = searchParams.get('error_msg');
  const imp_uid = searchParams.get('imp_uid');
  const merchant_uid = searchParams.get('merchant_uid');

  useEffect(() => {
    
    if (imp_success === 'true') {
      postPaymentCom({
        imp_uid: imp_uid,
        merchant_uid: merchant_uid,
        dt_id: merchant_uid
      }).then((res) => {
        console.log(res)
        if (res.status === 200) {
          alert(res.data)
        }
      })
    } else {

    }
  }, []);

  return (
    <Layout windStormHide apply={apply}>
      <Wrap apply={apply}>
        <ContentInner apply={apply}>
          {location.pathname === '/insuroboTravel' ? (
            <SelectType />
            ) : (
              <Apply type={pageState.type} />
            )}
        </ContentInner>
        <RollingBanner />
      </Wrap>
    </Layout>
  )
}

export default InsuroboTravel;

