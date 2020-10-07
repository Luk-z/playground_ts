import React, { useState } from "react";
import SliderItem from "components/slider/SliderItem";
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
    if (slide === sliders.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  const rw = () => {
    if (slide === 0) {
      setSlide(sliders.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
  return (
    <Container>
      <SliderItem
        url={sliders[slide].url}
        title={sliders[slide].title}
        description={sliders[slide].description}
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
