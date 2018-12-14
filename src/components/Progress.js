import React from "react";
import styled from "styled-components";
import { Progress } from "reactstrap";
import { Ethereum } from "../assets/images/index";

const ProgressBar = styled.section`
  width: 100%;
  margin-top: 20px;
`;

export default class ProgressUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  render() {
    return (
      <ProgressBar>
        <Progress value={this.state.progress}>
          <img src={Ethereum} alt="Fraktal Ethereum Icon" />
        </Progress>
      </ProgressBar>
    );
  }
}
