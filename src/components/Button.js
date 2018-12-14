import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

const Section = styled.section`
  padding: 20px;
  text-align: right;
`;
const ActionButton = styled(Button)`
  &.btn-secondary {
    background-color: #fff;
    border-radius: 10px;
    color: #000;
    border: 3px solid #a4c2f4;
    &:hover {
      background-color: #a4c2f4;
      border: 3px solid #a4c2f4;
    }
    &:focus {
      background-color: #a4c2f4;
      border: 3px solid #a4c2f4;
    }
  }
`;

const ButtonText = styled.span`
  padding: 0 15px;
`;

export default props => (
  <Section>
    <ActionButton size="lg">
      <ButtonText>Run</ButtonText>
    </ActionButton>
  </Section>
);
