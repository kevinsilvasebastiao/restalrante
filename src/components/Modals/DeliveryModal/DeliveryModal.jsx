import React, { useState } from 'react';
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

  &:invalid {
    border: 2px solid #ff4d4d;
  }
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

  &:disabled {
    background-color: #ffe9d9;
    color: #999;
    cursor: not-allowed;
  }
`;

const DeliveryModal = ({ show, onClose, onContinue }) => {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    zip: '',
    number: '',
  });

  const [isFormValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Check if all fields are filled
    const allFieldsFilled = Object.values(updatedFormData).every((field) => field.trim() !== '');
    setFormValid(allFieldsFilled);
  };

  return (
    <DeliveryPanel show={show}>
      <DeliveryHeader>Dados da Entrega</DeliveryHeader>
      <DeliveryField
        type="text"
        name="recipient"
        placeholder="Quem irá receber"
        value={formData.recipient}
        onChange={handleChange}
      />
      <DeliveryField
        type="text"
        name="address"
        placeholder="Endereço"
        value={formData.address}
        onChange={handleChange}
      />
      <DeliveryField
        type="text"
        name="city"
        placeholder="Cidade"
        value={formData.city}
        onChange={handleChange}
      />
      <DeliveryField
        type="text"
        name="zip"
        placeholder="CEP"
        value={formData.zip}
        onChange={handleChange}
      />
      <DeliveryField
        type="text"
        name="number"
        placeholder="Número"
        value={formData.number}
        onChange={handleChange}
      />
      <DeliveryButton disabled={!isFormValid} onClick={onContinue}>
        Continuar para pagamento
      </DeliveryButton>
      <DeliveryButton onClick={onClose}>Voltar para o carrinho</DeliveryButton>
    </DeliveryPanel>
  );
};

export default DeliveryModal;
