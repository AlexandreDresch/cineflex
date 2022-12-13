import styled from "styled-components";

export const Container = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.color ? "#1AAE9E" : "#c3cfd9")};
  border: 1px solid ${(props) => (props.color ? "#0E7D71" : "#7B8B99")};
  border-radius: 12px;
`;

export const ContainerDisabled = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbe192;
  border: 1px solid #f7c52b;
  border-radius: 12px;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 11px;
  color: #000000;
`;
