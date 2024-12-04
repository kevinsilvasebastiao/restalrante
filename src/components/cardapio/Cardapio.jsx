import React, { useState } from "react";
import styled from 'styled-components';
import svgLogo from './logo.svg';
import headerBackground from './fundo.png';
import Presentation from './apresentacao/apresen';
import ModalProduto from "../Modals/ProductModal/ProductModal";
import CartModal from "../Modals/CartModal/CartModal";
import DeliveryModal from "../Modals/DeliveryModal/DeliveryModal";
import PaymentModal from "../Modals/PaymentModal/PaymentModal";
import ConfirmationModal from "../Modals/ConfirmationModal/ConfirmationModal";

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
    width: 50%;
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
    overflow: hidden;
    white-space: nowrap;
`;

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 10px;
    justify-items: center;
    width: 100%;
    max-width: 899px;
    margin: 0 auto;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
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
    const [isCartVisible, setCartVisible] = useState(false);
    const [isDeliveryModalVisible, setDeliveryModalVisible] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isPaymentVisible, setPaymentVisible] = useState(false);

    const openModal = (product) => {
        setModalProduct(product);
    };

    const closeModal = () => {
        setModalProduct(null);
    };

    const openCart = () => {
        setCartVisible(!isCartVisible);
    };

    const addToCart = () => {
        if (modalProduct) {
            setCartItems([...cartItems, modalProduct]);
        }
        setModalProduct(null);
    };

    const onItemClick = (item) => {
        openModal(item); // Abrir o modal para o item clicado
    };

    const handleContinueWithDelivery = () => {
        setCartVisible(false); // Fecha o carrinho
        setDeliveryModalVisible(true); // Abre o modal de entrega
    };

    const handleCloseDeliveryModal = () => {
        setDeliveryModalVisible(false); // Fecha o modal de entrega
        setCartVisible(true); // Reabre o carrinho
    };

    const handleProceedToPayment = () => {
        setDeliveryModalVisible(false);  // Fecha o modal de entrega
        setPaymentVisible(true);  // Abre o modal de pagamento
    };

    const [isConfirmationVisible, setConfirmationVisible] = useState(false);

    const handleFinalizePayment = () => {
        setPaymentVisible(false); // Fecha o modal de pagamento
        setConfirmationVisible(true); // Abre o modal de confirmação
    };

    const handleCloseConfirmation = () => {
        setConfirmationVisible(false); // Fecha o modal de confirmação
    };

    const products = [
        { 
            id: 1, 
            name: 'Pizza Marguerita', 
            price: 30, 
            image: require('./pizza.png'), 
            shortDescription: 'A clássica Marguerita', 
            description: 'Uma pizza saborosa feita com molho de tomate, manjericão fresco e queijo mussarela de alta qualidade.' 
        },
        { 
            id: 2, 
            name: 'Pizza Quatro Queijos', 
            price: 35, 
            image: require('./pizza.png'), 
            shortDescription: 'A favorita dos amantes de queijo', 
            description: 'Uma combinação irresistível de queijo mussarela, parmesão, gorgonzola e provolone.' 
        },
        { 
            id: 3, 
            name: 'Pizza Portuguesa', 
            price: 40, 
            image: require('./pizza.png'), 
            shortDescription: 'Tradicional e deliciosa', 
            description: 'Pizza com presunto, ovos, cebolas, azeitonas e um toque especial de orégano.' 
        },
        { 
            id: 4, 
            name: 'Pizza Pepperoni', 
            price: 38, 
            image: require('./pizza.png'), 
            shortDescription: 'Sabor marcante e picante', 
            description: 'Coberta com fatias de pepperoni, queijo mussarela e um toque de pimenta.' 
        },
        { 
            id: 5, 
            name: 'Pizza Vegetariana', 
            price: 32, 
            image: require('./pizza.png'), 
            shortDescription: 'Opção leve e saudável', 
            description: 'Repleta de vegetais frescos como tomate, pimentão, cebola e azeitonas, combinados com queijo mussarela.' 
        },
        { 
            id: 6, 
            name: 'Pizza Frango com Catupiry', 
            price: 36, 
            image: require('./pizza.png'), 
            shortDescription: 'Clássico dos sabores brasileiros', 
            description: 'Pizza com suculentos pedaços de frango desfiado e um toque cremoso de catupiry.' 
        },
    ];
    

    const cartCount = cartItems.length;
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <HeaderBackground>
                <HeaderContainer>
                    <Title>Restaurante</Title>
                    <LogoContainer>
                        <img src={svgLogo} alt="Logo" />
                    </LogoContainer>
                    <CartInfo onClick={openCart}>
                        {cartCount} itens no carrinho
                    </CartInfo>
                </HeaderContainer>
            </HeaderBackground>

            <Presentation />

            <ProductsContainer>
                {products.map((product) => (
                    <ProductContainer key={product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductName>{product.name}</ProductName>
                        <ProductDescription>{product.shortDescription}</ProductDescription>
                        <AddToCartButton onClick={() => openModal(product)}>Adicionar ao carrinho</AddToCartButton>
                    </ProductContainer>
                ))}
            </ProductsContainer>

            {/* Modal do produto */}
            <ModalProduto
                show={!!modalProduct}
                product={modalProduct}
                onClose={closeModal}
                onAddToCart={addToCart}
            />

            {/* CartModal */}
            <CartModal
                show={isCartVisible}
                cartItems={cartItems}
                onContinue={handleContinueWithDelivery}
                totalPrice={totalPrice}
                onItemClick={onItemClick}
            />
            
            {/* DeliveryModal */}
            <DeliveryModal
                show={isDeliveryModalVisible}
                onClose={handleCloseDeliveryModal}
                onContinue={handleProceedToPayment}
            />        

            {/* PaymentModal */}
            <PaymentModal
                show={isPaymentVisible}
                onClose={() => setPaymentVisible(false)}
                onFinalize={handleFinalizePayment}
            />

            {/* ConfirmationModal */}
            <ConfirmationModal 
                show={isConfirmationVisible} 
                onClose={handleCloseConfirmation} 
            />
        </>
    );
};

export default HeaderAndProducts;
