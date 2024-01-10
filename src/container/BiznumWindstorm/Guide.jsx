import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import yogiyoImg from '../../assets/img/yogiyo_sajangnim.png';
import collabo from '../../assets/img/jehuCdyogiyoCollabo.png';
import insuroboImg from '../../assets/img/jehuCdyogiyoInsurobo.png';
import main1 from '../../assets/img/yogiyoWindstormMain.png';
import manual1 from '../../assets/img/yogiyoWindstormSection2-1.png';
import manual2 from '../../assets/img/yogiyoWindstormSection2-2.png';
import manual3 from '../../assets/img/yogiyoWindstormSection2-3.png';
import insuMessageBox from '../../assets/icon/insuroboWindstorm/messageBoxTail.svg';
import userMessageBox from '../../assets/icon/insuroboWindstorm/userMessageBoxTail.svg';
import insuChatIcon from '../../assets/img/insuroboChat_icon.png';
import userChatIcon from '../../assets/img/userChat_icon.png';
import Button from "../InsuroboWindStrom/Button";

const manual = [
  {
    id: 1,
    title: `“무료가입”\n버튼을 클릭하세요`,
    img: manual1
  },
  {
    id: 2,
    title: `무료가입신청서 작성 후\n“가입신청” 누르면 끝!`,
    img: manual2
  },
  {
    id: 3,
    title: `아래의 QR코드로\n바로 접속 가능합니다`,
    img: manual3
  },

]
const Guide = ({ jehuCd }) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <Section gradient='gra1'>
        <div>
          <AppIconWrap>
            <img src={yogiyoImg} alt="요기요 사장님" />
            <img src={collabo} alt="X" />
            <img src={insuroboImg} alt="인슈로보" />
          </AppIconWrap>
          <TextWrap>
            <h2>
              <b>풍수해보험</b><br />
              <span>무료 가입</span> 하세요
            </h2>
            <p>
              요기요와 인슈로보가<br />
              지원하는 소상공인 풍수해보험
              <span>
                요기요 사장님께서는 간단한 내용 입력만으로<br />
                풍수해보험을 신청하실 수 있고 무료 가입 혜택을 받으실 수 있습니다.
              </span>
            </p>
            <span className="underline">2024년 1월 15일 ~ 2월 29일</span>
          </TextWrap>
        </div>
        <div>
          <img src={main1} alt='풍수해보험 이미지' />
        </div>
      </Section>
      <Section>
        <Title>
          <Label>가입대상</Label>
          <p>소상공인이라면 누구나 가능합니다</p>
        </Title>
        <CardWrap>
          {manual.map((dt) => (
            <li key={dt.id}>
              <Card >
                <img src={dt.img} alt="manual" />
              </Card>
              <p>{dt.title}</p>
            </li>
          ))}
        </CardWrap>
        <Button jehuCd={jehuCd} onClick={() => navigate('/freeApply/bizWindstorm?jehuCd=yogiyo')}>풍수해보험 신청하기</Button>
      </Section>
      {/* <Section gradient='gra2'>
        <Title>
          <Label>이벤트 유의사항</Label>
        </Title>
        <ChatWrap>
          <div>
            <MessageBox insurobo>
              <p>풍수해보험이란?</p>
              <p>
                국가 및 지자체에서 보험료 일부 지원하는<br />
                보험으로 행정안전부가 관장하고 민영보험사가<br />
                판매하는 정책보험입니다.
              </p>
              <p>
                지진, 태풍, 홍수, 호우, 강풍 등으로 인한 사고<br />
                발생 시 실손비용을 보장하는 보험이예요.
              </p>
            </MessageBox>
            <img src={insuChatIcon} alt="인슈로보" />
          </div>
          <div>
            <img src={userChatIcon} alt="고객" />
            <MessageBox user>
              <p>그럼 나머지 일부 보험료는 제가 지불해야하나요?</p>
            </MessageBox>
          </div>
          <div>
            <MessageBox insurobo>
              <p>아니요! 이벤트 주최사인 저희 인슈로보에서<br />보험료 전부를 지원합니다.</p>
            </MessageBox>
            <img src={insuChatIcon} alt="인슈로보" />
          </div>
        </ChatWrap>
      </Section> */}
      <Section>
        <Title>
          <Label>가입시 유의사항</Label>
          <p>가입 전에 꼭 한 번 확인하세요!</p>
        </Title>
        <ListWrap>
          <li>일반금융소비자는 금융상품판매업자로부터 충분한 설명을 받을 권리가 있으며 그 설명을 이해하신 후 가입하시기 바랍니다.</li>
          <li>이 자료는 요약된 것이므로 가입 전 해당 상품의 약관 및 상품설명서를 반드시 확인하세요.</li>
          <li>본 보험은 요기요 회원을 대상으로 인슈로보가 보험료를 지불하고 DB손해보험에서 보장하는 풍수해보험 입니다.</li>
          <li>보험개시는 가입신청 익월부터 개시됩니다.</li>
          <li>가입대상이 아닌 경우 보험가입 거절되거나 해지 시 보험 계약은 취소될 수 있습니다.</li>
          <li>해지 또는 취소 시에도 환급보험료는 발생하지 않습니다.</li>
        </ListWrap>
        <HashTagWrap>
          <div># 보험기간 1년</div>
          <div># 완전 무료</div>
          <div># 소상공인 상가 및 공장</div>
        </HashTagWrap>
        <ListWrap>
          <li>2021. 01월 기준 1년 보험료 / 건물급수 1급 / 6등지 / 일반건물</li>
          <li>국가,지자체 지원 : 82% 기준<br />(지자체별 월별 지원비율 상이)</li>
          <li>지역별(시군구) / 건물주고 및 급수에 따라 보험료가 달라집니다.</li>
          <li>이 상품은 순수 보장성 상품으로 만기 시 환급금이 없습니다.</li>
        </ListWrap>
        <Title>
          <Label><p>꼭 알아두어야하는 사항</p></Label>
        </Title>
        <ScrollBox>
          <ul>
            <li>
              상품안내
              <ul>
                <li>
                  <p>1)자연재해 사고 보장</p>
                  8대 자연재해<br />
                  (태풍, 홍수, 호우, 해일, 강풍, 풍랑, 대설, 지진)<br />
                  사고 발생시 실손비용 보상
                </li>
                <li>
                  <p>2)일부 보험료를 정부에서 지원</p>
                  국가 및 지방자치단체에서 보험료의 일부를 지원<br />
                  (최소 70% 지원, 지방자치단체별 추가 지원 다름)
                </li>
                <li><p>3)순수 보장성 상품으로 만기시 환급금 없음</p></li>
              </ul>
            </li>
            <li>
              보장내용
              <ul>
                <li>
                  <p>1)풍수해</p>
                  <span>기성청 특보 발표 기준</span>
                  <table>
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>내용</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>태풍</th>
                        <td>태풍으로 인하여 강풍, 풍랑, 호우, 폭풍해일 현상 등이 주의보 기준에 도달할 것으로 예상될 때</td>
                      </tr>
                      <tr>
                        <th>호우</th>
                        <td>3시간 강우량 50mm이상 예상되거나 12시간 강우량이 110mm이상 예상될 때</td>
                      </tr>
                      <tr>
                        <th>강풍</th>
                        <td>육상에서 12m/s 이상 또는 순산풍속 20m/s 이상이 될 때. 단, 산지는 풍속이 17m/ 이상 또는 순간풍속 25m/s 이상이 예상될 때</td>
                      </tr>
                      <tr>
                        <th>풍량</th>
                        <td>해상에서 풍속 14m/s 이상이 3시간 이상 지속되거나 유의파고가 3m이상이 예상될 때</td>
                      </tr>
                      <tr>
                        <th colSpan={2}>해일</th>
                      </tr>
                      <tr>
                        <th>폭풍해일</th>
                        <td>천문조, 폭풍, 저기압 등의 복합적인 영향으로 해수면이 상승하여 발효기준값 이상이 예상될 때. 다만, 발효기준값은 지역별로 별도 지정</td>
                      </tr>
                      <tr>
                        <th>지진해일</th>
                        <td>한반도 주변해역(21˚N ~ 45˚N, 110˚E ~ 145˚E)등에서 규모 6.0이상의 해저지진이 발생하여 우리나라 해안가에 해일파고 0.5m이상의 지진해일 내습이 예상될 때</td>
                      </tr>
                      <tr>
                        <th>대설</th>
                        <td>24시간 신적설이 5cm 이상이 예상될 때</td>
                      </tr>
                      <tr>
                        <th>지진</th>
                        <td>국내 내륙에서 규모 3.5이상 또는 국내 해역에서 규모 4.0 이상으로 추정되는 자연지진이 발생하거나, 국외에서 발행한 지연지진으로 인하여 피해가 예상되는 경우</td>
                      </tr>
                    </tbody>
                  </table>
                  <span className="comment">※향후, 기상청 특보 발표기준 등이 변경되면 풍수해보험의 보상하는 재해기준도 동일하게 적용</span>
                  <span><p>보장내용</p></span>
                  <ul>
                    <li>
                      -일반건물
                      <p>보험가입금액 한도내 실손보상(건물/시설은 합계 1억원 한도, 재고자산은 5천만원 한도)</p>
                    </li>
                    <li>
                      -공장건물
                      <p>보험가입금액 한도내 실손보상(건물/시설은 합계 1억원 한도, 재고자산은 5천만원 한도)</p>
                    </li>
                  </ul>
                  <span><p>보장내용</p></span>
                  <ul>
                    <li>
                      <p>태풍, 호우, 홍수, 강풍, 풍랑, 해일, 지진, 대설로 보험 목적물에 손해가 발생한 경우 손해를 보상(자기부담금액 제외)</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>2)손해방지비용</p>
                  <span>보험가입금액과 별개로 추가지급</span>
                  <span>손해의 방지 또는 경감을 위해 지출한 필요 또는 유익한 비용</span>
                </li>
                <li>
                  <p>3)잔존물보존비용</p>
                  <span>보험가입금액과 별개로 추가지급</span>
                  <span>회사에 잔존물을 넘기는 경우 잔존물을 보전하기 위하여 지출한 필요 또는 유익한 비용</span>
                </li>
                <li>
                  <p>4)자존물제거비용</p>
                  <span>풍수해로 인한 보험금과 잔존물 제거비용의 합계액은 보험증권에 기재된 보험가입금액한도. 단, 잔존물 제거비용은 손해액의 10%를 초과할 수 없음.</span>
                  <span>풍수해로 잔존물제거비용이 발생한 경우 보상</span>
                  <p>( ㈜ 잔존물 제거비용 : 잔존물의 해체비용, 청소비용, 상차비용 )</p>
                </li>
                <li>
                  <p>5)대위권 보전비용</p>
                  <span>보험가입금액과 별개로 추가지급</span>
                  <span>제3자로부터 손해배상을 받을 권리가 있는 경우 권리를 지키거나 행사하기 위해 지출한 필용 또는 유익한 비용</span>
                </li>
                <li>
                  <p>6)기타협력비용</p>
                  <span>보험가입금액과 별개로 추가지급</span>
                  <span>회사의 요구를 따르기 위하여 지출한 필요 또는 유익한 비용</span>
                </li>
              </ul>
            </li>
            <li>
              유의사항(보험가입시 유의사항)
              <ul>
                <li>
                  <p>1)보험금 지급제한 사항</p>
                  <span>아래와 같은 손해는 보상하지 않음.</span>
                  <ul>
                    <li>
                      <p>- 계약자, 피보험자(보험대상자, 법인인 경우에는 그 이사 또는 법인의 업무를 집행하는 그 밖의 기관) 또는 이들의 법정대리인의 고의 또는 중대한 과실</p>
                    </li>
                    <li>
                      <p>- 풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</p>
                    </li>
                    <li><p>- 풍수해로 생긴 화재, 폭발 손해(단, 지진으로 인해 발생한 화재손해는 보상)</p></li>
                    <li><p>- 한파, 서리, 얼음, 우박으로 인한 손해</p></li>
                    <li><p>- 축대, 제방 등의 붕괴로 인한 손해(단, 붕괴의 직접원인이 이 약관에 의하여 보상되는 사고일 때에는 보상)</p></li>
                    <li><p>- 침식활동 및 지하수로 인한 손해</p></li>
                    <li><p>- 보험계약일 현재 이미 진행 중인 태풍, 호우, 홍수, 강풍, 풍랑, 해일, 대설, 지진으로 인한 손해</p></li>
                    <li>[이미 진행 중]</li>
                    <li>→ 보험기간 중에 보험의 목적이 위치하고 있는 지역에 기상청(홍수통제소 포함) 기상특보(주의보, 경보) 또는 에비특보 발령시점을 기준으로 합니다.</li>
                    <li><p>- 온실 시설의 단순 피복재(비닐 등) 파열(단, 단순비닐파손특약에 가입한 경우는 제외)</p></li>
                    <li><p>- 풍수해가 발생했을 때 생긴 도난, 또는 분실로 생긴 손해</p></li>
                    <li><p>- 전쟁, 내란, 폭동, 소요, 노동쟁의 등으로 인한 손해</p></li>
                  </ul>
                </li>
                <li>
                  <p>2)보험모집질서위반</p>
                  <span>보험계약 청약과 관련 특별이익을 제공하는 등 보험모집질서 위반행위는 보험업법에 의해 처벌 받을 수 있습니다.</span>
                  <span>금육감독원 위반행위 신고 센터</span>
                  <ul className="dep">
                    <li><p>- 전화 : 국번없이 1332</p></li>
                    <li><p>- 휴대전화 : 02-1332</p></li>
                    <li><p>- 인터넷 : www.fss.or.kr 내 “보험모집질서위반신고”</p></li>
                  </ul>
                  <span>손해보험협회</span>
                  <ul className="dep">
                    <li><p>- 전화 : 02-3702-8585</p></li>
                    <li><p>- 팩스 : 02-3702-8691</p></li>
                    <li><p>- 인터넷 : www.knia.or.kr 내 “모집질서문란 신고센터＂</p></li>
                  </ul>
                </li>
                <li>
                  <p>3)보험료 환급</p>
                  <span>순수 보장성 상품으로 만기 시 환급금이 없습니다.</span>
                  <span className="comment">※ 기타 자세한 사항은 약관의 내용을 따릅니다.</span>
                </li>
                <li>
                  <p>4)보험계약상의 알릴 의무</p>
                  <span>계약 전 알릴 의무</span>
                  <ul>
                    <li><p>- 계약을 맺을 때에 계약자, 피보험자 또는 이들의 대리인은 계약 청약서(질문서를 포함. 이하 동일)의 기재사항에 관하여 아는 사실을 빠짐없이 그대로 회사에 알려야 합니다. 인터넷 계약의 경우 입력사항을 정확하게 기재해 주셔야 합니다.</p></li>
                  </ul>
                  <span>계약 후 알릴 의무</span>
                  <ul className="dep">
                    <li><p>- 이 계약에서 담보하는 위험과 동일한 위험에 대해서 다른 회사와 다른 계약을 맺을 때</p></li>
                    <li><p>- 보험의 목적물을 양도할 때</p></li>
                    <li><p>- 보험의 목적 또는 보험의 목적을 수용하는 건물의 구조를 변경, 개축, 증축하거나 계속하여 15일 이상 수선하는 경우</p></li>
                    <li><p>- 보험의 목적 또는 보험의 목적을 수용하는 건물의 용도를 변경함으로써 위험이 변경하는 경우</p></li>
                    <li><p>- 보험의 목적인 건물 또는 보험의 목적이 들어있는 건물을 계속하여 30일 이상 비워 두거나 휴업하는 경우</p></li>
                    <li><p>- 위 이외의 위험이 뚜렷이 증가할 경우</p></li>
                    <li><p>- 알릴 의무를 위반하신 경우 계약을 해지하거나 보험금 지급이 제한될 수 있습니다</p></li>
                    <li><p>※ 기타 자세한 사항은 약관의 내용을 따릅니다.</p></li>
                  </ul>
                </li>
                <li>
                  <p>5)3대 기본 지키기 및 계약자 의무사항</p>
                  <span>자필서명 (인터넷 계약은 공동인증을 통해 대체될 수 있음)</span>
                  <span>청약서 부본전달 (인터넷 계약은 예외)</span>
                  <span>보험약관전달 (인터넷 계약은 이메일 등 전자적 수단에 의해 전달될 수 있음)</span>
                  <span className="comment">※ 3대 기본 지키기 미이행시는 계약성립일로부터 3개월 이내에 계약을 취소할 수 있습니다.</span>
                </li>
                <li>
                  <p>6)청약철회 청구제도</p>
                  <span>보험계약자는 보험증권을 받은 날부터 15일 이내에 그 청약을 철회할 수 있으며, 이 경우 3일 이내에 보험료를 돌려드립니다. 다만, 진단계약, 보험기간이 1년 미만인 계약 또는 전문보험계약자가 체결한 계약 및 청약을 한 날로부터 30일을 초과하는 경우에는 청약을 철회할 수 없습니다. 청약철회 기간 내에 청약철회를 하실 경우 납입한 보험료 전액을 돌려받으실 수 있습니다.</span>
                  <span>전문보험계약자</span>
                  <span className="comment">보험계약에 관한 전문성, 자산규모 등에 비추어 보험계약의 내용을 이해하고 이행할 능력이 있는 자로서 보험업법 제2조(정의), 보험업법시행령 제6조의 2(전문보험계약자의 범위 등) 도는 보험업감독규정 제1-4조의 2(전문보험계약자의 범위)에서 정한 국가, 한국은행, 대통령령으로 정하는 금융기관, 주권상장법인, 지방자치단체, 단체보험계약자 등의 전문보험계약자를 말합니다.</span>
                </li>
                <li>
                  <p>7)상담 및 보험분쟁조정안내</p>
                  <span>보험에 대한 문의사항 및 불만사항이 있을 경우 현대해상(전화 1588-5656 / 인터넷 hi.co.kr &gt; 전자민원접수) 또는 인슈로보(전화 070-4126-3333 / 카카오톡채널 “인슈로보”)로 연락주시면 신속하게 처리해 드립니다. 또한 보험에 관한 분쟁이 있을 때에는 금융감독원 및 한국소비자원에 분쟁조정을 신청하실 수 있습니다.</span>
                  <span>금융감독원</span>
                  <ul className="dep">
                    <li><p>- 전화 : 1332</p></li>
                    <li><p>- 홈페이지 : www.fss.or.kr</p></li>
                    <li><p>- e-금융센터 : www.fcsc.kr</p></li>
                  </ul>
                  <span>한국소비자원</span>
                  <ul className="dep">
                    <li><p>- 전화 : 1372</p></li>
                    <li><p>- 홈페이지 : www.kca.go.kr</p></li>
                  </ul>
                </li>
                <li>
                  <p>8)계약자배당에 관한 사항</p>
                  <span>무배당 상품으로 배당을 하지 않습니다.</span>
                </li>
                <li>
                  <p>9)보험계약체결</p>
                  <span>보험계약 체결 전에 상품설명서 및 약관을 읽어 보시기 바랍니다.</span>
                  <span>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 안상 또는 보장내용이 달라질 수 있습니다.</span>
                </li>
                <li>
                  <p>10)예금자 보호안내</p>
                  <span>이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 귀하의 모든 예금보호 대상 금융상품의 해약환급금(또는 만기시 보험금이나 사고 보험금)에 기타지급금을 합하여 1인당 “최고 5천만원＂이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다. 또한, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.</span>
                  <span>기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절, 보험료가 인상 또는 보장내용이 달라질 수 있습니다.</span>
                  <span className="comment">※ 위 내용은 예금자보호법 및 관련 법령의 개정에 따라 달라질 수 있으며, 자세한 내용은 예금보험공사(www.kdic.or.kr)로 문의 바랍니다.</span>
                </li>
              </ul>
            </li>
          </ul>
        </ScrollBox>
        <p>소상공인 풍수해보험 문의 : 담당자 010-2312-9868</p>
      </Section>
    </Wrap>
  )
}

