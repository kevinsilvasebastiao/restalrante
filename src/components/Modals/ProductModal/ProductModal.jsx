import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #e66767;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1000;
    width: 600px;
    max-width: 90%;
    gap: 20px;
`;

const ModalImage = styled.img`
    width: 200px;
    height: auto;
    border-radius: 8px;
    flex-shrink: 0;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`;

const ModalHeader = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
    color: #ffe9d9;
`;

const ModalDescription = styled.p`
    font-size: 14px;
    color: #ffe9d9;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 20px;
`;

const ModalActions = styled.div`
    display: flex;
    gap: 10px;
    margin-top: auto;
`;

const Button = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:first-child {
        background-color: #ffe9d9;
        color: #e66767;
    }

    &:last-child {
        background-color: #ccc;
        color: black;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const ModalProduto = ({ show, product, onClose, onAddToCart }) => {
    if (!product) return null;

    return (
        <ModalContainer show={show}>
            <ModalImage src={product.image} alt={product.name} />
            <ModalContent>
                <ModalHeader>{product.name}</ModalHeader>
                <ModalDescription>{product.description || 'Descrição indisponível no momento.'}</ModalDescription>
                <ModalActions>
                    <Button onClick={onAddToCart}>Adicionar ao carrinho</Button>
                    <Button onClick={onClose}>Fechar</Button>
                </ModalActions>
            </ModalContent>
        </ModalContainer>
    );
};

export default ModalProduto;
