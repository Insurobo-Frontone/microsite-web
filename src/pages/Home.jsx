import React from 'react';
import Finance from '../components/MainPage/Finance';
import InfoPlace from '../components/MainPage/InfoPlace';
import Plaza from '../components/MainPage/Plaza';
import Layout from '../layout/index';
import MainBanner from '../components/MainPage/MainBanner';
import RollingBanner from '../components/MainPage/RollingBanner';

function Home() {
  return (
    <>
      <Layout>
        <MainBanner />
        <RollingBanner />
        <Plaza />
        <InfoPlace />
        <Finance />
      </Layout>
    </>
  )
}

export default Home;
