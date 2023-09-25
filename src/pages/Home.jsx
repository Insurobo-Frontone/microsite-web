import React from 'react';
import Community from '../components/MainPage/Community';
import FinanceGoods from '../components/MainPage/FinanceGoods';
import Infomation from '../components/MainPage/Infomation';
import Plaza from '../components/MainPage/Plaza';
import TaxReturn from '../components/MainPage/TaxReturn';
import useWindowSize from '../hooks/useWindowSize';
import Layout from '../layout/index';
import MainBanner from '../components/MainPage/MainBanner';
import RollingBanner from '../components/MainPage/RollingBanner';

function Home() {
  const { width } = useWindowSize();
  return (
    <>
      <Layout>
        <MainBanner />
        <RollingBanner />
        <Plaza scrollY={width > 700 ? 0 : 0} />
        <Infomation />
        <Community />
        <TaxReturn />
        <FinanceGoods />
      </Layout>
    </>
  )
}

export default Home;