export default Guide

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;

  ${(props) => props.theme.window.mobile} {
    width: 100%;
  }
`;

const Section = styled.div`
  background-color: #FFFFFF;
  padding: 32px 206px 0;
  display: flex;
  flex-direction: column;
  :last-child {
    padding-bottom: 62px;
  }
  > p { 
    font-size: 14px;
    color: #999999;
  }
  ${props => props.gradient === 'gra1' && css`
    flex-direction: row;
    padding: 50px 0 42px 206px;
    position: relative;
    background: linear-gradient(180deg, #6262EF 55.93%, rgba(52, 170, 196, 0.61) 99.99%, rgba(0, 0, 206, 0.32) 99.99%, rgba(1, 1, 213, 0.01) 100%, rgba(0, 0, 213, 0.00) 100%);
    > div:nth-child(2) {
      position: absolute;
      top: 83px;
      right: 123px;
    }
  `}

  ${props => props.gradient === 'gra2' && css`
    background: linear-gradient(180deg, rgba(52, 170, 196, 0.61) 0%, rgba(0, 0, 206, 0.32) 100%);
  `}

  ${(props) => props.theme.window.mobile} {
    padding: 32px 10px 0;
    :last-child {
      padding-bottom: 30px;
    }
    ${props => props.gradient === 'gra1' && css`
      padding: 50px 30px 42px;
      > div:nth-child(2) {
        right: -78px; 
      }
    `};
  }
