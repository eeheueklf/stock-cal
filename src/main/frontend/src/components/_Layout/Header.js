import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderContainer>
            <Title>My Notion Blog</Title>
            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  &:hover {
    color: #007bff;
  }
`;

export default Header;
