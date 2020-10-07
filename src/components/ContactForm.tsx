import React from "react";
import styled from "styled-components";
import Button from "components/button/Button";

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
`;
const Row = styled.div`
  flex: 1;
  flex-direction: row;
  display: flex;
`;
const Col = styled.div`
  flex: 1;
`;
const InputContainer = styled.div`
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
`;
const Input = styled.input`
  border: 1px solid white;
  color: white;
  background-color: black;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;
const Textarea = styled.textarea`
  height: 150px;
  background-color: black;
  color: white;
  border: 1px solid white;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  padding: 10px;
`;
const ButtonContainer = styled(Button)`
  text-transform: uppercase;
  background-color: white;
  color: black;
  margin: 5px;
  font-family: GothamMedium;
  font-size: 14px;
`;

const ContactUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <InputContainer>
            <Input placeholder="name" />
          </InputContainer>
        </Col>
        <Col>
          <InputContainer>
            <Input placeholder="last name" />
          </InputContainer>
        </Col>
      </Row>
      <Row>
        <InputContainer>
          <Input placeholder="email" />
        </InputContainer>
      </Row>
      <Row>
        <InputContainer>
          <Textarea placeholder="message" />
        </InputContainer>
      </Row>
      <Row>
        <Col>
          <ButtonContainer>send ></ButtonContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
