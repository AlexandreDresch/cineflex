import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SeatButton = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${(props) => props.color === 'available' ? '#c3cfd9': props.color === 'unavailable' ? '#FBE192' : '#1AAE9E'};
  border: 1px solid ${(props) => props.color === 'available' ? '#7B8B99': props.color === 'unavailable' ? '#F7C52B' : '#0E7D71'};;
  border-radius: 12px;
`;

export const Text = styled.div`
  margin-top: 8px;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 13px;
  color: #4e5a65;
`;
