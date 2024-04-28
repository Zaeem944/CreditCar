import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ConfirmationPageContainer = styled.div`
  background-color: #f0f8ff; /* Light turquoise background */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmationBubble = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
`;

const ConfirmationMessage = styled.p`
  color: #333333;
  font-size: 18px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  background-color: #00ced1; /* Turquoise */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #008b8b; /* Darker turquoise on hover */
    transform: scale(1.05); /* Increased size on hover */
  }
`;

const ConfirmationPage = () => {
  return (
    <div>

    <ConfirmationPageContainer>
      <ConfirmationBubble>
        <ConfirmationMessage>
          Your request has been processed. Our AI assitant will get back to you shortly.
        </ConfirmationMessage>
        <StyledLink to="/home">Back to Home</StyledLink>
      </ConfirmationBubble>
    </ConfirmationPageContainer>
    </div>
  );
};

export default ConfirmationPage;
