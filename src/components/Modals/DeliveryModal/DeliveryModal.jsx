import React, { useState } from 'react';
import styled from 'styled-components';

const DeliveryPanel = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  width: 342px;
  height: 100%;
  background: #e66767;
  padding: 20px;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow-y: auto;
  box-sizing: border-box; /* Garante que padding não expanda o tamanho */
`;

const DeliveryHeader = styled.h2`
  color: #ffe9d9;
  margin-bottom: 20px;
`;

const DeliveryField = styled.input`
  width: 93%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  background: #ffe9d9;
  color: #333;

  &:invalid {
    border: 2px solid #ff4d4d;
  }
`;

const DeliveryFieldRow = styled.div`
  display: flex;
  gap: 10px; /* Espaço entre os campos */
  margin-bottom: 15px;
`;

const HalfWidthField = styled(DeliveryField)`
  width: calc(50% - 5px); /* Ajusta largura para caber lado a lado */
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
// Estilo dos labels
const DeliveryLabel = styled.label`
  display: block;
  color: #FFF8F2;
  font-size: 14px;
  margin-bottom: 5px;
`;

// Atualização do componente DeliveryModal
const DeliveryModal = ({ show, onClose, onContinue }) => {
  const [formData, setFormData] = useState({
    recipient: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    complement: '', // Novo campo para complemento
  });

  const [isFormValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Verificar se os campos obrigatórios estão preenchidos
    const requiredFields = ['recipient', 'address', 'city', 'zip', 'number'];
    const allFieldsFilled = requiredFields.every((field) => updatedFormData[field].trim() !== '');
    setFormValid(allFieldsFilled);
  };

  return (
    <DeliveryPanel show={show}>
      <DeliveryHeader>Dados da Entrega</DeliveryHeader>

      <div>
        <DeliveryLabel>Quem irá receber</DeliveryLabel>
        <DeliveryField
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
      </div>

      <div>
        <DeliveryLabel>Endereço</DeliveryLabel>
        <DeliveryField
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div>
        <DeliveryLabel>Cidade</DeliveryLabel>
        <DeliveryField
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <DeliveryFieldRow>
        <div style={{ width: '48%' }}>
          <DeliveryLabel>CEP</DeliveryLabel>
          <HalfWidthField
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
        </div>
        <div style={{ width: '48%' }}>
          <DeliveryLabel>Número</DeliveryLabel>
          <HalfWidthField
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
      </DeliveryFieldRow>

      <div>
        <DeliveryLabel>Complemento (opcional)</DeliveryLabel>
        <DeliveryField
          type="text"
          name="complement"
          value={formData.complement}
          onChange={handleChange}
        />
      </div>

      <DeliveryButton disabled={!isFormValid} onClick={onContinue}>
        Continuar para pagamento
      </DeliveryButton>
      <DeliveryButton onClick={onClose}>Voltar para o carrinho</DeliveryButton>
    </DeliveryPanel>
  );
};

export default DeliveryModal;
