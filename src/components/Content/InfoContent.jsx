import React from 'react'
import styled from 'styled-components'
import theme from '../../style/Theme';

const Wrap = styled.div`
  position: relative;
  max-width: 800px;
  margin: 10% auto;
  background-color: ${props => theme.color[props.color]};
  ${(props) => props.theme.window.mobile} {
    max-width: none;
    width: 100%;
    padding: 0 20px;
  }
`;

function InfoContent({children, color}) {
  return (
    <Wrap color={color}>
      {children}
    </Wrap>
  )
}

export default InfoContent