import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginPage = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  background-color: #f0f8ff; /* Light turquoise background */
  padding: 40px; /* Increased padding */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 30px; /* Increased margin */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #333333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  background-color: #00ced1; /* Turquoise */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* Added transform transition */

  &:hover {
    background-color: #008b8b; /* Darker turquoise on hover */
    transform: scale(1.05); /* Increased size on hover */
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and password (not implemented for simplicity)
    // Move to the next page regardless of credentials
    navigate('/CreditCar/home');
  };

  return (
    <LoginPage>
      <LoginForm onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Login to CreditCar</h1>
        <FormField>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
