import React from "react";

import { Container, ImgLogo, DivCentral, ButtonStart } from "./styles";

import pokemonLogo from "../../assets/images/pokemonLogo.png";

export default function Home() {
  return (
    <Container>
      <DivCentral>
        <ImgLogo src={pokemonLogo} />
        <ButtonStart to="/map">Start</ButtonStart>
      </DivCentral>
    </Container>
  );
}
