import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from '../../../../assets/icon/addrModalCloseBtn.svg';
import { StorageGetInsurance } from "../../../Storage/Insurance";
import { getRoadView } from "../../../../api/WindstormAPI";
import ModalTextList from "./ModalTextList";
import Button from "../../Button";
const { kakao } = window;

const RoadViewModal = ({onClick}) => {
  const InsuroboWindstorm = StorageGetInsurance();
  useEffect(() => {
    getRoadView(InsuroboWindstorm.getAddr.roadAddr).then((res) => {
      const xPosition = res.data.documents[0].address.x // 경도
      const yPosition = res.data.documents[0].address.y // 위도
      const roadviewContainer = document.getElementById('roadview');
      const roadview = new kakao.maps.Roadview(roadviewContainer);
      const roadviewClient = new kakao.maps.RoadviewClient();
      const position = new kakao.maps.LatLng(yPosition, xPosition);

      roadviewClient.getNearestPanoId(position, 50, function (panoId) {
        roadview.setPanoId(panoId, position);
      });
    }).catch((e) => console.log(e, '에러'));

  }, [InsuroboWindstorm]);

  return (
    <RoadViewModalWrap>
      <RoadViewBody>
        <RoadViewWrap>
          <div id="roadview"></div>
          <TitleWrap>
            <div />
            <div style={{width: '80%'}}>
              <Title>건물 기본정보</Title>
            </div>
            <div style={{width: '10%'}}>
              <StyledCloseBtn onClick={onClick} />
            </div>
          </TitleWrap>
        </RoadViewWrap>
        <BodyWrap>
          <BadgeWrap>
            {InsuroboWindstorm.getCover?.purpsCdNm?.split(',').map((cur, index) => {
              return (
                <Badge key={index}>
                  {cur}
                </Badge>
              )
            })}
          </BadgeWrap>
          <p>{InsuroboWindstorm.getAddr.roadAddr}</p>
          <ModalTextList />
          <Button onClick={onClick}>소재지 등록</Button>
        </BodyWrap>
      </RoadViewBody>
    </RoadViewModalWrap>
  )
}

export default RoadViewModal;

const RoadViewModalWrap = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const RoadViewBody = styled.div`
  width: 395px;
  max-height: 840px;
  border-radius: 5px;
  background-color: #FFFFFF;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    border-radius: 0;
  }
`;

const Title = styled.p`
  font-size: 26px;
  font-weight: 700;
  line-height: 42px;
  color: #FFFFFF;
  text-align: center;
`;

const StyledCloseBtn = styled(CloseBtn)`
  stroke: #FFFFFF;
`;

const RoadViewWrap = styled.div`
  width: 100%;
  height: 425px;
  position: relative;

  & > *:nth-child(1) {
    width: 100%;
    height: 100%;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  padding: 20px 0px 0px;

`;

const BadgeWrap = styled.div`
  display: flex;
  margin: 10px 0px 15px;
`;

const BodyWrap = styled.div`
  padding: 20px 16px 30px;
  > p {
    margin-bottom: 30px;
    font-weight: 400;
    white-space: pre-wrap;
    color: #000000;
    font-size: 15px;
  }
  > button {
    width: 100% !important;
  }
`;

const Badge = styled.div`
  margin-right: 10px;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  font-weight: 700;
  border: 1px solid #2EA5FF;
  border-radius: 15px;
  color: #2EA5FF;
  padding: 0px 15px;
`;



