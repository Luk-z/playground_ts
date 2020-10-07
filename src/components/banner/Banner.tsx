import React from "react";
import Image from "components/Image";
import Button from "components/button/Button";
import styled, { StyledComponentBase } from "styled-components";
import { Image as ImageEnums, BannerTheme } from "utils/enums";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  reverse?: boolean;
  theme?: string;
}
interface Props2 {
  order?: number;
  theme?: string;
  reverse?: boolean;
}

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }: Props2) =>
    theme === BannerTheme.Light ? "white" : "black"};
`;
const ImageContainer: StyledComponentBase<
  "div",
  any,
  Props2,
  never
> = styled.div`
  flex: 3;
  order: ${({ order }: Props2) => order};
`;
const BlockContainer: StyledComponentBase<
  "div",
  any,
  Props2,
  never
> = styled.div`
  flex: 1;
  color: ${({ theme }: Props2) =>
    theme === BannerTheme.Light ? "black" : "white"};
  order: ${({ order }: Props2) => order};
`;
const TextContainer = styled.div`
  text-align: ${({ reverse }: Props2) => (reverse ? "right" : "left")};
  padding: 140px
    ${({ theme }: Props2) => (theme === BannerTheme.Light ? "100px" : "0")}
    140px
    ${({ theme }: Props2) => (theme === BannerTheme.Light ? "0" : "100px")};
`;
const TextRow = styled.div`
  display: flex;
  justify-content: ${({ reverse }: Props2) =>
    reverse ? "flex-end" : "flex-start"};
`;
const Title = styled.h1`
  word-spacing: 100vw;
  margin-top: 0;
  margin-bottom: 0.2em;
`;
const ButtonContainer = styled(Button)`
  color: ${({ theme }: Props2) =>
    theme === BannerTheme.Light ? "black" : "white"};
  border-color: ${({ theme }: Props2) =>
    theme === BannerTheme.Light ? "black" : "white"};
`;
const Description = styled.h5``;

const Banner = ({
  title,
  description,
  buttonText,
  reverse = false,
  theme = BannerTheme.Dark,
}: Props) => {
  return (
    <Container theme={theme}>
      <ImageContainer order={reverse ? 3 : 1}>
        <Image url={ImageEnums.bannerWeAre} />
      </ImageContainer>
      <BlockContainer theme={theme} order={reverse ? 2 : 2}>
        <TextContainer reverse={reverse} theme={theme}>
          <TextRow reverse={reverse}>
            <Title>{title}</Title>
          </TextRow>
          <TextRow reverse={reverse}>
            <Description>{description}</Description>
          </TextRow>
          <TextRow reverse={reverse}>
            <ButtonContainer reverse={reverse} theme={theme}>
              {buttonText}
            </ButtonContainer>
          </TextRow>
        </TextContainer>
      </BlockContainer>
      <BlockContainer theme={theme} order={reverse ? 1 : 3} />
    </Container>
  );
};

export default Banner;
