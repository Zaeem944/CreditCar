import React, { useState } from 'react';
import styled from 'styled-components';
import Car1 from '../design/assets/image1.jpg';
import Car2 from '../design/assets/image2.jpg';
import Car3 from '../design/assets/image3.jpg';
import Car4 from '../design/assets/image4.jpg';
import { useNavigate } from 'react-router-dom';

const AvailableCarsPage = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Align content vertically */
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  background-color: #f0f8ff; /* Light turquoise background */
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #333333;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #00ced1;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Availability = styled.p`
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #00ced1; /* Turquoise */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #008b8b; /* Darker turquoise on hover */
    transform: scale(1.05); /* Increased size on hover */
  }
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
`;

const AvailableCars = () => {
  const navigate = useNavigate();
  const [cars] = useState([
    {
      id: 1,
      image: Car1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$50 per day',
      availability: 'Available from 2024-04-25',
      location: 'New York',
    },
    {
      id: 2,
      image: Car2,
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '$60 per day',
      availability: 'Available from 2024-04-27',
      location: 'Los Angeles',
    },
    {
      id: 3,
      image: Car3,
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: '$70 per day',
      availability: 'Available from 2024-04-30',
      location: 'Chicago', // New car location
    },
    {
      id: 4,
      image: Car4,
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: '$80 per day',
      availability: 'Available from 2024-05-02',
      location: 'Miami', // New car location
    },
    // Add more cars as needed
  ]);

  const [searchLocation, setSearchLocation] = useState('');

  const handleRentCar = (car) => {
    const confirmation = window.confirm('Are you sure you want to rent this car?');
    if (confirmation) {
      console.log(`Renting car: ${car.id}`);
      navigate('/CreditCar/confirmation')
    }
  };

  const filteredCars = cars.filter((car) =>
    car.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <AvailableCarsPage>
      <h1>Available Cars for Rent</h1>
      <Input
        type="text"
        placeholder="Search by location..."
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <CardContainer>
        {filteredCars.map((car) => (
          <Card key={car.id}>
            <Image src={car.image} alt={`Car ${car.id}`} />
            <Description>{car.description}</Description>
            <Price>{car.price}</Price>
            <Availability>{car.availability}</Availability>
            <p>Location: {car.location}</p> {/* Added location display */}
            <Button onClick={() => handleRentCar(car)}>Rent it!</Button>
          </Card>
        ))}
      </CardContainer>
    </AvailableCarsPage>
  );
};

export default AvailableCars;
