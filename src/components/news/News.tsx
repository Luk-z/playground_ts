import React from "react";
import styled from "styled-components";
import NewsItem from "components/news/NewsItem";
import { Image } from "utils/enums";

const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
`;

const news = [
  {
    title: "PLAY HARDER",
    description:
      "Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.",
    titleImage: Image.cardPlayHarder,
  },
  {
    title: "SIMPLICITY",
    description:
      "Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.",
    titleImage: Image.cardSimplicity,
  },
  {
    title: "INNOVATION",
    description:
      "Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.",
    titleImage: Image.cardInnovation,
  },
];

const News = () => {
  return (
    <Container>
      <NewsItem scale="1.3" {...news[0]} />
      <NewsItem width="135%" {...news[1]} />
      <NewsItem {...news[2]} />
    </Container>
  );
};

export default News;
