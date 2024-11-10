import React from 'react';
import styled from 'styled-components';
import footerImage from './footerImage.png'; 
const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: #f5f5f5; /* Cor de fundo opcional */
`;

const FooterImage = styled.img`
    max-width: 100%;
    height: auto;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterImage src={footerImage} alt="Rodapé" />
        </FooterContainer>
    );
};

export default Footer;
