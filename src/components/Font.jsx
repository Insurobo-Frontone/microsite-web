import styled from "styled-components";
import theme from "../style/Theme";

export const Title = styled.h1`
  font-weight: ${(props) => (props.bold ? props.bold : '700')};
  font-size: ${(props) => (props.size ? props.size : '24px')};
  color: ${(props) => (theme.color[props.color] || theme.color.BLACK3)};

  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    letter-spacing: -0.1px;
  }
`;


export const Text = styled.p`
  font-weight: ${(props) => (props.bold ? props.bold : '400')};
  font-size: ${(props) => (props.size ? props.size : '18px')};

  ${(props) => props.theme.window.mobile} {
    font-size: 14px;
    white-space: pre-wrap;
    font-weight: 400;
  }
`;


