import styled from 'styled-components';
import pizza from './pizza.png'; // Importe a imagem aqui
import React, { useState, useEffect } from 'react';

// Estilos do Modal
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

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
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

const DescriptionText = styled.p`
  font-size: 14px;
  text-align: center;
  color: #ffe9d9;
  margin-top: 20px;
  line-height: 1.6;
`;


const ModalProduto = ({ show, productId, onClose, onAddToCart }) => {
  const [product, setProduct] = useState(null);

  // Coloque o useEffect aqui
  useEffect(() => {
    if (productId && show) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data); // Preenche os dados do produto
        })
        .catch((error) => {
          console.error('Erro ao carregar o produto:', error);
        });
    }
  }, [productId, show]);

  if (!show) return null;

  return (
    <ModalContainer show={show}>
      <ModalContent>
        <h2>{product?.name || 'Carregando...'}</h2>
        <ProductImage src={product?.image || pizza} alt={product?.name} />
        <DescriptionText>
          {product?.description ||
            'Descrição indisponível no momento. Por favor, tente novamente mais tarde.'}
          <br />
          {product && <strong>Serve:</strong>} {product?.serves || 'N/A'}
        </DescriptionText>
        <ModalButton onClick={onAddToCart}>Adicionar ao carrinho</ModalButton>
        <ModalButton onClick={onClose}>Fechar</ModalButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalProduto;
