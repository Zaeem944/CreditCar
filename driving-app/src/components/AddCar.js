import React, { useState } from 'react';
import styled from 'styled-components';

const AddCarPage = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Align content vertically */
`;

const Form = styled.form`
  background-color: #f0f8ff; /* Light turquoise background */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
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

const AddCar = () => {
  const [ownerName, setOwnerName] = useState('');
  const [carName, setCarName] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carDescription, setCarDescription] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    console.log('Form submitted:', { ownerName, carName, carModel, carDescription, location, images });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <AddCarPage>
      <h1>Add a Car for Rental</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="ownerName">Owner Name:</Label>
          <Input
            type="text"
            id="ownerName"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="carName">Car Name:</Label>
          <Input
            type="text"
            id="carName"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="carModel">Car Model:</Label>
          <Input
            type="text"
            id="carModel"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="carDescription">Car Description/Condition:</Label>
          <TextArea
            id="carDescription"
            value={carDescription}
            onChange={(e) => setCarDescription(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location:</Label>
          <Input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="images">Images:</Label>
          <Input type="file" id="images" multiple onChange={handleImageChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </AddCarPage>
  );
};

export default AddCar;
