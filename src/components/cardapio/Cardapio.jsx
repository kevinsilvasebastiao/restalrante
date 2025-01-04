import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import svgLogo from "./logo.svg";
import headerBackground from "./fundo.png";
import ModalProduto from "../Modals/ProductModal/ProductModal";
import CartModal from "../Modals/CartModal/CartModal";
import DeliveryModal from "../Modals/DeliveryModal/DeliveryModal";
import PaymentModal from "../Modals/PaymentModal/PaymentModal";
import ConfirmationModal from '../Modals/ConfirmationModal/ConfirmationModal';


const HeaderBackground = styled.div`
    width: 100%;
    background-image: url(${headerBackground});
    background-size: cover;
    background-position: center;
    position: relative;
    height: 200px;
`;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    height: 100%;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #e66767;
    margin: 0;
    padding: 0 5px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5px;
`;

const CartInfo = styled.div`
    font-size: 18px;
    color: #e66767;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 5px;
    white-space: nowrap;
`;

const Description = styled.p`
    font-size: 16px;
    color: #e66767;
    text-align: center;
    margin: 20px auto;
    max-width: 900px;
`;

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
    justify-items: center;
    max-width: 899px;
    margin: 0 auto;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    width: 250px;
    background: #e66767;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 200px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 10px;
`;

const ProductName = styled.h3`
    font-size: 18px;
    color: #ffe9d9;
`;

const ProductDescription = styled.p`
    font-size: 14px;
    color: #ffe9d9;
    text-align: center;
    line-height: 1.5;
`;

const AddToCartButton = styled.button`
    background-color: #ffe9d9;
    color: #e66767;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    width: 100%;

    &:hover {
        background-color: #c55c5c;
    }
`;

const HeaderAndProducts = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [modalProduct, setModalProduct] = useState(null);
    const [isCartVisible, setCartVisible] = useState(false);
    const [isDeliveryModalVisible, setDeliveryModalVisible] = useState(false);
    const [isPaymentVisible, setPaymentVisible] = useState(false);
    const [isConfirmationVisible, setConfirmationVisible] = useState(false); // Adicionado aqui
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes");
                if (!response.ok) throw new Error("Erro ao carregar os dados");
                const data = await response.json();
                const restaurantData = data.find((item) => item.id.toString() === id);
                setRestaurant(restaurantData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [id]);

    const addToCart = () => {
        if (modalProduct) {
            setCartItems([
                ...cartItems,
                {
                    id: modalProduct.id,
                    image: modalProduct.foto,
                    name: modalProduct.nome,
                    preco: modalProduct.preco,
                },
            ]);
            setModalProduct(null);
        }
    };

    const cartCount = cartItems.length;
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.preco || 0), 0);

    return (
        <>
            <HeaderBackground>
                <HeaderContainer>
                    <Title>{restaurant?.titulo || "Restaurante"}</Title>
                    <LogoContainer>
                        <img src={svgLogo} alt="Logo" />
                    </LogoContainer>
                    <CartInfo onClick={() => setCartVisible(!isCartVisible)}>
                        {cartCount} itens no carrinho
                    </CartInfo>
                </HeaderContainer>
            </HeaderBackground>
            {loading ? (
                <p>Carregando...</p>
            ) : error ? (
                <p>Erro: {error}</p>
            ) : (
                <>
                    <Description>{restaurant?.descricao}</Description>
                    <ProductsContainer>
                        {restaurant?.cardapio.map((product) => (
                            <ProductContainer key={product.id}>
                                <ProductImage src={product.foto} alt={product.nome} />
                                <ProductName>{product.nome}</ProductName>
                                <ProductDescription>{product.descricao}</ProductDescription>
                                <AddToCartButton onClick={() => setModalProduct(product)}>
                                    Adicionar ao carrinho
                                </AddToCartButton>
                            </ProductContainer>
                        ))}
                    </ProductsContainer>
                </>
            )}
            <ModalProduto
                show={!!modalProduct}
                product={{
                    image: modalProduct?.foto,
                    name: modalProduct?.nome,
                    description: modalProduct?.descricao,
                }}
                onClose={() => setModalProduct(null)}
                onAddToCart={addToCart}
            />
            <CartModal
                show={isCartVisible}
                cartItems={cartItems}
                totalPrice={totalPrice}
                onContinue={() => setDeliveryModalVisible(true)}
            />
            <DeliveryModal
                show={isDeliveryModalVisible}
                onClose={() => setDeliveryModalVisible(false)}
                onContinue={() => setPaymentVisible(true)}
            />
            <PaymentModal
                show={isPaymentVisible}
                onClose={() => setPaymentVisible(false)}
                onFinalize={() => {
                    setPaymentVisible(false);
                    setConfirmationVisible(true);
                }}
            />
            <ConfirmationModal
                show={isConfirmationVisible}
                onClose={() => setConfirmationVisible(false)}
            />
        </>
    );
};


export default HeaderAndProducts;
