import React, { useState } from 'react';
import styled from 'styled-components';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <HeaderContainer>
            <SearchInput
                type="text"
                placeholder="검색어를 입력하세요..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    padding: 10px 20px;
    display: flex;
`;

const SearchInput = styled.input`
    background: #F5F5F5;
    width: 100%;
    padding: 11px 20px;
    color : #333333;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    outline: none;
`;


export default Header;
