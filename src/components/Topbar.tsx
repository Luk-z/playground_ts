import React from "react";
import styled from "styled-components";
import Image from "components/Image";
import { Image as ImageEnums } from "utils/enums";

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  font-size: 14px;
`;
const Col = styled.div`
  flex: 1;
  color: white;
  align-self: center;
  text-align: center;
  display: flex;
`;
const LinkContainer = styled.div`
  flex: 1;
`;
const ImageContainer = styled(Image)`
  width: 150px;
  height: 22px;
  margin-left: 20%;
`;

const Topbar = () => {
  return (
    <Container>
      <Col>
        <ImageContainer url={ImageEnums.LogoWhite} />
      </Col>
      <Col>
        <LinkContainer>
          <a href="#">we are</a>
        </LinkContainer>
        <LinkContainer>
          <a href="#">we do</a>
        </LinkContainer>
        <LinkContainer>
          <a href="#">careers</a>
        </LinkContainer>
        <LinkContainer>
          <a href="#">contact us</a>
        </LinkContainer>
        <LinkContainer />
      </Col>
    </Container>
  );
};

export default Topbar;
