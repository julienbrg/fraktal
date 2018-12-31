import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import EthJs from "ethjs";
import axios from 'axios';
import createIEXECClient from "iexec-server-js-client";
import Title from "../components/Title";
import WelcomeBanner from "../components/Welcome";
import MathUI from "../components/Math";
import RunButton from "../components/Button";
import ProgressUI from "../components/Progress";
import Spinner from "../components/Spinner";
import Output from "../components/Output";
import { DEFAULT_CHAIN } from "../utils/chain";
const DAPP_ADDRESS = `0x86fb57e39fd4b11732980faaf3aa5c3ab903b542`;
let web3;
let chain;
let orders;
const iexec = new createIEXECClient({ server: "https://testxw.iex.ec:443" });

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
  componentDidMount = async () => {
    if (window.ethereum) {
      web3 = new EthJs(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (err) {
        console.log("Error ", err);
      }
    } else if (window.web3) {
      web3 = new EthJs(window.web3.currentProvider);
    } else {
      console.log(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    await web3
      .net_version()
      .then(result => {
        chain = result;
      })
      .catch(err => {
        chain = DEFAULT_CHAIN;
      });
    await web3
      .accounts()
      .then(accounts => (this.account = accounts[0]))
      .catch(err => console.log(err));

    // Fetch latest order
    await axios({
      method: 'POST',
      url: 'https://gateway.iex.ec/orders',
      data: {
        chainID: chain,
        find: { status: 'open'},
        sort: { value: 1, blockTimestamp: -1},
        limit: 10
      }
    }).then(response => orders = response.data.orders);
  };

  renderOutput = async e => {
    e.preventDefault();
    const { values } = this.state;
    iexec
      .auth(web3.currentProvider, this.account)
      .then(({ jwtoken, cookie }) => {
        console.log(jwtoken);
        console.log(cookie);
        const url = `https://market.iex.ec/?dappAddress=${DAPP_ADDRESS}&workParams={"cmdline":"Rscript /iexec/CliffordAttractors.R ${
          values[0]
        } ${values[1]} ${values[2]} ${
          values[3]
        }","dirinuri":"https://raw.githubusercontent.com/iExecBlockchainComputing/iexec-dapps-registry/master/iExecBlockchainComputing/R-Clifford-Attractors/CliffordAttractors.R"}`;
        const download = iexec.createDownloadURI(url);
        console.log(download);
      }).catch(err => {
        console.log('Error ', err);
      })

    // const result = await this.$http.post("https://gateway.iex.ec/orders", {
    //   chainID: chains[4],
    //   find: { status: "open" },
    //   sort: { value: 1, blockTimestamp: -1 },
    //   limit: 20
    // });
    // this.setState({
    //   loading: true
    // });
    // setTimeout(this.updateState, 10000, SampleImage, "Sample Image");
    // const { values } = this.state;
    // const url = `https://market.iex.ec/?dappAddress=${DAPP_ADDRESS}&workParams={"cmdline":"Rscript /iexec/CliffordAttractors.R ${
    //   values[0]
    // } ${values[1]} ${values[2]} ${
    //   values[3]
    // }","dirinuri":"https://raw.githubusercontent.com/iExecBlockchainComputing/iexec-dapps-registry/master/iExecBlockchainComputing/R-Clifford-Attractors/CliffordAttractors.R"}`;
    // setTimeout(() => {
    //   window.location = url;
    // }, 1000);
    // const oracleContract = web3.eth
    //   .contract(oracleJSON.abi)
    //   .at(oracleJSON.networks[4].address);
    // const callbackPrice = await oracleContract.callbackPrice();
  };

  setValues = values => {
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
            {!this.state.loading && !this.state.data.hasOwnProperty("image") && (
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
