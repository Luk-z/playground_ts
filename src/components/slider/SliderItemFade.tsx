import React from "react";
import Image from "components/Image";
import styled, { StyledComponentBase } from "styled-components";

interface Props {
  url: string;
  title: string;
  description: string;
  active: boolean;
}

interface StyleProps {
  active: boolean;
}

const Container: StyledComponentBase<"div", {}, StyleProps> = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: ${({ active }: StyleProps) => (active ? 1 : 0)};
  visibility: ${({ active }: StyleProps) => (active ? "visible" : "hidden")};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`;
const ContainerText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  color: white;
  width: 200px;
`;

const SliderItem: React.FunctionComponent<Props> = ({
  url,
  title,
  description,
  active,
}: Props) => {
  return (
    <Container active={active}>
      <Image url={url} />
      <ContainerText>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </ContainerText>
    </Container>
  );
};

export default SliderItem;
