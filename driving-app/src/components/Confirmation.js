import React from 'react';
import styled from 'styled-components';

const ConfirmationPage = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ConfirmationBubble = styled.div`
  background-color: #f0f8ff; /* Light turquoise background */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const ConfirmationMessage = styled.p`
  color: #333333;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Confirmation = () => {
  return (
    <>
    
    <ConfirmationPage>
      <ConfirmationBubble>
        <ConfirmationMessage>
          Your request has been processed. Our representatives will contact you in the near future for further details.
        </ConfirmationMessage>
      </ConfirmationBubble>
    </ConfirmationPage>

    
    </>
  );
};

export default Confirmation;
