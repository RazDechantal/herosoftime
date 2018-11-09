import React, { Component } from "react";

import "../Checkbox/checkbox.scss";

class CheckboxNoRedux extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      boxes: {
        privateBox: false,
        anmarkningBox: false,
        ucBox: false,
        smsBox: false
      }
    };
  }

  handleChange(e) {
    const tempBoxes = {
      privateBox: document.getElementById("privateBoxId").checked,
      anmarkningBox: document.getElementById("anmarkningBoxId").checked,
      ucBox: document.getElementById("ucBoxId").checked,
      smsBox: document.getElementById("smsBoxId").checked
    };

    this.setState({ boxes: tempBoxes });
  }

  render() {
    return (
      <div className="item-categories">
        <div className="item-heading">Sortera olika lån</div>
        <div className="checkboxFive">
          <input
            type="checkbox"
            id="privateBoxId"
            defaultChecked={this.state.boxes.privateBox}
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
            defaultChecked={this.state.boxes.anmarkningBox}
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
            defaultChecked={this.state.boxes.ucBox}
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
            defaultChecked={this.state.boxes.smsBox}
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

export default CheckboxNoRedux;
