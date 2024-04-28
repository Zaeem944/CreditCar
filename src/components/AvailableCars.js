import React, { useState } from "react";
import styled from "styled-components";
import Car1 from "../design/assets/image1.jpg";
import Car2 from "../design/assets/image2.jpg";
import Car3 from "../design/assets/image3.jpg";
import Car4 from "../design/assets/image4.jpg";
import { useNavigate } from "react-router-dom";
import Background from "../design/assets/background2.jpeg";

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
      description: "Luxurious sedan with leather seats, GPS navigation, and sunroof.",
      price: "5000Rs per day",
      availability: "Available from 2024-04-25",
      location: "Cantt",
    },
    {
      id: 2,
      image: Car2,
      description: "Compact SUV perfect for outdoor adventures, with spacious interior and all-wheel drive.",
      price: "3000Rs per day",
      availability: "Available from 2024-04-27",
      location: "Bahria Town",
    },
    {
      id: 3,
      image: Car3,
      description: "Efficient hybrid sedan with fuel-saving technology and advanced safety features.",
      price: "4000 Rs per day",
      availability: "Available from 2024-04-30",
      location: "Model Town", // New car location
    },
    {
      id: 4,
      image: Car4,
      description: "Luxury sports car with high-performance engine and sleek design, perfect for thrill-seekers.",
      price: "7000Rs per day",
      availability: "Available from 2024-05-02",
      location: "Gulberg", // New car location
    },
    // Add more cars as needed
  ]);

  const [searchLocation, setSearchLocation] = useState("");

  const handleRentCar = (car) => {
    const confirmation = window.confirm(
      "Are you sure you want to rent this car?"
    );
    if (confirmation) {
      console.log(`Renting car: ${car.id}`);
      navigate("/confirmation");
    }
  };

  const filteredCars = cars.filter((car) =>
    car.location.toLowerCase().includes(searchLocation.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        margin: "0",
        padding: "0",
        boxSizing: "border-box",

        width: "100%",
        height: "20vh",
        backgroundSize: "cover",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
    </div>
  );
};

export default AvailableCars;
