    import React from 'react';
    import styled from 'styled-components';
    import headerImage from './headerImage.png'; // Altere para o nome correto da sua imagem

    const HeaderContainer = styled.header`
    width: 100%;
    height: 384px;
    background-image: url(${headerImage});
    background-size: cover;
    background-position: center;
    position: relative;
    top: 0;
    opacity: 1;
    
    @media (min-width: 1024px) {
      padding-top: 60px; /* Espaço maior no topo em telas grandes */
    }
  `;
  


    const Header = () => {
    return <HeaderContainer />;
    };

    export default Header;
