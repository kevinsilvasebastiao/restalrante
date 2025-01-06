import React, { useState } from 'react';
import styled from 'styled-components';

const PaymentPanel = styled.div`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
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

  &:invalid {
    border: 2px solid #ff4d4d;
  }
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

  &:disabled {
    background-color: #ffe9d9;
    color: #999;
    cursor: not-allowed;
  }
`;

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

const OrderId = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ffe9d9;
  margin: 20px 0;
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

const PaymentModal = ({ show, onClose, onFinalize }) => {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    expMonth: '',
    expYear: '',
  });

  const [isFormValid, setFormValid] = useState(false);
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    const allFieldsFilled = Object.values(updatedFormData).every((field) => field.trim() !== '');
    setFormValid(allFieldsFilled);
  };

  const handleFinalize = async () => {
    try {
      const requestBody = {
        products: [
          {
            id: 1,
            price: 0,
          },
        ],
        delivery: {
          receiver: "Nome do destinatário",
          address: {
            description: "Endereço de entrega",
            city: "Cidade",
            zipCode: "CEP",
            number: 12,
            complement: "Complemento",
          },
        },
        payment: {
          card: {
            name: formData.cardName,
            number: formData.cardNumber,
            code: parseInt(formData.cvv, 10),
            expires: {
              month: parseInt(formData.expMonth, 10),
              year: parseInt(formData.expYear, 10),
            },
          },
        },
      };

      const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Erro ao processar o pagamento');
      }

      const data = await response.json();
      setOrderId(data.orderId);
      setOrderConfirmed(true);
      console.log('Resposta da API:', data);
      onClose();
    } catch (error) {
      alert('Erro ao realizar o pagamento: ' + error.message);
    }
  };

  return (
    <>
      <PaymentPanel $show={show}>
        <PaymentHeader>Pagamento</PaymentHeader>
        <PaymentField
          type="text"
          name="cardName"
          placeholder="Nome no Cartão"
          value={formData.cardName}
          onChange={handleChange}
        />
        <PaymentField
          type="text"
          name="cardNumber"
          placeholder="Número do Cartão"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        <PaymentField
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
        />
        <PaymentField
          type="text"
          name="expMonth"
          placeholder="Mês de Vencimento"
          value={formData.expMonth}
          onChange={handleChange}
        />
        <PaymentField
          type="text"
          name="expYear"
          placeholder="Ano de Vencimento"
          value={formData.expYear}
          onChange={handleChange}
        />
        <PaymentButton disabled={!isFormValid} onClick={handleFinalize}>
          Finalizar Pagamento
        </PaymentButton>
        <PaymentButton onClick={onClose}>Fechar</PaymentButton>
      </PaymentPanel>

      {/* Tela de confirmação do pedido */}
      <ConfirmationPanel show={isOrderConfirmed}>
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
        <OrderId>Seu número de pedido: {orderId}</OrderId>
        <CloseButton onClick={() => { setOrderConfirmed(false); onFinalize(); }}>
          Concluir
        </CloseButton>
      </ConfirmationPanel>
    </>
  );
};

export default PaymentModal;
