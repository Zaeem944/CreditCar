import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../design/assets/background2.jpeg";

const SignupPage = styled.div`
  position: relative; /* Position relative for absolute positioning of background */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Background with blur effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      255,
      255,
      255,
      0.5
    ); /* Semi-transparent white background */
    backdrop-filter: blur(8px); /* Blur effect */
    z-index: -1; /* Behind other content */
  }
`;

const SignupForm = styled.form`
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

const Signup = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [idCard, setIdCard] = useState(null);
  const [carRegistrations, setCarRegistrations] = useState(null);

  console.log(carRegistrations)
  console.log(idCard)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate phone number, password, and ID card (not implemented for simplicity)
    // Move to the next page regardless of credentials
    navigate("/home");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        margin: "0",
        padding: "0",
        boxSizing: "border-box",

        width: "100%",
        height: "100vh",
        backgroundSize: "cover",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SignupPage>
        <SignupForm onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Signup for CreditCar
          </h1>
          <FormField>
            <Label htmlFor="phoneNumber">Phone Number:</Label>
            <Input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
          <FormField>
            <Label htmlFor="idCard">National Identity Card:</Label>
            <Input
              type="file"
              id="idCard"
              onChange={(e) => setIdCard(e.target.files[0])}
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="idCard">Car registrations (for Lenders):</Label>
            <Input
              type="file"
              id="idCard"
              onChange={(e) => setCarRegistrations(e.target.files[0])}
              required
            />
          </FormField>
          <SubmitButton type="submit">Signup</SubmitButton>
        </SignupForm>
      </SignupPage>
    </div>
  );
};

export default Signup;
