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

const DAPP_ADDRESS = `0x86fb57e39fd4b11732980faaf3aa5c3ab903b542`;

class Fraktal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      loading: false,
      data: {}
    };
    this.renderOutput = this.renderOutput.bind(this);
    this.setValues = this.setValues.bind(this);
  }

  renderOutput = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    setTimeout(this.updateState, 3000, SampleImage, "Sample Image");
    const { values } = this.state;
    const url = `https://market.iex.ec/?dappAddress=${DAPP_ADDRESS}&workParams={"cmdline":"Rscript /iexec/CliffordAttractors.R ${
      values[0]
    } ${values[1]} ${values[2]} ${
      values[3]
    }","dirinuri":"https://raw.githubusercontent.com/iExecBlockchainComputing/iexec-dapps-registry/master/iExecBlockchainComputing/R-Clifford-Attractors/CliffordAttractors.R"}`;
    window.location = url;
  };

  updateState = (image, description) => {
    this.setState({
      loading: false,
      values: [],
      data: {
        description,
        image
      }
    });
  };
  componentDidMount() {
    ReactGA.initialize("UA-130996010-1");
  }

  setValues = values => {
    // let a = values[0];
    // let b = values[1];
    // let c = values[2];
    // let d = values[3];

    this.setState({
      values
    });
  };

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
                <ProgressUI setValues={this.setValues} />
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
