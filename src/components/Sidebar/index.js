import React from "react";
import Button from "../Button";

import { Container, Item } from "./styles";
import plusIcon from "../../assets/images/plus.png";

function Sidebar({ data }) {
  return (
    <Container>
      {data.length <= 6 &&
        data.map((pokemon) => (
          <Item key={pokemon.id} src={pokemon?.sprites?.front_default} />
        ))}

      {data.length < 6 && <Item>?</Item>}

      {data.length < 6 && <Button icon={<img src={plusIcon} alt="+" />} />}
    </Container>
  );
}

export default Sidebar;
