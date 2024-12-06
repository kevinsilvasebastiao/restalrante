    import React from 'react';
    import styled from 'styled-components';

    const CartPanel = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100%;
    background: #e66767;
    padding: 20px;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow-y: auto;
    `;

    const CartItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    background: #ffe9d9;
    padding: 10px;
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

    const CartModal = ({ show, cartItems, onContinue, totalPrice, onItemClick }) => (
        <CartPanel show={show}>
            <h2>Carrinho</h2>
            {cartItems.map((item) => (
                <CartItem key={item.id} onClick={() => onItemClick && onItemClick(item)}>
                    <CartItemImage src={item.image} alt={item.name} />
                    <CartItemName>
                        {item.name} - R${item.preco.toFixed(2)}
                    </CartItemName>
                </CartItem>
            ))}
            <CartTotal>
                Total a pagar: <strong>R${totalPrice.toFixed(2)}</strong>
            </CartTotal>
            <ContinueButton onClick={onContinue}>Continuar com a entrega</ContinueButton>
        </CartPanel>
    );
    
    export default CartModal;
    
