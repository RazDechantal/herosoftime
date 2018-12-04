import React, { Component } from "react";
import Modal from "react-modal";

import { Input, Row, Col, Button, Form, FormGroup, Label } from "reactstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.props.openModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Modify</h2>
          <Form onSubmit={this.saveModalDetails}>
            <FormGroup>
              <Label for="exampleNumber">Company</Label>
              <Input
                type="text"
                name="company"
                id="companyid"
                placeholder="Enter the name of the company"
                value={this.props.company}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Private Loan</Label>
              <Input
                type="select"
                name="private"
                id="privateloanid"
                value={this.props.private}
                onChange={e => this.companyHandler(e)}
              >
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">SMS Loan</Label>
              <Input
                type="select"
                name="sms"
                id="smsid"
                value={this.props.sms}
                onChange={e => this.companyHandler(e)}
              >
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Customer limit</Label>
              <Input
                type="select"
                name="CustomerLimit"
                id="customerlimitid"
                value={this.props.CustomerLimit}
                onChange={e => this.companyHandler(e)}
              >
                <option>Yes</option>
                <option>None</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Age limit</Label>
              <Input
                type="number"
                name="AgeLimit"
                id="agelimitid"
                step={1}
                min={16}
                max={100}
                placeholder="Set Age limit"
                value={this.props.AgeLimit}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleUrl">Logo</Label>
              <Input
                type="text"
                name="logo"
                id="logoid"
                placeholder="Logo here!"
                value={this.props.logo}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleNumber">Interest rate</Label>
              <Input
                type="number"
                name="InterestRate"
                id="interestrateid"
                step={0.1}
                placeholder="Interest Rate"
                value={this.props.InterestRate}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleNumber">Max Loan</Label>
              <Input
                type="number"
                name="MaxLoan"
                id="maxloanid"
                step={this.props.maxloanstep < 9500 ? 500 : 10000}
                max={1000000}
                placeholder="Max Loan"
                value={this.props.MaxLoan}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleNumber">Max Period</Label>
              <Input
                type="number"
                name="MaxPer"
                id="maxperiodid"
                step={1}
                min={3}
                max={180}
                placeholder="Max period in month"
                value={this.props.MaxPer}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Credit Check</Label>
              <Input
                type="select"
                name="BadRecordCheck"
                id="creditcheckid"
                value={this.props.BadRecordCheck}
                onChange={e => this.companyHandler(e)}
              >
                <option>Yes</option>
                <option>No</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Minimum Income</Label>
              <Input
                type="number"
                name="MinIncome"
                id="minincomeid"
                step={10000}
                min={100000}
                max={1000000}
                value={this.props.MinIncome}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUrl">Link</Label>
              <Input
                type="text"
                name="link"
                id="linkid"
                placeholder="Link to bank"
                value={this.props.link}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleUrl">Logo</Label>
              <Input
                type="text"
                name="logo"
                id="logoid"
                placeholder="Logo here!"
                value={this.props.logo}
                onChange={e => this.companyHandler(e)}
              />
            </FormGroup>

            <button
              type="submit"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Save changes
            </button>
            <button onClick={this.closeModal}>close</button>
          </Form>
        </Modal>
      </div>
    );
  }
}
