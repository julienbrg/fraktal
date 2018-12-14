import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import Title from "../components/Title";
import WelcomeBanner from "../components/Welcome";
import MathUI from "../components/Math";
import Button from "../components/Button";
import ProgressUI from "../components/Progress";

class Fraktal extends Component {
  componentDidMount() {
    ReactGA.initialize("UA-130996010-1");
  }

  render() {
    return (
      <Container>
        <Row type="flex" align="middle">
          <Col
            xs={12}
            sm={12}
            md={{ size: "auto", offset: 2 }}
            lg={{ size: "auto", offset: 2 }}
          >
            <Title />
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col
            xs={12}
            sm={12}
            md={{ size: "auto", offset: 2 }}
            lg={{ size: "auto", offset: 2 }}
          >
            <MathUI />
            <ProgressUI />
            <Button position="right" />
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <WelcomeBanner />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Fraktal;
