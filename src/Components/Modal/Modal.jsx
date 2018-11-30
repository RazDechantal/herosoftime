import React, { Component } from "react";
import { Row, Col, Button, Form, FormGroup, Label, input } from "reactstrap";
import Modal from "react-modal";

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

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.msgHandler = this.msgHandler.bind(this);
    this.valHandler = this.valHandler.bind(this);
    this.currHandler = this.companyHandler.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    /*this.state = {
      currencies: []
    };*/
    this.state = {
      company: "",
      InterestRate: 0,
      MaxLoan: 0,
      MaxPer: 0,
      MonthlyPayment: 0,
      TotalExpense: 0,
      AgeLimit: 0,
      MinIncome: 0,
      CustomerLimit: "Yes",
      BadRecordCheck: "Yes",
      logo: "",
      private: "Yes",
      sms: "Yes",
      link: "Yes"
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
      date: nextProps.date,
      currency: nextProps.currency,
      value: nextProps.value,
      msg: nextProps.msg
    });
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

  companyHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  valHandler(e) {
    this.setState({ value: e.target.value });
  }

  msgHandler(e) {
    this.setState({ msg: e.target.value });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item);
  }

  render() {
    return (
      <div>
        <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
        <form>
          <Label for="exampleNumber">Company</Label>
          <input
            type="text"
            name="company"
            id="companyid"
            placeholder="Enter the name of the company"
            value={this.state.company}
            onChange={e => this.companyHandler(e)}
          />

          <Label for="exampleSelect">Private Loan</Label>
          <input
            type="select"
            name="private"
            id="privateloanid"
            value={this.state.private}
            onChange={e => this.companyHandler(e)}
          >
            <option>Yes</option>
            <option>No</option>
          </input>

          <Label for="exampleSelect">SMS Loan</Label>
          <input
            type="select"
            name="sms"
            id="smsid"
            value={this.state.sms}
            onChange={e => this.companyHandler(e)}
          >
            <option>Yes</option>
            <option>No</option>
          </input>

          <Label for="exampleSelect">Customer limit</Label>
          <input
            type="number"
            name="CustomerLimit"
            id="customerlimitid"
            placeholder="Customer limit"
            step={1000}
            value={this.state.CustomerLimit}
            onChange={e => this.companyHandler(e)}
          />

          <Label for="exampleSelect">Age limit</Label>
          <input
            type="number"
            name="AgeLimit"
            id="agelimitid"
            step={1}
            min={16}
            max={100}
            placeholder="Set Age limit"
            value={this.state.AgeLimit}
            onChange={e => this.companyHandler(e)}
          />

          <Label for="exampleUrl">Logo</Label>
          <input
            type="text"
            name="logo"
            id="logoid"
            placeholder="Logo here!"
            value={this.state.logo}
            onChange={e => this.companyHandler(e)}
          />

          <Label for="exampleNumber">Interest rate</Label>
          <input
            type="number"
            name="interestrate"
            id="interestrateid"
            step={0.1}
            placeholder="Interest Rate"
          />

          <Label for="exampleNumber">Max Loan</Label>
          <input
            type="number"
            name="maxloan"
            id="maxloanid"
            step={this.state.maxloanstep < 9500 ? 500 : 10000}
            placeholder="Max Loan"
          />

          <Label for="exampleNumber">Max Period</Label>
          <input
            type="number"
            name="maxperiod"
            id="maxperiodid"
            step={1}
            min={3}
            max={180}
            placeholder="Max period in month"
          />

          <Label for="exampleSelect">Credit Check</Label>
          <input type="select" name="credit check" id="creditcheckid">
            <option>Yes</option>
            <option>No</option>
          </input>

          <Label for="exampleSelect">Minimum Income</Label>
          <input type="select" name="minincome" id="minincomeid">
            <option>100000-200000</option>
            <option>200000-300000</option>
            <option>300000-400000</option>
            <option>400000-500000</option>
            <option>more than 500000</option>
          </input>

          <Label for="exampleUrl">Link</Label>
          <input
            type="text"
            name="link"
            id="linkid"
            placeholder="Link to bank"
          />

          <Label for="exampleSelect">Customer limit</Label>
          <input type="select" name="credit check" id="customerlimit">
            <option>Yes</option>
            <option>No</option>
          </input>

          <Label for="exampleUrl">Logo</Label>
          <input type="text" name="logo" id="logoid" placeholder="Logo here!" />

          <button>Save changes</button>
          <button onClick={this.closeModal}>close</button>
        </form>
      </div>
    );
  }
}

export default MyModal;
