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
    top: -24px; 
    opacity: 1; 
    `;

    const Header = () => {
    return <HeaderContainer />;
    };

    export default Header;