`;

const AppIconWrap = styled.div`
  display: flex;
  align-items: center;

  > img:nth-child(2) {
    padding: 1px 8px 0;
  }
`;

const TextWrap = styled.div`
  padding-top: 18px;
  > h2 {
    color: #FFFFFF;
    font-weight: 100;
    font-size: 28px;
    ::after {
      content: '';
      display: block;
      width: 40px;
      height: 1px;
      margin-top: 26px;
      background-color: #FFFFFF;
    }
    > b {
      color: #FFFFFF;
      font-weight: 700;
    }
    > span {
      color: #FFFFFF;
      position: relative;
      font-weight: 100;
      z-index: 0;
      ::before {
        content: '';
        position: absolute;
        bottom: 3px;
        height: 4px;
        width: 100%;
        border-radius: 5px;
        background-color: #858FFC;
        z-index: -1;
      }
    }
  }
  > p {
    font-size: 14px;
    font-weight: 100;
    color: #FFFFFF;
    padding-top: 24px;
    > span {
      display: block;
      font-size: 12px;
      color: #E2E2E2;
      font-weight: 100;
      padding: 30px 0;
    }
  }
  > span {
    font-size: 10px;
    color: #FFFFFF;
    font-weight: 300;
    
    &.underline {
      position: relative;
      ::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: #FFFFFF;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #6262EF;
  background-color: #FFFFFF;
  border: 1.5px solid #6262EF;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 14px;
  > p {
    color: #6262EF;
    padding: 4px 0;
  }
`;



const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    padding-top: 16px;
  }
`;

const CardWrap =  styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 28px;
  > li {
    > p {
      font-size: 10px;
      text-align: center;
      white-space: pre;
      padding-top: 8px;
      color: #333333;
    }
  }

  ${(props) => props.theme.window.mobile} {
    
  }
`;

const Card = styled.div`
  width: 110.88px;
  height: 110.88px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #F4F4F4;
`;

const ChatWrap = styled.div`
  padding-top: 32px;
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 30px;
    > img {
      display: block;
      width: 48px;
      height: 48px;
    }
  }


`;

const MessageBox = styled.div`
  border-radius: 10px;
  position: relative;
  > p {
    font-weight: 300;
    font-size: 13px;
    color: #333333;
    :nth-child(2) {
      padding-top: 10px;
    }
    :nth-child(3) {
      padding-top: 20px;
    }
  }
  ${props => props.insurobo && css`
    background-color: #6262EF;
    padding: 16px 16px 18px;
    margin-right: 13px;
    > p {
      color: #FFFFFF;
    }
    ::after {
      content: '';
      display: block;
      position: absolute;
      top: 18px;
      right: -11px;
      width: 11px;
      height: 13px;
      background-image: url(${insuMessageBox});
    }
  `}

  ${props => props.user && css`
    background-color: #FFFFFF;
    padding: 16px;
    margin-left: 12px;
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: -11px;
      top: 17px;
      width: 11px;
      height: 13px;
      background-image: url(${userMessageBox});
    }
  `}
`;

const ListWrap = styled.ul`
  padding: 32px 0;
  > li {
    font-size: 14px;
    color: #666666;
    font-weight: 300;
    padding-left: 20px;
    margin-bottom: 20px;
    position: relative;
    :last-child {
      margin-bottom: 0;
    }
    ::before {
      content: '';
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 3px;
      height: 3px;
      background-color: #666666;
      border-radius: 50%;
    }
  }
`;

const HashTagWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    background-color: #6262EF;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 300;
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      padding: 6px 8px;
    }
  }
`;

const ScrollBox = styled.div`
  width: 100%;
  height: 357px;
  overflow-y: scroll;
  padding: 30px 10px;
  margin-top: 32px;
  margin-bottom: 16px;
  border: 1px solid #E2E2E2;
  border-radius: 8px;
  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    width: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #B7B7B7;
    width: 13px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  > ul {
    counter-reset: my-counter;
    > li {
      font-size: 14px;
      color: #666666;
      ::before {
        counter-increment: my-counter;
        content: counter(my-counter)'.';
      }
      > ul {
        padding: 5px 0 10px 10px;
        > li {
          color: #999999;
          font-weight: 300;
          padding-bottom: 15px;
          
          > p {
            color: #999999;
            font-weight: 400;
            padding-bottom: 5px;
          }
          > span {
            display: flex;
            align-items: center;
            font-weight: 300;
            color: #999999;
            position: relative;
            margin-left: 20px;
            > p {
              font-weight: 400;
              color: #999999;
            }
            &.comment {
              padding-bottom: 13px;
              ::before {
                content: none;
              }
            }
            ::before {
              content: '';
              display: block;
              position: absolute;
              top: 5px;
              left: -20px;
              width: 3px;
              height: 3px;
              background-color: #999999;
              border-radius: 50%;
              margin: 5px 10px;
            }
          }
          table {
            margin: 6px 0;
            th, td {
              padding: 5px 2px;
              border: 1px solid #FAFAFA;
            }
            th {
              background-color: #CEDAEF;
              color: #666666;
              text-align: center;
              vertical-align: middle;
            }
            th:first-child {
              width: 80px;
            }
            td {
              color: #999999;
              font-weight: 300;
            }
          }
          ul {
            margin-left: 23px;
            padding-top: 7px;
            &.dep {
              padding-top: 0;
              > li {
                padding-bottom: 0;
              }
            }
            > li {
              color: #999999;
              padding-bottom: 13px;
              :last-child {
                padding-bottom: 0;
              }
              > p {
                color: #999999;
                font-weight: 300;
              }
            }
          }
        }
      }
    }
  }
`;