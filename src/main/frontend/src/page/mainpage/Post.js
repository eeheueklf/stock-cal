import React from 'react';
import { useState } from "react";
import styled from 'styled-components';


const Post = () => {
    const [options, setOptions] = useState({
        tax: "과세(직투)",
        inflation: "3.0%",
        reinvest: "No",
        dividendGrowth: "8.0%",
        initialInvestment: "100,000",
        dividendYield: "3.6%",
        monthlyInvestment: "420,000",
        dividendCycle: "분기",
        monthlyIncrease: "0"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOptions({ ...options, [name]: value });
    };
    return (
        <PostContainer>
            <PostTitle>배당금 재투자 계산기</PostTitle>
            <PostContent>
                <OptionsGrid>
                    <OptionItem>
                        <Label>과세여부</Label>
                        <Select name="tax" value={options.tax} onChange={handleChange}>
                            <option value="과세(직투)">과세(직투)</option>
                            <option value="비과세">비과세</option>
                        </Select>
                    </OptionItem>
                    <OptionItem>
                        <Label>물가상승률</Label>
                        <Select name="inflation" value={options.inflation} onChange={handleChange}>
                            <option value="2.0%">2.0%</option>
                            <option value="2.5%">2.5%</option>
                            <option value="3.0%">3.0%</option>
                            <option value="3.5%">3.5%</option>
                            <option value="4.0%">4.0%</option>
                        </Select>
                    </OptionItem>
                    <OptionItem>
                        <Label>배당재투자</Label>
                        <Select name="reinvest" value={options.reinvest} onChange={handleChange}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>
                    </OptionItem>
                    <OptionItem>
                        <Label>배당성장률</Label>
                        <Select name="dividendGrowth" value={options.dividendGrowth} onChange={handleChange}>
                            <option value="6.0%">6.0%</option>
                            <option value="7.0%">7.0%</option>
                            <option value="8.0%">8.0%</option>
                            <option value="9.0%">9.0%</option>
                            <option value="10.0%">10.0%</option>
                        </Select>
                    </OptionItem>
                    <OptionItem>
                        <Label>초기 투자금</Label>
                        <Input type="number" name="initialInvestment" value={options.initialInvestment} onChange={handleChange} />
                    </OptionItem>
                    <OptionItem>
                        <Label>시가배당률</Label>
                        <Select name="dividendYield" value={options.dividendYield} onChange={handleChange}>
                            <option value="3.0%">3.0%</option>
                            <option value="3.2%">3.2%</option>
                            <option value="3.4%">3.4%</option>
                            <option value="3.6%">3.6%</option>
                            <option value="4.0%">4.0%</option>
                        </Select>
                    </OptionItem>
                    <OptionItem>
                        <Label>월 적립식 투자금</Label>
                        <Input type="number" name="monthlyInvestment" value={options.monthlyInvestment} onChange={handleChange} />
                    </OptionItem>
                    <OptionItem>
                        <Label>배당주기</Label>
                        <Select name="dividendCycle" value={options.dividendCycle} onChange={handleChange}>
                            <option value="월">월</option>
                            <option value="분기">분기</option>
                        </Select>
                    </OptionItem>
                    <OptionItem>
                        <Label>월 적립식+증액</Label>
                        <Input type="number" name="monthlyIncrease" value={options.monthlyIncrease} onChange={handleChange} />
                    </OptionItem>
                    <button>계산하기</button>
                </OptionsGrid>
                <ContentWrapper>
                    <Section>
                        <DefinitionList>
                            <DefinitionItem>
                                <Term>과세여부</Term>
                                <Description>미국직접투자의 경우, 과세(직투) 선택. 세전 배당금에서 15% 공제. 연저펀 등 비과세 투자의 경우, 비과세 선택.</Description>
                                <Note>* 비과세 투자의 경우, 인당 투자한도 유의.</Note>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>배당재투자</Term>
                                <Description>배당재투자 여부 선택.</Description>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>초기 투자금</Term>
                                <Description>0개월 차 초기 투자금. (0원~)</Description>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>월 적립식 투자금</Term>
                                <Description>매월 적립식으로 투자할 금액. (0원~)</Description>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>월 적립식+증액</Term>
                                <Description>매년 월 적립식 투자금에서 늘려나갈 금액. (ex: 매년 10만원씩 늘릴 예정이라면, 100,000 입력)</Description>
                            </DefinitionItem>
                        </DefinitionList>
                    </Section>

                    <Section>
                        <DefinitionList>
                            <DefinitionItem>
                                <Term>물가상승률(=소비자물가지수)</Term>
                                <Description>최근 10년 물가상승률은 평균 2.4% (소비자물가지수). 보수적으로 3~4%를 설정</Description>
                                <Link href="https://cafe.naver.com/divclub/834">참고 링크</Link>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>배당성장률(=YoY배당성장)</Term>
                                <Description>SCHD 기준 6~12% (JEPI 등 커버드콜은 0~1%). 배당성장률에 따라 주가상승률 동일.</Description>
                                <Link href="https://www.youtube.com/watch?v=POpZjewlc80">관련 영상</Link>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>시가배당률(=배당금/주가)</Term>
                                <Description>SCHD 기준 3% 내외 (JEPI 6~10%). 시간이 지나도 일정한 수준 유지.</Description>
                                <Note>* 투자원금 대비 배당수익률과는 다름.</Note>
                            </DefinitionItem>
                            <DefinitionItem>
                                <Term>배당주기</Term>
                                <Description>SCHD 분기배당 / JEPI 월 배당. 각 상품에 따라 분기/월 설정.</Description>
                            </DefinitionItem>
                        </DefinitionList>
                    </Section>
                </ContentWrapper>
            </PostContent>
        </PostContainer>
    );
};

const PostContainer = styled.article`
    max-width: 800px;
    margin: 0 auto;
    padding-left: 20px;
`;

const PostTitle = styled.h2`
    font-size: 2.5rem;
    color: #333;
    font-family: "Hanna", sans-serif;
`;


const PostContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* 섹션 사이 여백 균등 */
  gap: 20px; /* 섹션 간격 */
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column; /* 화면이 작으면 세로로 배치 */
  }
`;

const Section = styled.section`
  flex: 1; /* 두 섹션이 같은 비율로 공간 차지 */
  padding: 0 15px;
  background: #f9f9f9;
  border-radius: 8px;
  min-width: 300px; /* 너무 좁아지지 않도록 */
`;


const DefinitionList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DefinitionItem = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Term = styled.dt`
  font-weight: bold;
  font-size: 1rem;
  color: #222;
`;

const Description = styled.dd`
  margin-left: 0;
  font-size: 0.8rem;
  color: #555;
`;

const Link = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Note = styled.p`
  font-size: 0.8rem;
  color: #888;
    margin : 0;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 그리드 */
  gap: 15px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  //background: white;
  //border-radius: 6px;
  //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
  font-weight: bold;
    font-size: 0.9rem;
  color: #333;
`;

const Value = styled.span`
  color: #007bff;
`;
const Select = styled.select`
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  background: #f9f9f9;
  cursor: pointer;
    font-family: 'SUIT', sans-serif;
`;

const Input = styled.input`
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100px;
    color: #404040;
`;

export default Post;
