import React from "react";
import styled from "styled-components";
import { LoaderIcon } from "../assets/images";

const Section = styled.section`
  padding: 0 90px;
  max-width: 500px;
`;

const Container = styled.div`
  padding: 80px 0;
`;
const Calculation = styled.p`
  font-weight: 500;
  margin-top: 40px;
`;

export default props => (
  <Section>
    <Container>
      <img src={LoaderIcon} class="img-fluid" alt="Loading" />
      <Calculation>
        Your Fraktal is being processed by iExec. Thanks for your patience!
        :wink: You can check the status and download the result at{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://explorer.iex.ec/kovan"
        >
          https://explorer.iex.ec/kovan
        </a>
      </Calculation>
    </Container>
  </Section>
);
