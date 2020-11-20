import styled from "styled-components";
import TooltipSearch from "../../assets/images/searchTooltip.png";
import TooltipSearching from "../../assets/images/searchingTooltip.png";
import TooltipError from "../../assets/images/tooltipError.png";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .tooltipsearch {
    width: 64px;
    height: 60px;
    background-image: url(${TooltipSearch});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -70px;
  }

  .tooltiperror {
    width: 64px;
    height: 60px;
    background-image: url(${TooltipError});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -70px;
  }

  .tooltipsearching {
    width: 64px;
    height: 60px;
    background-image: url(${TooltipSearching});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: -70px;
  }
`;

export const Ash = styled.div`
  position: relative;
  width: 64px;
  height: 64px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  ${(props) =>
    props.walk ? `background-size: auto` : `background-size: cover`};
`;

export const ToolTip = styled.div``;
