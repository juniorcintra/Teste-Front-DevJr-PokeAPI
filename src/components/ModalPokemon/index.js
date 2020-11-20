import React from "react";
import Modal from "react-modal";

import {
  ModalContent,
  Button,
  overlayStyle,
  contentStyle,
  DivTop,
  DivBottom,
  ImgPokemon,
  NomePokemon,
  DivInfo,
  HP,
  Separator,
  Altura,
  Peso,
  DivTypes,
  Type,
  Pokeball,
} from "./styles";

import pokebola from "../../assets/images/pokeball.png";

export default function ModalPokemon({
  closeModal,
  openModal,
  data,
  pokebolas,
  setPokebolas,
}) {
  function weight(peso) {
    return peso / 10;
  }

  function height(altura) {
    return altura * 10;
  }

  function types(type) {
    const tipos = {
      water: "água",
      normal: "normal",
      fighting: "luta",
      flying: "voo",
      poison: "veneno",
      ground: "terra",
      rock: "rocha",
      bug: "bicho",
      ghost: "fantasma",
      steel: "aço",
      fire: "fogo",
      grass: "grama",
      electric: "elétrico",
      psychic: "psíquico",
      ice: "gelo",
      dragon: "dragão",
      dark: "sombrio",
      fairy: "mágico",
      unknown: "desconhecido",
      shadow: "sombrio",
    };

    return tipos[type];
  }

  function handleCapture(data) {
    setPokebolas((pokebolas) => [...pokebolas, data]);
    closeModal();
  }

  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={openModal}
      style={{
        overlay: overlayStyle,
        content: contentStyle,
      }}
    >
      <ModalContent>
        <Button onClick={closeModal}>X</Button>
        <DivTop />
        <DivBottom>
          <ImgPokemon src={data?.sprites?.front_default} />
          <NomePokemon>{data?.name}</NomePokemon>
          <DivInfo>
            <HP>
              <h1>HP</h1>
              <p>
                {data?.stats[0].base_stat}/{data?.stats[0].base_stat}
              </p>
            </HP>
            <Separator />
            <Altura>
              <h1>Altura</h1>

              <p>{height(data?.height)} m</p>
            </Altura>
            <Separator />
            <Peso>
              <h1>Peso</h1>
              <p>{weight(data?.weight)} kg</p>
            </Peso>
          </DivInfo>
          <Separator bigger />

          <Pokeball onClick={() => handleCapture(data)} src={pokebola} />
          <DivTypes>
            {data?.types.map((type) => (
              <Type back={type.slot}>{types(type.type.name)}</Type>
            ))}
          </DivTypes>
        </DivBottom>
      </ModalContent>
    </Modal>
  );
}
