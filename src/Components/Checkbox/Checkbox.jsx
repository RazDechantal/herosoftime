import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { readBoxStat } from "../../Action/boxReadAction";
import { writeBoxStat } from "../../Action/boxRefreshAction";

import "../Checkbox/checkbox.scss";

class Checkbox extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.props.readBoxStat();
  }

  handleChange(e) {
    const boxes = {
      privateBox: document.getElementById("privateBoxId").checked,
      anmarkningBox: document.getElementById("anmarkningBoxId").checked,
      ucBox: document.getElementById("ucBoxId").checked,
      smsBox: document.getElementById("smsBoxId").checked
    };

    this.props.writeBoxStat(boxes, "WRITE_BOX_STAT");
  }

  render() {
    return (
      <div className="item-categories">
        <div className="item-heading">Sortera olika lån</div>
        <div className="checkboxFive">
          <input
            type="checkbox"
            id="privateBoxId"
            defaultChecked={this.props.privateBox}
            name="Privatln"
            className="tag-check"
            onChange={this.handleChange}
          />
          <label id="Privatln" className="tag-container">
            Privatlån
          </label>
          <input
            type="checkbox"
            id="anmarkningBoxId"
            defaultChecked={this.props.anmarkningBox}
            name="Lnmedbetalningsanmrkning"
            className="tag-check"
            onChange={this.handleChange}
          />
          <label id="Lnmedbetalningsanmrkning" className="tag-container">
            Lån med betalningsanmärkning
          </label>
          <input
            type="checkbox"
            id="ucBoxId"
            defaultChecked={this.props.ucBox}
            name="LnutanUC"
            className="tag-check"
            onChange={this.handleChange}
          />
          <label id="LnutanUC" className="tag-container">
            Lån utan UC
          </label>
          <input
            type="checkbox"
            id="smsBoxId"
            defaultChecked={this.props.smsBox}
            name="Smslnmeddirektutbetalning"
            className="tag-check"
            onChange={this.handleChange}
          />
          <label id="Smslnmeddirektutbetalning" className="tag-container">
            Smslån med direktutbetalning
          </label>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  readBoxStat: PropTypes.func.isRequired,
  writeBoxStat: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  privateBox: state.app.privateBox,
  anmarkningBox: state.app.anmarkningBox,
  ucBox: state.app.ucBox,
  smsBox: state.app.smsBox
});

export default connect(
  mapStateToProps,
  { readBoxStat, writeBoxStat }
)(Checkbox);
