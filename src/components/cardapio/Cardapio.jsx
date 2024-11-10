    import React, { useState } from "react";
    import styled from 'styled-components';
    import svgLogo from './logo.svg';
    import headerBackground from './fundo.png';
    import presentationImage from './apresentacao.png'; // Imagem de apresentação

    const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-image: url(${headerBackground});
    background-size: cover;
    background-position: center;
    `;

    const Title = styled.h1`
    font-size: 24px;
    color: #333;
    `;

    const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    `;

    const CartInfo = styled.div`
    font-size: 18px;
    color: #333;
    cursor: pointer;
    `;

    const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    `;

    const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
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
    border-radius: 5px;

    &:hover {
        background-color: #c55c5c;
    }
    `;

    const ModalContainer = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    z-index: 1000;
    `;

    const ModalContent = styled.div`
    background: #e66767;
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    color: #ffe9d9;
    `;

    const ModalButton = styled.button`
    background-color: #ffe9d9;
    color: #e66767;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
        background-color: #c55c5c;
        color: #fff;
    }
    `;

    const CartPanel = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: #fff;
    padding: 20px;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow-y: auto;
    `;

    const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    `;

    const CartItemImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
    `;

    const CartItemName = styled.span`
    font-size: 16px;
    color: #333;
    `;

    const CartTotal = styled.div`
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    `;

    const ContinueButton = styled.button`
    background-color: #e66767;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 20px;
    `;

    const HeaderAndProducts = () => {
    const [isCartVisible, setCartVisible] = useState(false);
    const [modalProduct, setModalProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [isDeliveryModalVisible, setDeliveryModalVisible] = useState(false);
    const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);
    const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);

    const openModal = (product) => {
        setModalProduct(product);
    };

    const closeModal = () => {
        setModalProduct(null);
    };

    const addToCart = () => {
        setCartItems([...cartItems, modalProduct]);
        setModalProduct(null);
    };

    const openCart = () => {
        setCartVisible(!isCartVisible);
    };

    const openDeliveryModal = () => {
        setCartVisible(false);
        setDeliveryModalVisible(true);
    };

    const closeDeliveryModal = () => {
        setDeliveryModalVisible(false);
        setCartVisible(true);
    };

    const openPaymentModal = () => {
        setDeliveryModalVisible(false);
        setPaymentModalVisible(true);
    };

    const openConfirmationModal = () => {
        setPaymentModalVisible(false);
        setConfirmationModalVisible(true);
    };

    const products = [
        { id: 1, name: 'Pizza Marguerita', price: 30, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita' },
        { id: 2, name: 'Pizza Calabresa', price: 35, image: require('./pizza.png'), shortDescription: 'Sabor marcante de calabresa' },
        { id: 3, name: 'Pizza de Frango com Catupiry', price: 32, image: require('./pizza.png'), shortDescription: 'Frango desfiado com Catupiry' },
        { id: 4, name: 'Pizza Portuguesa', price: 40, image: require('./pizza.png'), shortDescription: 'Presunto, ovos, azeitonas' },
        { id: 5, name: 'Pizza 4 Queijos', price: 38, image: require('./pizza.png'), shortDescription: 'Uma mistura deliciosa de queijos' },
        { id: 6, name: 'Pizza Vegetariana', price: 28, image: require('./pizza.png'), shortDescription: 'Tomate, abobrinha, berinjela' }
    ];

    const cartCount = cartItems.length;
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
        <HeaderContainer>
        <Title>Restaurante</Title>
            <LogoContainer>
            <img src={svgLogo} alt="Logo" />
            </LogoContainer>
            <CartInfo onClick={openCart}>
            {cartCount} itens no carrinho
            </CartInfo>
        </HeaderContainer>

        {/* Seção de apresentação do produto */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={presentationImage} alt="Apresentação do Produto" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            <h2>Explore os nossos produtos</h2>
        </div>

        {/* Exibição dos produtos */}
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

        {/* Modal de Produto */}
        <ModalContainer show={modalProduct}>
            <ModalContent>
            <h2>{modalProduct?.name}</h2>
            <ProductImage src={modalProduct?.image} alt={modalProduct?.name} />
            <p>{modalProduct?.shortDescription}</p>
            <ModalButton onClick={addToCart}>Adicionar ao carrinho</ModalButton>
            <ModalButton onClick={closeModal}>Fechar</ModalButton>
            </ModalContent>
        </ModalContainer>

        {/* Modal de Carrinho */}
        <CartPanel show={isCartVisible}>
            <h2>Carrinho</h2>
            {cartItems.map((item) => (
            <CartItem key={item.id}>
                <CartItemImage src={item.image} alt={item.name} />
                <CartItemName>{item.name}</CartItemName>
            </CartItem>
            ))}
            <CartTotal>Total: R${totalPrice.toFixed(2)}</CartTotal>
            <ContinueButton onClick={openDeliveryModal}>Continuar com a entrega</ContinueButton>
        </CartPanel>

        {/* Modal de Entrega */}
        <ModalContainer show={isDeliveryModalVisible}>
            <ModalContent>
            <h2>Dados da Entrega</h2>
            <input type="text" placeholder="Quem irá receber" />
            <input type="text" placeholder="Endereço" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Número" />
            <ModalButton onClick={openPaymentModal}>Continuar para pagamento</ModalButton>
            <ModalButton onClick={closeDeliveryModal}>Voltar para o carrinho</ModalButton>
            </ModalContent>
        </ModalContainer>

        {/* Modal de Pagamento */}
        <ModalContainer show={isPaymentModalVisible}>
            <ModalContent>
            <h2>Pagamento</h2>
            <p>Total a pagar: R${totalPrice.toFixed(2)}</p>
            <input type="text" placeholder="Nome no cartão" />
            <input type="text" placeholder="Número do cartão" />
            <input type="text" placeholder="CVV" />
            <input type="text" placeholder="Mês de vencimento" />
            <input type="text" placeholder="Ano de vencimento" />
            <ModalButton onClick={openConfirmationModal}>Finalizar pagamento</ModalButton>
            </ModalContent>
        </ModalContainer>

        {/* Modal de Confirmação */}
        <ModalContainer show={isConfirmationModalVisible}>
            <ModalContent>
            <h2>Pagamento Finalizado</h2>
            <p>Seu pagamento foi realizado com sucesso!</p>
            <ModalButton onClick={() => alert('Voltar à página inicial')}>Fechar</ModalButton>
            </ModalContent>
        </ModalContainer>
        </>
    );
    };

    export default HeaderAndProducts;
