import React, { Component } from "react";
/* eslint react/no-multi-comp: 0, max-len: 0 */
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import { Input } from "reactstrap";

class HeroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankName: "",
      loanSum: 0,
      loanPeriod: 0,
      min: 500,
      max: 600000,
      present: 500,
      defaultVal: 1000,
      step: 5000
    };
  }

  onSliderChange = e => {
    this.setState({
      present: +e || 100
    });
    const item = this.state;
    this.props.loanInfo(item);
  };

  onInputChange = e => {
    this.setState({ present: +e.target.value || 500 });
  };
  render() {
    return (
      <div>
        <label>Lånebelopp</label>
        <Input
          type="number"
          value={this.state.present}
          onChange={this.onInputChange}
          name="inputDegree"
          step={this.state.present < 9500 ? 500 : 10000}
        />
        <br />
        <Slider
          value={this.state.present}
          step={this.state.present < 9500 ? 500 : 10000}
          defaultValue={this.state.defaultVal}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
        />
        <br />
      </div>
    );
  }
}

export default HeroSlider;
