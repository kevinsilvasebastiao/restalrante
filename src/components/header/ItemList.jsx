import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';

const ItemListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Duas colunas */
    gap: 10px; /* Ajuste o gap entre os itens */
    justify-items: center;
    padding: 10px;
    color: #E66767;
    max-width: 650px; /* Largura de 47% */
    margin: 0 auto; /* Centraliza o contêiner */
`;


const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 250px;
    overflow: hidden;
    position: relative;
`;

const BadgeContainer = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
    z-index: 1;
`;

const BadgeButton = styled.div`
    background-color: #E66767;
    color: white;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
`;

const ItemImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 472px;
    max-height: 217px;
    border-radius: 8px;
    object-fit: cover;
`;

const ItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
`;

const ItemName = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #E66767;
    margin: 0;
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
`;

const StarImage = styled.img`
    width: 20px;
    height: auto;
    margin-left: 5px;
`;

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
    const navigate = useNavigate();

    const items = [
        {
            id: 1,
            image: require('./imagem.png'),
            name: 'Hioki Sushi',
            rating: '4.9',
            description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        },
        {
            id: 2,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },{
            id: 3,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },{
            id: 4,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },{
            id: 5,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },{
            id: 6,
            image: require('./macarrao.png'),
            name: 'La Dolce Vita Trattoria',
            rating: '4.6',
            description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        },
    ];

    return (
        <div>
            <Header />
            <ItemListContainer>
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
                        <MoreButton onClick={() => navigate(`/cardapio/${item.id}`)}>Saiba mais</MoreButton>
                    </ItemContainer>
                ))}
            </ItemListContainer>
        </div>
    );
};

export default ItemList;
