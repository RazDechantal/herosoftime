import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { writeStat } from "../../Action/appRefreshAction";
import { readStat } from "../../Action/appReadStat";

import "rc-slider/assets/index.css";
import Slider from "rc-slider";

import { Input } from "reactstrap";

class SliderNew extends Component {
  componentWillMount() {
    this.props.readStat();
  }

  onSliderChange = e => {
    const t = +e || 500;
    this.props.writeStat(t, "WRITE_STAT");
  };

  onInputChange = e => {
    const t = +e.target.value || 500;
    this.props.writeStat(t, "WRITE_STAT");
  };

  onTimeSliderChange = e => {
    const t = +e || 1;
    this.props.writeStat(t, "WRITE_MONEY_STAT");
  };

  onTimeInputChange = e => {
    const t = +e.target.value || 1;
    this.props.writeStat(t, "WRITE_MONEY_STAT");
  };

  render() {
    return (
      <div>
        <label>Lånebelopp</label>
        <Input
          type="number"
          value={this.props.present}
          onChange={this.onInputChange}
          name="inputDegree"
          step={this.props.present < 9500 ? 500 : 10000}
        />
        <br />
        <Slider
          value={this.props.present}
          step={this.props.present < 10000 ? 500 : 10000}
          name="sumSlider"
          min={this.props.min}
          max={this.props.max}
          onChange={this.onSliderChange}
        />
        <br />
        <label>Years</label>
        <Input
          type="number"
          value={this.props.loanPeriod}
          onChange={this.onTimeInputChange}
          name="inputDegree"
          step={this.props.loanStep}
          min={0}
          max={10}
        />
        <br />
        <Slider
          value={this.props.loanPeriod}
          step={1}
          defaultValue={0}
          name="periodSlider"
          min={this.props.yearMin}
          max={this.props.yearMAx}
          onChange={this.onTimeSliderChange}
        />
        <br />
      </div>
    );
  }
}

SliderNew.propTypes = {
  readStat: PropTypes.func.isRequired,
  writeStat: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  min: state.app.min,
  max: state.app.max,
  present: state.app.present,
  defaultVal: state.app.present,
  step: state.app.step,

  loanStep: state.app.loanStep,
  loanSum: state.app.loanSum,
  loanPeriod: state.app.loanPeriod,
  yearMin: state.app.yearMin,
  yearMAx: state.app.yearMAx,
  loanPresent: state.app.loanPresent
});
export default connect(
  mapStateToProps,
  { readStat, writeStat }
)(SliderNew);
