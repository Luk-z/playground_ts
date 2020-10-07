import React from "react";
import styled, { StyledComponentBase } from "styled-components";

interface Props {
  description?: string;
  titleImage?: string;
  width?: string;
  scale?: string;
}

const Container = styled.div`
  flex: 1;
  margin: 0 20px;
  overflow: hidden;
`;
const Title: StyledComponentBase<"div", any, Props, never> = styled.div`
  background-color: black;
  color: white;
  background-image: url(${({ titleImage }: Props) => titleImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }: Props) => width};
  transform: scale(${({ scale }: Props) => scale});
  height: 100%;
`;
const TitleContainer = styled.div`
  overflow: hidden;
  height: 100px;
  position: relative;
`;
const Description = styled.div`
  background-color: white;
  padding: 50px 10%;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  height: 100px;
`;
const ReadMore = styled.div`
  text-transform: uppercase;
  color: white;
  background-color: black;
  padding: 15px 0;
  text-align: center;
`;

const NewsItem = ({
  description = "",
  titleImage = "",
  width = "100%",
  scale = "1.0",
}: Props) => {
  return (
    <Container>
      <TitleContainer>
        <Title scale={scale} titleImage={titleImage} width={width} />
      </TitleContainer>
      <Description>{description}</Description>
      <ReadMore>read more</ReadMore>
    </Container>
  );
};

export default NewsItem;
