import styled from "styled-components";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  color: #000;
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 99;
`;

export const overlayStyle = {
  zIndex: 5,
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
};

export const contentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  padding: 20,
  top: 0,
  left: 0,
  width: 360,
  height: 560,
  border: "none",
  borderRadius: 12,
};

export const DivTop = styled.div`
  height: 256px;
  width: 360px;
  left: 0px;
  top: 0px;
  border-radius: 0px;

  position: absolute;
  bottom: 303px;

  /* Primary / Gradient */

  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
`;

export const DivBottom = styled.div`
  height: 406px;
  width: 360px;
  left: 0px;
  top: 153px;
  border-radius: 24px 24px 0px 0px;

  position: absolute;
  left: 0px;
  right: 0px;
  top: 153px;
  bottom: 0px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  /* Neutral / 200 */

  background: #f7f9fc;
`;

export const ImgPokemon = styled.div`
  width: 247px;
  height: 247px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 4px solid #00d68f;
  position: absolute;
  left: 60px;
  top: -115px;
  background-color: #fff;
`;

export const NomePokemon = styled.p`
  position: absolute;
  height: 24px;
  top: calc(50% - 50px / 2);

  /* Title */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #2e3a59;
`;

export const DivInfo = styled.div`
  width: 311px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 101px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    text-transform: uppercase;

    /* Neutral / 700 */

    color: #2e3a59;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    /* Neutral / 700 */

    color: #2e3a59;
  }
`;

export const Separator = styled.span`
  background: #ccc;
  width: ${(props) => (props.bigger ? "311px" : "1px")};
  height: ${(props) => (props.bigger ? "1px" : "48px")};
  ${(props) => (props.bigger ? "margin: 42px 0;" : "")};
`;

export const Altura = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 101px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    text-transform: uppercase;

    /* Neutral / 700 */

    color: #2e3a59;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    /* Neutral / 700 */

    color: #2e3a59;
  }
`;

export const Peso = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 101px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    text-transform: uppercase;

    /* Neutral / 700 */

    color: #2e3a59;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;

    color: #2e3a59;
  }
`;

export const DivTypes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Type = styled.span`
  padding: 8px 16px;
  border-radius: 42px;
  width: 99px;
  height: 32px;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;

  text-align: center;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.back === 1 ? "background-color:#67AF32" : "background-color:#924990"};

  color: #ffffff;

  margin: 0 6px;
`;

export const Pokeball = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 45px;
  border-radius: 50%;

  /* Neutral / 1100 */

  background: #101426;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;
