import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class Options extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">
            <h6>{this.props.selected}</h6>
          </Label>
          <Input type="select" name="select" id="exampleSelect">
            <option value="" disabled selected>
              {this.props.optionType}
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(mapStateToProps)(Options);
