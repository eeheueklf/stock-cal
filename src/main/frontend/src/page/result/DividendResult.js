// components/DividendResult.js

import React from 'react';
import styled from 'styled-components';

const DividendResult = ({ result }) => {
    if (!result) return null;

    return (
        <ResultWrapper>
            <h3>📊 배당 계산 결과</h3>
            <TableScrollWrapper>
            <TableWrapper>
                <thead>
                <tr>
                    <th>연차</th>
                    <th>투자원금</th>
                    <th>연간 배당금</th>
                    <th>배당률 (%)</th>
                    <th>주가 수익</th>
                    <th>연간 추가</th>
                    <th>총 평가액</th>
                    <th>누적 배당</th>
                </tr>
                </thead>
                <tbody>
                {result.yearlyResults.map((year, index) => (
                    <tr key={index}>
                        <td>{year.year}</td>
                        <td>{year.investedAmount.toLocaleString()}</td>
                        <td>{year.annualDividend.toLocaleString()}</td>
                        <td>{Number(year.dividendRate).toFixed(2)}</td>
                        <td>{year.priceGrowth.toLocaleString()}</td>
                        <td>{year.yearlyAddition.toLocaleString()}</td>
                        <td>{year.totalValue.toLocaleString()}</td>
                        <td>{year.accumulatedDividend.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </TableWrapper>
            </TableScrollWrapper>
            <Summary>
                <p>최종 총 투자금 : {result.totalInvestment.toLocaleString()} 원</p>
                <p>누적 배당금 : {result.totalDividends.toLocaleString()} 원</p>
            </Summary>
        </ResultWrapper>
    );
};


// 스타일 컴포넌트 (원래 있던 것 쓰면 돼)
const ResultWrapper = styled.div`
    padding: 0px 20px;
    border-radius: 12px;
    background: #f9f9f9;
    //width : 100%;
`;

const TableScrollWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableWrapper = styled.table`
    border-collapse: collapse;
    font-size: 1rem;
    min-width: 660px; /* 표 최소 너비 */
    width: 100%;

    th, td {
        border: 1px solid #ddd;
        padding: 8px 12px;
        text-align: left;
        white-space: nowrap;
        max-width: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.7rem;
    }

    th {
        background-color: #f0f8ff;
        color: #333;
        font-weight: 600;
    }

    tr:nth-child(even) {
        background-color: #fafafa;
    }

    tr:hover {
        background-color: #f1f1f1;
    }
`;



const Summary = styled.div`
    margin-top: 20px;
    font-size: 0.9rem;
    font-weight: bold;
`;


export default DividendResult;