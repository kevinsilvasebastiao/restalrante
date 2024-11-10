import React from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 24px;
    color: #E66767;
`;

const Button = styled.button`
    background-color: #E66767;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
`;

const PaymentPage = () => {
    const handlePayment = () => {
        alert('Pagamento realizado com sucesso!');
    };

    return (
        <PaymentContainer>
            <Title>Pagamento</Title>
            <p>Revise suas informações e finalize o pagamento.</p>
            <Button onClick={handlePayment}>Finalizar Pagamento</Button>
        </PaymentContainer>
    );
};

export default PaymentPage;
