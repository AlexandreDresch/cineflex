import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 375px;
  height: 117px;
  padding: 14px 10px;
  background-color: #dfe6ed;
  border-top: 1px solid #9eadba;
  position: sticky;
  bottom: 0;
`;

export const ImageContainer = styled.div`
  width: 64px;
  height: 89px;
  margin-right: 14px;
  background-color: #ffffff;
  padding: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const Image = styled.img`
  width: 48px;
  height: 72px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 24px;
  color: #293845;
`;
