import React from "react";
import styled from "styled-components";
import ContactForm from "components/ContactForm";

const Container = styled.div`
  background-color: black;
  display: flex;
  padding: 100px 0;
`;
const Padding = styled.div`
  flex: 1;
`;
const ContainerLeft = styled.div`
  flex: 2;
`;
const ContainerRight = styled.div`
  flex: 4;
`;
const Title = styled.h1`
  color: white;
  margin: 0;
`;
const Address = styled.p`
  color: white;
  max-width: 250px;
`;

const ContactUs = () => {
  return (
    <Container>
      <Padding />
      <ContainerLeft>
        <Title>contact us.</Title>
        <Address>
          Playground srl Via G. Mazzini 3/C, Cernusco Sul Naviglio (Milano)
          <br />
          -<br />T +39 0240706003
        </Address>
      </ContainerLeft>
      <ContainerRight>
        <ContactForm />
      </ContainerRight>
      <Padding />
    </Container>
  );
};

export default ContactUs;
