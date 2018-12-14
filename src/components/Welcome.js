/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  border-style: dashed;
  border-width: 1px
  border-radius: 6px;
  a {
    color: #000;
    text-decoration: underline;
    &:focus: {
      color: #000 !important;
    }
    &:hover: {
      color: #000 !important;
    }
    &:active: {
      color: #000 !important;
    }
  }
`;

const Container = styled.div`
  padding: 15px 5px;
`;

const Header = styled.h5`
  font-weight: 600;
  font-size: 16px;
`;

const Paragraph = styled.p`
  text-align: left;
  padding: 10px 10px 0 10px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

export default props => (
  <Section>
    <Container>
      <Header>Welcome to Fraktal app!</Header>
      <Paragraph>
        For the price of $23, get a beatiful drawing based on{" "}
        <a href="#" target="_blank" rel="noopener">
          Cliff Pickover’s
        </a>{" "}
        work: <Bold>gorgeous custom fractal rendenrings are awesome!</Bold> The
        drawing app is executed in a fully distributed way and the result is
        delivered to a decentralized storage system:.{" "}
        <a href="http://iex.ec/" target="_blank" rel="noopener">
          iExec
        </a>{" "}
        uses the{" "}
        <a href="https://ethereum.org" target="_blank" rel="noopener">
          Ethereum
        </a>{" "}
        blockchain to process payment and run its consensus algorithm called
        <a href="#" target="_blank" rel="noopener">
          PoCo
        </a>
        : when you pay, you’re guaranteed to obtain your HD file at the
        indicated{" "}
        <a href="https://ipfs.io" target="_blank" rel="noopener">
          IPFS
        </a>{" "}
        address.
      </Paragraph>
      <Paragraph>
        <Bold>
          Make sure your Metamask wallet is loaded with at least 0.00003 ETH and
          300 nRLC.
        </Bold>
      </Paragraph>
      <Paragraph>Please leave us your feedbacks!</Paragraph>
    </Container>
  </Section>
);
