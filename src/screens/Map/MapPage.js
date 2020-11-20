import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WOW from "wowjs";

import Sidebar from "../../components/Sidebar/index";
import Modal from "../../components/ModalPokemon";

import background from "../../assets/images/pageBackground.png";
import ashStop from "../../assets/images/ashFront.png";
import ashWalk from "../../assets/images/ash.gif";

import { Container, Ash } from "./styles";

import PokemonActions from "../../store/ducks/pokemon";

export default function MapPage() {
  const [walking, setWalking] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [error, setError] = useState(false);
  const [wowClass, setWowClass] = useState("");
  const [open, setOpen] = useState(false);
  const [pokebolas, setPokebolas] = useState([]);

  const dispatch = useDispatch();

  const { data: pokemonData, loading: pokemonLoading } = useSelector(
    (state) => state.pokemon
  );

  async function handleSubmit() {
    try {
      setWalking(!walking);

      const id = Math.floor(Math.random() * (807 - 1 + 1)) + 1;

      await dispatch(PokemonActions.captureRequest(id));

      setTimeout(function () {
        setOpen(true);
        setWalking(!walking);
        setMouseOver(false);
      }, 3000);
    } catch (err) {
      console.tron.log(err);
    }
  }

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();
  }, []);

  function handleMouseOverTrue() {
    setWowClass(" wow fadeInUp animated");
    setMouseOver(true);
  }

  function handleMouseOverFalse() {
    setWowClass(" wow fadeOutDown animated");
  }

  function handleClose() {
    setOpen(false);
    setWalking(false);
    setMouseOver(false);
  }

  return (
    <Container src={background}>
      <Sidebar data={pokebolas} />
      <Ash
        onMouseOver={() => handleMouseOverTrue()}
        onMouseLeave={() => handleMouseOverFalse()}
        onClick={() => handleSubmit()}
        src={!walking ? ashStop : ashWalk}
        walk={walking}
      >
        {mouseOver && !error && <div className={"tooltipsearch" + wowClass} />}
        {mouseOver && error && <div className={"tooltiperror" + wowClass} />}
        {walking && <div className={"tooltipsearching"} />}
      </Ash>

      <Modal
        openModal={open}
        pokebolas={pokebolas}
        setPokebolas={setPokebolas}
        data={pokemonData}
        closeModal={handleClose}
      />
    </Container>
  );
}
