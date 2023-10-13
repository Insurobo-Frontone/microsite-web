import React from "react"
import styled from "styled-components";

const Layer = styled.div`
  z-index: 99;
  display: block;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalOutLayer = ({ modalOutSideClick, modalRef}) => {
  return (
    <Layer onClick={(e)=> modalOutSideClick(e)} ref={modalRef}></Layer>
  )
}

export default ModalOutLayer;
