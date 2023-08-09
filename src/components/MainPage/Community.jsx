import React from 'react'
import Table from '../Post/Table'
import Content from '../Content'
import TitleSet from '../TitleSet'
import View from '../Post/View';
import useWindowSize from '../../hooks/useWindowSize';
import { useSearchParams, useLocation } from 'react-router-dom';

function Community() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { width } = useWindowSize();
  const location = useLocation();
  const id = searchParams.get('id');

  return (
    <Content top={width > 768 ? '3.4%' : '15.4%'} bottom={width > 768 ? '3.4%' : '15.4%'}>
      <TitleSet 
        small_title='서로 공유해요!!'
        big_title2='커뮤니티'
      />
      {location.search === `?id=${id}` ? (<View api='communityDetail' flex />) : (
        <Table category={category}  />
      )}
    </Content>
  )
}

export default Community;