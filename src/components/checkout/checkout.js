import React, { useState } from 'react';
import styled from 'styled-components';

const CheckoutForm = () => {
 const [billing, setBilling] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling({ ...billing, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', billing);
    // Process the form data here
 };

 return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Contact Information</h2>
        <Label htmlFor="name">Name:</Label>
        <Input id="name" name="name" type="text" value={billing.name} onChange={handleChange} />

        <Label htmlFor="email">Email:</Label>
        <Input id="email" name="email" type="email" value={billing.email} onChange={handleChange} />

        <h2>Shipping Address</h2>
        <Label htmlFor="address">Address:</Label>
        <Input id="address" name="address" type="text" value={billing.address} onChange={handleChange} />

        <Label htmlFor="city">City:</Label>
        <Input id="city" name="city" type="text" value={billing.city} onChange={handleChange} />

        <Label htmlFor="state">State:</Label>
        <Input id="state" name="state" type="text" value={billing.state} onChange={handleChange} />

        <Label htmlFor="zipCode">Zip Code:</Label>
        <Input id="zipCode" name="zipCode" type="text" value={billing.zipCode} onChange={handleChange} />

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
 );
};

const FormContainer = styled.div`
 width: 100%;
 max-width: 400px;
 margin: 0 auto;
`;

const Form = styled.form`
 display: flex;
 flex-direction: column;
`;

const Label = styled.label`
 margin-bottom: 5px;
`;

const Input = styled.input`
 margin-bottom: 20px;
 padding: 5px;
 font-size: 16px;
`;

const Button = styled.button`
 background-color: #4CAF50;
 color: white;
 padding: 10px 20px;
 font-size: 16px;
 border: none;
 cursor: pointer;
 margin-top: 10px;

 &:hover {
    background-color: #45a049;
 }
`;

export default CheckoutForm;