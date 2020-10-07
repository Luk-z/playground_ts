import React from "react";
import styled from "styled-components";

const Container = styled.section`
  background-color: #eee;
  padding: 70px;
`;

const Section: React.FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Section;
