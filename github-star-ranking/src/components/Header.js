import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const S = {
  Header: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 16px;
    background-color: #333;
  `,
  Title: styled.h1`
    color: #FFF;
    font-size: ${({ theme }) => theme.typography.pxToRem(18)};
    font-weight: 400;
  `,
  Nav: styled.nav``,
  Heading: styled.h2``,
};

const Header = () => (
  <S.Header>
    <Link to="/">
      <S.Title>Gitstar Ranking</S.Title>
    </Link>
  </S.Header>
);

export default Header;
