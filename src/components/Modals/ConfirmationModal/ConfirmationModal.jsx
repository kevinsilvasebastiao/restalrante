import React from 'react';
import styled from 'styled-components';

const ConfirmationPanel = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background: #e66767;
    color: #ffe9d9;
    padding: 20px;
    box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    text-align: center;
`;

const ConfirmationMessage = styled.h2`
    margin: 50px 0 20px;
`;

const Message = styled.p`
    font-size: 14px;
    line-height: 1.6;
    margin: 20px 0;
    color: #ffe9d9;
    text-align: justify;
`;

const CloseButton = styled.button`
    background-color: #ffe9d9;
    color: #e66767;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #c55c5c;
    }
`;

const ConfirmationModal = ({ show, onClose }) => (
    <ConfirmationPanel show={show}>
        <ConfirmationMessage>Pedido realizado</ConfirmationMessage>
        <Message>
            Estamos felizes em informar que seu pedido já está em processo de preparação e, 
            em breve, será entregue no endereço fornecido.
            <br /><br />
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            <br /><br />
            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            <br /><br />
            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </Message>
        <CloseButton onClick={onClose}>Concluir</CloseButton>
    </ConfirmationPanel>
);

export default ConfirmationModal;
