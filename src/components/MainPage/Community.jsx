import React, { useState, useCallback, useEffect } from 'react'
import Table from '../Post/Table'
import Content from '../Content'
import TitleSet from '../TitleSet'

import View from '../Post/View';
import axios from 'axios';
import useWindowSize from '../../hooks/useWindowSize';
import useAsync from '../../hooks/useAsync';
import { useSearchParams, useLocation } from 'react-router-dom';

function Community() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { width } = useWindowSize();
  const location = useLocation();
  const id = searchParams.get('id');
  return (
    <Content bottom={width > 768 ? '3.4%' : '15.4%'}>
      <TitleSet 
        small_title='서로 공유해요!!'
        big_title2='커뮤니티'
      />
      {location.search === `?id=${id}` ? (<View />) : (
        <Table category={category}  />
      )}
    </Content>
  )
}

export default Community