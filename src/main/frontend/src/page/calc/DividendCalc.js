import React from 'react';
import { useState } from "react";
import styled from 'styled-components';
import FormField from "../../components/_Form/FormField";
import InfoItem from "../../components/_Form/InfoItem";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import DividendResult from "../result/DividendResult";


const DividendCalc = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState({
        tax: "과세",
        inflation: "3.0%",
        reinvest: "No",
        dividendGrowth: "8.0%",
        initialInvestment: "0",
        dividendYield: "3.6%",
        monthlyInvestment: "0",
        monthlyIncrease: "0",
        investmentPeriod:"0",
    });

    const optionFields = [
        { label: "초기 투자금", name: "initialInvestment", type: "number" },
        { label: "📊 물가상승률 (인플레이션)", name: "inflation", options: ["2.0%", "2.5%", "3.0%", "3.5%", "4.0%"] },
        { label: "월 적립식 투자금", name: "monthlyInvestment", type: "number" },
        { label: "📈 배당성장률\t", name: "dividendGrowth", options: ["6.0%", "7.0%", "8.0%", "9.0%", "10.0%"] },
        { label: "월 적립식+증액", name: "monthlyIncrease", type: "number" },
        { label: "💸 시가배당률\t", name: "dividendYield", options: ["3.0%", "3.2%", "3.4%", "3.6%", "4.0%"] },
        { label: "투자 기간 (년)", name: "investmentPeriod", type: "number" },
        { label: "🥲 과세여부", name: "tax", options: ["과세", "비과세"] },
        { label: "배당재투자", name: "reinvest", options: ["Yes", "No"] },
    ];

    const infoList1 = [
        { term: "과세여부", description: "미국 직접투자는 과세(직투)를 선택. 세전 배당금에서 15% 공제.", note: "* 비과세 투자의 경우, 인당 투자한도 유의." },
        { term: "배당재투자", description: "배당재투자 여부 선택." },
        { term: "초기 투자금", description: "0개월 차 초기 투자금. (0원~)" },
        { term: "월 적립식 투자금", description: "매월 적립식으로 투자할 금액. (0원~)" },
        { term: "월 적립식+증액", description: "매년 월 적립식 투자금에서 늘려나갈 금액.", note: "(예: 매년 10만원씩 증가하면 100,000 입력)" }
    ];

    const infoList2 = [
        { term: "📊 물가상승률(=소비자물가지수)", description: "최근 10년 평균 2.4% (소비자물가지수). 보수적으로 3~4% 설정 권장.", link: "https://cafe.naver.com/divclub/834" },
        { term: "📈 배당성장률(=YoY배당성장)", description: "SCHD 기준 6~12% (JEPI 등 커버드콜은 0~1%)", link: "https://www.youtube.com/watch?v=POpZjewlc80" },
        { term: "💸 시가배당률(=배당금/주가)", description: "SCHD 기준 3% 내외 (JEPI 6~10%). 시간이 지나도 일정한 수준 유지.", note: "* 투자원금 대비 배당수익률과는 다름." },
    ];

    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOptions({ ...options, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // 폼 제출 방지

        const payload = {
            tax: options.tax,
            inflation: parseFloat(options.inflation),
            reinvest: options.reinvest === "Yes",
            dividendGrowth: parseFloat(options.dividendGrowth),
            initialInvestment: parseFloat(options.initialInvestment),
            dividendYield: parseFloat(options.dividendYield),
            monthlyInvestment: parseFloat(options.monthlyInvestment),
            monthlyIncrease: parseFloat(options.monthlyIncrease),
            investmentPeriod: parseInt(options.investmentPeriod),
        };

        try {
            const res = await axios.post("http://localhost:8080/api/dividend", payload, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            console.log("Payload:", payload);
            console.log("Response:", res.data);
            setResult(res.data)
            // 성공 후 처리할 로직이 있으면 여기에
        } catch (err) {
            console.error("Axios POST error:", err);
        }
    };



    return (
        <PostContainer>
            <PostTitle>배당금 재투자 계산기</PostTitle>
            <PostContent>
                <OptionsGrid>
                    {optionFields.map((field, index) => (
                        <FormField
                            key={index}
                            label={field.label}
                            name={field.name}
                            value={options[field.name]}
                            onChange={handleChange}
                            options={field.options}
                            type={field.type}
                        />
                    ))}
                    <ButtonWrap>
                        <Button onClick={handleSubmit}>계산하기</Button>
                    </ButtonWrap>
                </OptionsGrid>
                <ContentWrapper>
                    {result ? (
                        <DividendResult result={result} />
                    ) :
                    (
                        <>
                            <Section>
                                <InfoItem items={infoList1} />
                            </Section>
                            <Section>
                                <InfoItem items={infoList2} />
                            </Section>
                        </>
                    )}
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



const ButtonWrap = styled.div`
    text-align: right;
`

const Button = styled.button`
    background: #007bff;
    color: white;
    font-weight: bold;
    padding: 10px 19px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    }

`

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 그리드 */
  gap: 15px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 8px;
`;



export default DividendCalc;
