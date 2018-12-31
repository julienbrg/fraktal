import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 0 90px;
  max-width: 500px;
  margin-top: 60px;
`;

const Container = styled.div`
  padding: 80px 0;
`;

export default props => (
  <Section>
    <Container>
      <img src={props.data.image} alt={props.data.description} className="img-fluid"/>
    </Container>
  </Section>
);
