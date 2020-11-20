import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
`;

export const DivCentral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.div`
  width: 270px;
  height: 99px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  margin-bottom: 32px;
`;

export const ButtonStart = styled(Link)`
  width: 124px;
  height: 56px;
  border-radius: 42px;
  background-color: #ff3d71;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  border: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
