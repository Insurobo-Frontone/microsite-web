import React from 'react';

import TextInput from '../container/BiznumWindstorm/Input/TextInput';
import styled from 'styled-components';

function Staff() {

  return (
    <Wrap>
        <input />
        <button>조회</button>
    </Wrap>
  )
}

export default Staff

const Wrap = styled.div`
padding: 20px;
  > input {
    border: 1px solid #000;
    width: 200px;
    height: 50px;
  }
  > button {
    border: 1px solid #000;
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }
`;
