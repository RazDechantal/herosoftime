import React, { Component } from "react";
import Modal from "react-modal";
import { Row, Form, FormGroup, Label, Col, Input } from "reactstrap";

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

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);

    this.state = {
      maxloanstep: 1000,
      requiredItem: 0,
      modalIsOpen: false,
      editPressed: false,
      id: 0,
      company: "test",
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

  componentWillMount() {
    this.setState({ id: this.props.id });
    this.setState({ company: this.props.company });
    this.setState({ InterestRate: this.props.InterestRate });
    this.setState({ MaxLoan: this.props.MaxLoan });
    this.setState({ MaxPer: this.props.MaxPer });
    this.setState({ MonthlyPayment: this.props.MonthlyPayment });
    this.setState({ TotalExpense: this.props.TotalExpense });
    this.setState({ MinIncome: this.props.MinIncome });
    this.setState({ CustomerLimit: this.props.CustomerLimit });
    this.setState({ BadRecordCheck: this.props.BadRecordCheck });
    this.setState({ logo: this.props.logo });
    this.setState({ sms: this.props.sms });
    this.setState({ link: this.props.link });
    this.setState({ AgeLimit: this.props.AgeLimit });
  }

  saveModalDetails() {
    const item = {
      id: parseInt(this.state.id),
      company: this.state.company,
      InterestRate: parseInt(this.state.InterestRate),
      MaxLoan: parseInt(this.state.MaxLoan),
      MaxPer: parseInt(this.state.MaxPer),
      MonthlyPayment: parseInt(this.state.MonthlyPayment),
      TotalExpense: parseInt(this.state.TotalExpense),
      AgeLimit: parseInt(this.state.AgeLimit),
      MinIncome: parseInt(this.state.MinIncome),
      CustomerLimit: this.state.CustomerLimit,
      BadRecordCheck: this.state.BadRecordCheck,
      logo: this.state.logo,
      private: this.state.private,
      sms: this.state.sms,
      link: this.state.link
    };

    this.props.saveModalDetails(item);
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
    e.stopPropagation();
    let v;

    if (e.target.type === "number") {
      if (e.target.step > 0 && e.target.step < 1) {
        v = parseFloat(e.target.value);
      } else {
        v = parseInt(e.target.value);
      }
    } else {
      v = e.target.value;
    }

    this.setState({ [e.target.name]: v });
  }

  handleSave() {
    const item = this.state;
    this.props.saveModalDetails(item);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.openModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Modify</h2>
          <Form onSubmit={this.handleSave}>
            <Row>
              <Col xs="6">
                <FormGroup>
                  <Label for="exampleNumber">Company</Label>
                  <Input
                    type="text"
                    name="company"
                    id="companyid"
                    placeholder="Enter the name of the company"
                    value={this.state.company}
                    onChange={e => this.companyHandler(e)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelect">Private Loan</Label>
                  <Input
                    type="select"
                    name="private"
                    id="privateloanid"
                    value={this.state.private}
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
                    value={this.state.sms}
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
                    value={this.state.CustomerLimit}
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
                    value={this.state.AgeLimit}
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
                    value={this.state.logo}
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
                    value={this.state.InterestRate}
                    onChange={e => this.companyHandler(e)}
                  />
                </FormGroup>
              </Col>

              <Col xs="6">
                <FormGroup>
                  <Label for="exampleNumber">Max Loan</Label>
                  <Input
                    type="number"
                    name="MaxLoan"
                    id="maxloanid"
                    step={this.state.maxloanstep < 9500 ? 500 : 10000}
                    max={1000000}
                    placeholder="Max Loan"
                    value={this.state.MaxLoan}
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
                    value={this.state.MaxPer}
                    onChange={e => this.companyHandler(e)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelect">Credit Check</Label>
                  <Input
                    type="select"
                    name="BadRecordCheck"
                    id="creditcheckid"
                    value={this.state.BadRecordCheck}
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
                    value={this.state.MinIncome}
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
                    value={this.state.link}
                    onChange={e => this.companyHandler(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleUrl">Link</Label>
                  <Input
                    type="text"
                    name="link"
                    id="linkid"
                    placeholder="Link here!"
                    value={this.state.link}
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
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
