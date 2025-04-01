import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Post from '../../page/mainpage/Post';
import styled from 'styled-components';
import "../style.css"

const Index = () => {
    return (
        <LayoutContainer>
            <Wrap>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <ContentContainer>
                <Header />
                <MainContent>
                    <Post />
                </MainContent>
            </ContentContainer>
                <Widget/>
            </Wrap>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div`
    font-family: 'Arial', sans-serif;
    background: #FFF;
    color: #000;
    font-size: 14px;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    display:block;
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
`;

const MainContent = styled.main`
    width: 70%;
`;

const Widget = styled.div`
    display: table-cell;
    width: 305px;
    position: fixed;
    top: 52px;
`

const SidebarContainer = styled.div`
`;

export default Index;
