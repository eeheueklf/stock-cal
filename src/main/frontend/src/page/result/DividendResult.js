// components/DividendResult.js

import React from 'react';
import styled from 'styled-components';

const DividendResult = ({ result }) => {
    if (!result) return null;

    return (
        <ResultWrapper>
            <h3>📅 배당 내역</h3>
            <TableScrollWrapper>
                <TableWrapper>
                    <thead>
                    <tr>
                        <th>연도</th>
                        <th>월 or 분기</th>
                        <th>배당금</th>
                        <th>누적 배당금</th>
                        <th>월 환산</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*{result.dividendTable.map((item, index) => (*/}
                    {/*    <tr key={index}>*/}
                    {/*        <td>{item.year}</td>*/}
                    {/*        <td>{item.period}</td>*/}
                    {/*        <td>{item.dividend.toLocaleString()}</td>*/}
                    {/*        <td>{item.cumulativeDividend.toLocaleString()}</td>*/}
                    {/*        <td>{item.monthlyAvgDividend.toLocaleString()}</td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                    </tbody>
                </TableWrapper>
            </TableScrollWrapper>

            <Summary>
                <p>최종 총 투자금 : {result.totalPrincipal} 원</p>
                <p>누적 배당금 : {result.totalDividends} 원</p>
            </Summary>
        </ResultWrapper>
    );
};

const ResultWrapper = styled.div`
    padding: 0px 20px;
    border-radius: 12px;
    background: #f9f9f9;
`;

const TableScrollWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
`;

const TableWrapper = styled.table`
    border-collapse: collapse;
    font-size: 1rem;
    min-width: 720px;
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