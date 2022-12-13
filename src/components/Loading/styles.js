import styled from "styled-components";

export const Container = styled.div`
  margin-left: 150px;
  width: 70px;
  height: 70px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #e8833a; /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
