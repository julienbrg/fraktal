import React from "react";
import styled from "styled-components";
import { Progress } from "reactstrap";
import Slider from 'react-input-slider';
import 'react-input-slider/dist/input-slider.css';

const ProgressBar = styled.section`
  width: 100%;
  margin-top: 20px;
`;

export default class ProgressUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDegree: 60,
      progress: 50,
      progressWidth: 20,
      trackWidth: 40,
      cornersWidth: 4,
      size: 300,
      fillColor: '#000000',
      trackColor: '#ff0000',
      progressColor: '#00ff00'
    };
  }

  handleSliderChange = (name, position) => {
    let s = {};
    s[name] = position.x;
    this.setState(s);
  }

  renderSlider = (name, min, max) => {
    return (
      <div>
        <Slider
          className="x-slider"
          x={this.state[name]}
          xmin={min}
          xmax={max}
          onChange={val => this.handleSliderChange(name, val)}
          />
      </div>
    );
  }

  render() {
    return (
      <ProgressBar>
        {this.renderSlider('progress', 0, 360)}
      </ProgressBar>
    );
  }
}
