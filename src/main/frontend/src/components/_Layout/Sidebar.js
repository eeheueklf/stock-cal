import React from 'react';
import styled from 'styled-components';
import image from "../../image/Frame6.png"
import image2 from "../../image/Frame5.png"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <SidebarContainer>
            <StyledUl>
                <SideLi onClick={() => navigate("/retire")} style={{ cursor: "pointer" }}>
                    <StyledImage src={image} width={"100%"} alt="노후자금 계산하기" />
                </SideLi>
                <SideLi onClick={() => navigate("/dividend")} style={{ cursor: "pointer" }}>
                    <StyledImage src={image2} width={"100%"} alt="배당금 재투자 계산기" />
                </SideLi>
                <SideLi onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <StyledImage src={image2} width={"100%"} alt="배당금 재투자 계산기" />
                </SideLi>

            </StyledUl>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.aside`
    display: table-cell;
    width: 280px;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    z-index: 1;
    padding-right: 20px;
    //border-right: 1px solid grey;
    @media screen and (max-width: 1360px) {
        display:none;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
`

const SideLi = styled.li`
    margin : 20px 0px;
    cursor:pointer;
`

const StyledImage = styled.img`
    width: 100%;
    border-radius:8px;
    display: block;
`;

export default Sidebar;
