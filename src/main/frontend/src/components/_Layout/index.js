import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../style.css"
import DividendCalc from '../../page/calc/DividendCalc';
import RetirementCalc from "../../page/calc/RetirementCalc";
import Test from "../../page/calc/test";

const Index = () => {
    return (
        <LayoutContainer>
            <Wrap>
                <Sidebar />
            <ContentContainer>
                <Header />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<DividendCalc />} />
                        <Route path="/retire" element={<RetirementCalc />} />
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </MainContent>
            </ContentContainer>
                <Widget/>
            </Wrap>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    font-family: 'SUIT', sans-serif;
    color: #000;
    font-size: 14px;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    display:block;
    background: #F5F5F5;
`;

const Wrap = styled.div`
    width: 100%;
    max-width: var(--global_width_size);
    margin: 0 auto;
    display: table;
`

const ContentContainer = styled.div`
    display: table-cell;
    position: relative;
    width: calc(var(--global_width_size) - 600px);
    @media screen and (max-width: 1360px)  {
        width: 100%;
        display: block;
        border-right: 0;
    }
`;

const MainContent = styled.main`
    width: 100%;
`;

const Widget = styled.div`
    display: table-cell;
    width: 305px;
    position: fixed;
    top: 52px;
    @media screen and (max-width: 1360px) {
        display:none;
    }
`


export default Index;
