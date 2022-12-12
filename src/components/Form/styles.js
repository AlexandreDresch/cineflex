import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  margin-top: 40px;
  margin-bottom: 57px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-family: "Roboto";
    font-size: 18px;
    color: #293845;
  }
`;

export const Input = styled.input`
  width: 327px;
  height: 51px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 3px;
  padding-left: 18px;

  ::placeholder {
    font-size: 18px;
    color: #afafaf;
  }
`;

export const Button = styled.button`
  width: 225px;
  height: 42px;
  background-color: #e8833a;
  border: none;
  border-radius: 3px;
  margin-top: 57px;
  margin-left: 50px;
  margin-bottom: 40px;
  color: #FFFFFF;
`;
