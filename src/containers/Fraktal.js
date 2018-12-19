import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactGA from "react-ga";
import Title from "../components/Title";
import WelcomeBanner from "../components/Welcome";
import MathUI from "../components/Math";
import RunButton from "../components/Button";
import ProgressUI from "../components/Progress";
import Spinner from "../components/Spinner";
import Output from "../components/Output";
import { SampleImage } from "../assets/images/index";

class Fraktal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: {}
    };
    this.renderOutput = this.renderOutput.bind(this);
  }

  renderOutput = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    setTimeout(this.updateState, 3000, SampleImage, "Sample Image");
  };

  updateState = (image, description) => {
    this.setState({
      loading: false,
      data: {
        description,
        image
      }
    });
  };
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
            {!this.state.data.hasOwnProperty("image") && (
              <div>
                <MathUI />
                <ProgressUI />
                <RunButton onClick={e => this.renderOutput(e)}>Run</RunButton>
              </div>
            )}
            {this.state.loading && <Spinner />}
            {!this.state.loading && this.state.data.hasOwnProperty("image") && (
              <Output data={this.state.data} />
            )}
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
