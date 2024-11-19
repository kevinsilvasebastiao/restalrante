import React from 'react';
import styled from 'styled-components';
import Logo from './logo.svg';

const HeaderContainer = styled.header`
  width: 100%;
  height: 200px;
  background-color: #FFEBD9;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: 0;
  opacity: 1;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 384px;
    padding-top: 60px;
  }

  @media (min-width: 1440px) {
    height: 450px;
  }

  @media (min-width: 1920px) {
    height: 500px;
    padding-top: 80px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LogoImage = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

const HeaderText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  color: #E66767;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  @media (min-width: 768px) {
    font-size: 42px;
    line-height: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <LogoImage src={Logo} alt="Logo do Restaurante" />
        <HeaderText>Viva experiências gastronômicas no conforto da sua casa</HeaderText>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
