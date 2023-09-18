import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { Link,  } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../style/Theme';
import moreIcon from '../../assets/img/moreIcon.svg';
import Pagination from '../Pagination';
import useAsync from '../../hooks/useAsync';
import { CommonAPI } from '../../api/CommonAPI';

const categories = [
  {
    name: 'all',
    print: '전체',
    color: ''
  },
  {
    name: 'windstorm',
    print: '풍수해',
    color: 'PRIMARY'
  },
  {
    name: 'event',
    print: '이벤트',
    color: 'POINT'
  },
  {
    name: 'bizsupport',
    print: '지원정책',
    color: 'SUCCESS'
  },
  {
    name: 'loan',
    print: '대출',
    color: 'SECONDARY'
  },
  {
    name: 'promotion',
    print: '홍보',
    color: 'WARNING'
  }
]



const TableWrap = styled.div`
  border-top: 2px solid #2F2F2F;
  margin-top: 3.5%;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  ${(props) => props.theme.window.mobile} {
    margin-top: 13.9%;
  }
`;

const Categories = styled.ul`
  display: flex;
  align-self: flex-end;
  
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100px;
    height: 80px; */
    width: 5.24vw;
    height: 4.2vw;
  }

  ${(props) => props.theme.window.mobile} {
    > li {
      width: 62px;
      height: 60px;
    }
  }
`;

const Category = styled(Link)`
  color: #BABABA;
  position: relative;
  font-size: 1.05vw;

  ${props => props.active && css`
    color:#4575F5;
    
    ::before {
      content: '';
      display: inline-block;
      width: 0.42vw;
      height: 0.42vw;
      border-radius: 50%;
      background-color: #4575F5;
      position: absolute;
      left: -15px;
      top: calc(50% - 3.5px);
    }
  `}

  ${(props) => props.theme.window.mobile} {
    text-align: end;
    font-size: 13px;
    text-align: center;
    
    ::before {
      width: 6px;
      height: 6px;
      left: -12px;
      top: calc(50% - 2.5px);
    }
  }
`;

const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* padding: 22px 10px; */
  padding: 1.18vw 0.55vw;
  line-height: 2.05vw;
  border-top: 2px solid #F5F5F5;
  :last-child {
    border-bottom: 2px solid #F5F5F5;
  }
  a {
    width: 87.63888888888889%;
    font-size: 1.05vw;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 13px 0;
    justify-content: flex-start;
    a {
      display: flex;
      width: 75%;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      align-items: center;
    }
  }
`;

const CategoryLabel = styled.span`
  display: block;
  color: #FFFFFF;
  /* width: 100px; */
  width: 5.25vw;
  height: 2.05vw;
  border-radius: 19px;
  text-align: center;
  line-height: 2.05vw;
  /* font-size: 0.75rem; */
  font-size: 0.78vw;
  background-color: ${props => theme.color[props.color]};
  
  ${(props) => props.theme.window.mobile} {
    width: 54px;
    height: 30px;
    margin-right: 13px;
    line-height: 30px;
    border-radius: 6px;
    font-size: 13px;
    align-self: center;
  }
`;

const ButtonWrap = styled.div`
  /* width: 20%; */
  width: 14vw;
  margin: 0 auto;
  padding-top: 5.5%;
  background-color: transparent;
  > button {
    width: 100%;
    height: 3.66vw;
    border-radius: 56px;
    font-size: 1rem;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
      font-size: 1.04vw;
    }
  }

  ${(props) => props.theme.window.mobile} {
    width: 61.4%;
    padding-top: 80px;
    > button {
      height: 40px;
      > p {
        font-size: 15px;
      }
    }
  }
`;

const MoreIcon = styled.span`
  width: 0.78vw;
  height: 0.78vw;
  display: inline-block;
  background-image: url(${moreIcon});
  background-size: contain;
  margin-right: 20px;

  ${(props) => props.theme.window.mobile} {
    margin-right: 14px;
    width: 12px;
    height: 12px
  }
`;

export default function Table() {
  const { width } = useWindowSize();
  const [limit, setLimit] = useState(4);
  // const limit = 4;
  const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);
  const offset = (page - 1) * limit;
  const [category, setCategory] = useState('all');
  const categoryValue = category === 'all' ? '' : `?category=${category}`
  const [state] = useAsync(getData, [category]);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;


  async function getData() {
    const res = await CommonAPI.get(`/api/public/communityList${categoryValue}`)
    return res.data.data.slice(0).reverse();
  }

  const onSelect = (category) => {
    setPage(1);
    setCategory(category);
  }

  return (
    <>
      <TableWrap>
        <Categories>
          {width > 768 ? categories.map((dt) => (
            <li>
              <Category
                key={dt.id}
                to={dt.name === 'all' ? '' : `?category=${dt.name}`}
                active={category === dt.name}
                onClick={() => onSelect(dt.name)}
              >
                {dt.print}
              </Category>
            </li>
          )) : categories.filter((dt) => dt.name === 'all').map((dt) => (
          <li>
            <Category
              key={dt.id}
              active={category === dt.name}
            >
              {dt.print}
            </Category>
          </li>
          ))}
        </Categories>

        <ListWrap className={limit === 10 ? 'open' : null}>
          {data.slice(offset, offset + limit).map((dt) => (
            <ItemBlock key={dt.id}>
              {categories.filter((ct) => (ct.name === dt.code)).map((fd) => (
                <CategoryLabel color={fd.color}>{fd.print}</CategoryLabel>
              ))}
              {category === 'all' ? (<Link to={`?id=${dt.id}`}>{dt.title}</Link>) : (
                <Link to={`?id=${dt.id}`}>
                  {dt.title}
                </Link>
              )}
            </ItemBlock>
          ))}
        </ListWrap>
      </TableWrap>
      {limit === 4 && (
        <ButtonWrap>
          <button onClick={() => setLimit(Number(8))}>
            <MoreIcon />
            <p>더 보기</p>
          </button>
        </ButtonWrap>
      )}
      {limit === 8 && (
        <Pagination
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </>
    )
  }



