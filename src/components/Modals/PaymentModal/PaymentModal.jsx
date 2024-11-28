import React from 'react';
import styled from 'styled-components';

// Usando transient prop ($show) para evitar o erro de prop desconhecida
const PaymentPanel = styled.div`
    display: ${({ $show }) => ($show ? 'block' : 'none')}; /* Usando $show aqui */
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

const PaymentHeader = styled.h2`
    color: #ffe9d9;
    margin-bottom: 20px;
`;

const PaymentField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: none;
    border-radius: 5px;
    background: #ffe9d9;
    color: #333;
`;

const PaymentButton = styled.button`
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
// E no componente PaymentModal:
const PaymentModal = ({ show, onClose, onFinalize }) => {
    console.log("show modal pagamento:", show); // Verifique o valor de 'show'
    return (
        <PaymentPanel $show={show}> {/* Usando $show no Styled Component */}
            <PaymentHeader>Pagamento</PaymentHeader>
            <PaymentField type="text" placeholder="Nome no Cartão" />
            <PaymentField type="text" placeholder="Número do Cartão" />
            <PaymentField type="text" placeholder="CVV" />
            <PaymentField type="text" placeholder="Mês de Vencimento" />
            <PaymentField type="text" placeholder="Ano de Vencimento" />
            <PaymentButton onClick={onFinalize}>Finalizar Pagamento</PaymentButton>
            <PaymentButton onClick={onClose}>Fechar</PaymentButton>
        </PaymentPanel>
    );
};

export default PaymentModal;
