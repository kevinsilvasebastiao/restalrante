import React from 'react';
import styled from 'styled-components';
import headerImage from './headerImage.png';

const HeaderContainer = styled.header`
  width: 100%;
  height: 200px;
  background-image: url(${headerImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: 0;
  opacity: 1;

  /* Centraliza e limita a largura do conteúdo */
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
  max-width: 1920px; /* Limita o conteúdo interno para evitar expansão em telas grandes */
  margin: 0 auto;
  padding: 0 20px; /* Adiciona um padding lateral para o conteúdo não encostar nas bordas */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; /* Garante que o conteúdo ocupe toda a altura do header */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContentWrapper>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
