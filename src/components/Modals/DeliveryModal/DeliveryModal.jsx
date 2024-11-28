import React from 'react';
import styled from 'styled-components';


const DeliveryPanel = styled.div`
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


const DeliveryHeader = styled.h2`
    color: #ffe9d9;
    margin-bottom: 20px;
`;

const DeliveryField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    background: #ffe9d9;
    color: #333;
`;

const DeliveryButton = styled.button`
    background-color: #ffe9d9;
    color: #e66767;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;

    &:hover {
        background-color: #c55c5c;
    }
`;

const DeliveryModal = ({ show, onClose, onContinue }) => (
    <DeliveryPanel show={show}>
        <DeliveryHeader>Dados da Entrega</DeliveryHeader>
        <DeliveryField type="text" placeholder="Quem irá receber" />
        <DeliveryField type="text" placeholder="Endereço" />
        <DeliveryField type="text" placeholder="Cidade" />
        <DeliveryField type="text" placeholder="CEP" />
        <DeliveryField type="text" placeholder="Número" />
        <DeliveryButton onClick={onContinue}>Continuar para pagamento</DeliveryButton>
        <DeliveryButton onClick={onClose}>Voltar para o carrinho</DeliveryButton>
    </DeliveryPanel>
);


export default DeliveryModal;
