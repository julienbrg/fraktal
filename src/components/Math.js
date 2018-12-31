import React from "react";
import styled from "styled-components";

const Section = styled.section`
  border: 2px solid #5f6dea;
  border-radius: 50px;
  background-color: #a4c2f4;
  padding: 0 90px;
  max-width: 500px;
  margin-top: 60px;
`;

const Container = styled.div`
  padding: 80px 0;
`;
const Calculation = styled.p``;

const Text = styled.span`
  font-size: 24px;
`;

const SubText = styled.sub`
  font-size: 18px;
`;

const Author = styled.p`
  text-align: right;
  font-style: italic;
`;

export default props => (
  <Section>
    <Container>
      <Calculation>
        <Text>
          X<SubText>n+1</SubText>
          <Text> = </Text>
          <Text>
            {" "}
            sin(a y<SubText>n</SubText>) +{" "}
            <Text>
              c cos(a x<SubText>n</SubText>)
            </Text>
          </Text>
        </Text>
      </Calculation>
      <Calculation>
        <Text>
          Y<SubText>n+1</SubText>
          <Text> = </Text>
          <Text>
            {" "}
            sin(b x<SubText>n</SubText>) +{" "}
            <Text>
              d cos(b y<SubText>n</SubText>)
            </Text>
          </Text>
        </Text>
      </Calculation>
    </Container>
    <Author>by Cliff Pickover</Author>
  </Section>
);
