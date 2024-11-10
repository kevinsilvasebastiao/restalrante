import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DeliveryContainer = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const FormTitle = styled.h2`
    font-size: 24px;
    color: #E66767;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: #E66767;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    border: none;

    &:hover {
        background-color: #c55c5c;
    }
`;

const DeliveryForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [number, setNumber] = useState('');
    const navigate = useNavigate(); // Usando o hook useNavigate

    const handleSubmit = () => {
        // Aqui você pode enviar as informações para um servidor ou passar para o próximo passo
        alert('Informações de entrega enviadas');
        navigate('/pagamento'); // Navegar para a página de pagamento
    };

    return (
        <DeliveryContainer>
            <FormTitle>Informações de Entrega</FormTitle>
            <Input
                type="text"
                placeholder="Nome do destinatário"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Input
                type="text"
                placeholder="CEP"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <Button onClick={handleSubmit}>Continuar com o Pagamento</Button>
            <Button 
                onClick={() => navigate(-1)} // Usando navigate para voltar para a página anterior
                style={{ marginTop: '10px', backgroundColor: '#ccc' }}
            >
                Voltar para o Carrinho
            </Button>
        </DeliveryContainer>
    );
};

export default DeliveryForm;
