import React from "react";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import styled from "styled-components";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const wrapperStyle = {
  width: 400,
  margin: 50
};

const InfoBox = styled.p`
  font-weight: 600;
  margin: 30px;
`;

export default class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [-2, -1, 0, 1]
    };
  }

  componentDidMount() {
    this.props.setValues(this.state.value);
  }

  handleChange = value => {
    this.setState({
      value
    });
    this.props.setValues(this.state.value);
  };

  render() {
    return (
      <div style={wrapperStyle}>
        <Range
          value={this.state.value}
          step={0.0000001}
          min={-2}
          max={2}
          onChange={this.handleChange}
        />
        <InfoBox>
          Drag the slider bar above to set the values of a, b, c and d.
        </InfoBox>
      </div>
    );
  }
}
