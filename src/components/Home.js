import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../design/assets/background2.jpeg';

const HomePage = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #00ced1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 20px 40px; /* Increased padding for larger buttons */
  font-size: 20px; /* Increased font size for readability */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #008b8b;
    transform: scale(1.05);
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const HeadingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column; /* Display headings as a block */
`;

const Welcome = styled.h2`
  font-size: 36px; /* Larger font size for "Welcome John" */
  margin-bottom: 20px; /* Increased margin for spacing */
`;

const Heading = styled.h4`
  font-size: 18px; /* Smaller font size for other headings */
    margin-bottom: 20px; /* Increased margin for spacing */
`;
const BiggerHeading = styled.h1`
    font-size: 50px;
    margin-bottom: 20px;

`;
const Home = () => {
  const navigate = useNavigate();

  const handleAddCarClick = () => {
    // Handle "Add car as Rental" button click
    // For now, just navigate to the login page
    navigate('/addACar');
  };

  const handleSearchCarClick = () => {
    // Handle "Search Car Rental" button click
    // For now, just navigate to the login page
    navigate('/rentACar');
  };

  return (
    <HomePage style={{
      backgroundImage: `url(${Background})`,
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',

      width: '100%',
      height: '10%',
      backgroundSize: 'cover',

      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '600px',
      
      }}>
        <BiggerHeading>Welcome to CreditCar</BiggerHeading>
        <HeadingsContainer>
          <Welcome>Welcome Huzaifa</Welcome>
          <Heading>Will you be renting a car, or adding one?</Heading>
        </HeadingsContainer>
        <Button onClick={handleAddCarClick}>Add Car as Rental</Button>
        <Button onClick={handleSearchCarClick}>Search Car Rental</Button>
      </div>
    </HomePage>
  );
};

export default Home;
