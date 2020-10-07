import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Props {
  active: boolean;
}

const Container = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
`;
const ContainerLeft = styled.div`
  flex: 1;
`;
const ContainerRight = styled.div`
  flex: 2;
  background-color: white;
`;
const Description = styled.p`
  margin: 40px 100px;
  min-height: 300px;
`;
const Tab = styled.div`
  background-color: ${({ active }: Props) => (active ? "black" : "lightgrey")};
  color: ${({ active }: Props) => (active ? "white" : "black")};
  ${({ active }: Props) => (active ? "font-family: 'GothamBold'" : "")};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9em;

  @media (hover: hover) {
    &:hover {
      color: white;
      background-color: black;
    }
  }
`;
const Icon = styled(FontAwesomeIcon)`
  margin-left: 5px;
`;
const tabs = [
  {
    title: "Vestibulum at odio sit amet",
    description:
      "Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut. Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut. Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut. Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.",
  },
  {
    title: "Sed vehicula neque",
    description:
      "Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.",
  },
  {
    title: "Nulla id libero pretium",
    description:
      "Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.",
  },
];

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Container>
      <ContainerLeft>
        <Tab onClick={() => setCurrentTab(0)} active={currentTab === 0}>
          {tabs[0].title}
          <Icon icon={currentTab === 0 ? faAngleDown : faAngleUp} />
        </Tab>
        <Tab onClick={() => setCurrentTab(1)} active={currentTab === 1}>
          {tabs[1].title}
          <Icon icon={currentTab === 1 ? faAngleDown : faAngleUp} />
        </Tab>
        <Tab onClick={() => setCurrentTab(2)} active={currentTab === 2}>
          {tabs[2].title}
          <Icon icon={currentTab === 2 ? faAngleDown : faAngleUp} />
        </Tab>
      </ContainerLeft>
      <ContainerRight>
        <Description>{tabs[currentTab].description}</Description>
      </ContainerRight>
    </Container>
  );
};

export default Tabs;
