import React, { useState } from "react";
import SliderItemFade from "components/slider/SliderItemFade";
import { Image } from "utils/enums";
import styled, { StyledComponentBase } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface Props {
  active: boolean;
}
const Container = styled.div`
  height: 600px;
  position: relative;
  background-color: black;
`;
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  color: #ffffff88;
  cursor: pointer;
`;

const Right = styled(Icon)`
  right: 20px;
`;
const Left = styled(Icon)`
  left: 20px;
`;
const CircleContainer = styled.div`
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  left: 50%;
`;
const Circle: StyledComponentBase<"div", any, Props, never> = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ active }: Props) =>
    "#ffffff" + (active ? "CC" : "88")};
  display: inline-block;
  margin: 0 5px;
`;

const sliders = [
  {
    url: Image.Slide1,
    title: "lorem ipsum.",
    description: `Consectetur adipiscing elit.
    Nulla condimentum tortor sem,
    in semper nisl bibendum eu.`,
  },
  {
    url: Image.Slide2,
    title: "lorem ipsum.",
    description: `Consectetur adipiscing elit.
    Nulla condimentum tortor sem,
    in semper nisl bibendum eu.`,
  },
  {
    url: Image.Slide3,
    title: "lorem ipsum.",
    description: `Consectetur adipiscing elit.
    Nulla condimentum tortor sem,
    in semper nisl bibendum eu.`,
  },
];

const Slider: React.FunctionComponent = () => {
  const [slide, setSlide] = useState(0);
  const fw = () => {
    setSlide((slide + 1) % 3);
  };
  const rw = () => {
    setSlide((3 + slide - 1) % 3);
  };
  return (
    <Container>
      <SliderItemFade
        url={sliders[0].url}
        title={sliders[0].title}
        description={sliders[0].description}
        active={slide === 0}
      />
      <SliderItemFade
        url={sliders[1].url}
        title={sliders[1].title}
        description={sliders[1].description}
        active={slide === 1}
      />
      <SliderItemFade
        url={sliders[2].url}
        title={sliders[2].title}
        description={sliders[2].description}
        active={slide === 2}
      />
      <Right onClick={fw} icon={faAngleRight} />
      <Left onClick={rw} icon={faAngleLeft} />
      <CircleContainer>
        {sliders.map((item, i) => (
          <Circle active={i === slide} key={i} />
        ))}
      </CircleContainer>
    </Container>
  );
};

export default Slider;
