    import styled from 'styled-components';
    import LogoPng from './logo.png';  // novo logo em PNG
    import PngIcon1 from './Group.png';
    import PngIcon2 from './instagram.png';
    import PngIcon3 from './facebook.png';

    const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFEBD9;
    padding: 20px;
    `;

    const IconsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0;
    `;

    const FooterText = styled.p`
    color: #E66767;
    font-size: 1.2em;
    text-align: center;
    max-width: 600px;
    `;

    const IconImage = styled.img`
    width: 24px;
    height: 24px;
    `;

    export default function Footer() {
    return (
        <FooterContainer>
        <img src={LogoPng} alt="Logo" /> {/* Usando o logo PNG */}
        <IconsContainer>
            <IconImage src={PngIcon1} alt="Ícone Grupo" />
            <IconImage src={PngIcon2} alt="Ícone Instagram" />
            <IconImage src={PngIcon3} alt="Ícone Facebook" />
        </IconsContainer>
        <FooterText>
            A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega e qualidade dos produtos é toda do estabelecimento contratado.
        </FooterText>
        </FooterContainer>
    );
    }
