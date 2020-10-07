import React from "react";
import Image from "components/Image";
import styled from "styled-components";

interface Props {
  url: string;
  title: string;
  description: string;
}

const Container = styled.div`
  height: 100%;
  width: 100%;
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
}: Props) => {
  return (
    <Container>
      <Image url={url} />
      <ContainerText>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </ContainerText>
    </Container>
  );
};

export default SliderItem;
