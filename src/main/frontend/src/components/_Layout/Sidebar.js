import React from 'react';
import styled from 'styled-components';
import image from "../../image/Frame6.png"
import image2 from "../../image/Frame5.png"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <h3>F I R E R E T I R E</h3>
            <ul>
                <li><img src={image} width={"100%"} alt="이미지"/></li>
                <li><img src={image2} width={"100%"} alt="이미지"/></li>


            </ul>
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
    border-right: 1px solid grey;
`;

export default Sidebar;
