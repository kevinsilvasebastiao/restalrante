// Presentation.jsx
import React from 'react';
import styled from 'styled-components';

// Seção de apresentação
import headerBackground from './italiana.png';

const PresentationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${headerBackground});
  background-size: cover;
  background-position: center;
  height: 400px;
  color: #FFE9D9;
  padding: 0 20px;
`;


// Contêiner para o texto
const PresentationTextContainer = styled.div`
  display: flex;
  flex-direction: column;  /* Organiza os textos verticalmente */
  align-items: flex-start;  /* Alinha os textos à esquerda */
  text-align: left;  /* Alinha o texto à esquerda */
  z-index: 1;
  margin-right: 50%;
`;

// Texto "La Dolce Vita"
const ItalianText = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Sombra para destacar o texto */
`;

// Texto "Trattoria"
const RestaurantName = styled.h3`
  font-size: 32px;
  margin-top: 10px;
  font-weight: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); /* Sombra para destacar o texto */
`;

const Presentation = () => {
  return (
    <PresentationSection>
      <PresentationTextContainer>
        <RestaurantName>Italiana</RestaurantName>
        <ItalianText>La Dolce Vita</ItalianText>
      </PresentationTextContainer>
    </PresentationSection>
  );
};

export default Presentation;
