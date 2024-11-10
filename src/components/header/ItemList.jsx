// src/components/header/ItemList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';

// Estilizando o contêiner da lista
const ItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

// Estilizando cada item da lista
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: 300px;
    overflow: hidden;
    position: relative;
`;

// Contêiner para os botões sobre a imagem
const BadgeContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px; /* Espaço entre os botões */
    z-index: 1;
`;

// Estilizando cada botão de destaque/categoria
const BadgeButton = styled.div`
    background-color: #E66767;
    color: white;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
`;

// Estilizando a imagem do item
const ItemImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 472px;
    max-height: 217px;
    border-radius: 8px;
    object-fit: cover;
`;

// Estilizando o cabeçalho com nome e nota
const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
`;

// Estilizando o nome do prato
const ItemName = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #E66767;
    margin: 0;
`;

// Estilizando a nota
const RatingContainer = styled.div`
    display: flex;
    align-items: center;
`;

// Estilizando a estrela
const StarImage = styled.img`
    width: 20px;
    height: auto;
    margin-left: 5px;
`;

// Estilizando o botão
const MoreButton = styled.button`
    background-color: #E66767;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    align-self: flex-start;

    &:hover {
        background-color: #c55c5c;
    }
`;

const ItemList = () => {
    const navigate = useNavigate(); // Hook para navegação

    const items = [
        {
            id: 1,
            image: require('./imagem.png'),
            name: 'Hioki Sushi',
            rating: '4.9',
            description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        },
        {
            id: 2,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },
        {
            id: 3,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },
        {
            id: 4,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },
        {
            id: 5,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },
        {
            id: 6,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },
    ];

    return (
        <ItemListContainer>
            <Header />
            {items.map(item => (
                <ItemContainer key={item.id}>
                    <BadgeContainer>
                        {item.id === 1 && <BadgeButton>Destaque da Semana</BadgeButton>}
                        <BadgeButton>{item.id === 1 ? 'Japonesa' : 'Italiano'}</BadgeButton>
                    </BadgeContainer>
                    <ItemImage src={item.image} alt={`Imagem do ${item.name}`} />
                    <ItemHeader>
                        <ItemName>{item.name}</ItemName>
                        <RatingContainer>
                            <span>{item.rating}</span>
                            <StarImage src={require('./estrela.png')} alt="Estrela" />
                        </RatingContainer>
                    </ItemHeader>
                    <p>{item.description}</p>
                    {/* Adicionando funcionalidade de redirecionamento no botão */}
                    <MoreButton onClick={() => navigate(`/cardapio/${item.id}`)}>Saiba mais</MoreButton>
                </ItemContainer>
            ))}
        </ItemListContainer>
    );
};

export default ItemList;
