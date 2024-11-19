        import React, { useState } from "react";
        import styled from 'styled-components';
        import svgLogo from './logo.svg';
        import headerBackground from './fundo.png';
        import Presentation from './apresentacao/apresen'

        const HeaderBackground = styled.div`
        width: 100%;
        background-image: url(${headerBackground});
        background-size: cover;
        background-position: center;
        position: relative;
        height: 200px; /* Altura do header */
    `;
    
    const HeaderContainer = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        width: 50%;
        max-width: 1440px; /* Limita o tamanho máximo do conteúdo */
        margin: 0 auto; /* Centraliza o conteúdo do header */
        box-sizing: border-box;
        height: 100%; /* Garante que ocupe toda a altura do HeaderBackground */
    `;

    
    const Title = styled.h1`
        font-size: 24px;
        color: #e66767;
        margin: 0;
        padding: 0 5px; /* Pequeno padding para evitar encostarem nas bordas */
    `;
    
    const LogoContainer = styled.div`
        display: flex;
        align-items: center;
        margin-right: 5px; /* Mantém a logo próxima ao título */
    `;
    
    const CartInfo = styled.div`
        font-size: 18px;
        color: #e66767;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 5px; /* Pequeno padding para manter um espaçamento consistente */
        overflow: hidden;
        white-space: nowrap; /* Mantém o conteúdo numa única linha */
    `;
    

    const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 10px;
    justify-items: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
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
        width: 100%;

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
    background-color: #ffe9d9;
    color: #e66767;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;

    &:hover {
        background-color: #c55c5c;
    }
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
            { id: 1, name: 'Pizza Marguerita', price: 30, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
            { id: 2, name: 'Pizza Marguerita', price: 35, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
            { id: 3, name: 'Pizza Marguerita', price: 32, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
            { id: 4, name: 'Pizza Marguerita', price: 40, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
            { id: 5, name: 'Pizza Marguerita', price: 38, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
            { id: 6, name: 'Pizza Marguerita', price: 28, image: require('./pizza.png'), shortDescription: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' }
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

            {/* Inserindo o componente Presentation aqui */}
            <Presentation />

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
                <h2>Pedido realizado</h2>
                <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.

Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 

Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.

Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                <ModalButton onClick={() => alert('Voltar à página inicial')}>Concluir</ModalButton>
                </ModalContent>
            </ModalContainer>
            </>
        );
        };

        export default HeaderAndProducts;
