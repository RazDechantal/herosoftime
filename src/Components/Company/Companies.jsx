import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Row, Col, Button } from "reactstrap";

import "../Company/company.scss";
import MyModal from "../Modal/Modal";
import { companyAction } from "../../Action/companyAction";
import { update } from "../../Action/companyAction";
import { deleteItem } from "../../Action/companyAction";

class Companies extends Component {
  constructor(props) {
    super(props);

    this.btnClick = this.btnClick.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.companyHandler = this.companyHandler.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);

    this.state = {
      companies: [],
      requiredItem: 9999,
      modalIsOpen: false,
      editPressed: false,
      deleted: false,
      MaxLoan: 1,
      MaxPer: 1,
      loan: {
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
      }
    };
  }

  componentWillMount() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    this.props.companyAction(filter);
  }

  btnClick() {
    var filter = {
      loanSum: this.props.present,
      loanPeriod: this.props.loanPeriod
    };
    this.props.companyAction(filter);
  }

  replaceModalItem(loan) {
    this.setState({ requiredItem: loan.id });
    this.setState({ modalIsOpen: true });
    this.setState({ loan: loan });
  }

  companyHandler(e) {
    e.stopPropagation();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.loan);
  }

  saveModalDetails(item) {
    this.props.update(item);
  }

  deleteItem(item) {
    this.props.deleteItem(item);
    var p = this.props;
    var filter = {
      loanSum: p.present,
      loanPeriod: p.loanPeriod
    };
    p.companyAction(filter);
  }

  render() {
    const banks = [];
    const { loans, role, isEmpty } = this.props;

    const companyitems = (
      <div>
        {loans
          ? loans.map(
              loan => (
                banks.push(loan),
                (
                  <div key={loan.id} className="decoration">
                    <Row>
                      <Col xs="4">
                        <img src={loan.logo} alt="" />
                        <hr />
                        <div>
                          <Button
                            hidden={
                              role === "SuperAdmin" && !isEmpty ? false : true
                            }
                            color="warning"
                            onClick={() => this.replaceModalItem(loan)}
                          >
                            Edit
                          </Button>
                          <Button
                            hidden={
                              role === "SuperAdmin" && !isEmpty ? false : true
                            }
                            color="danger"
                            onClick={() => this.deleteItem(loan)}
                          >
                            Delete
                          </Button>{" "}
                          <hr />
                        </div>
                      </Col>
                      <Col xl="4">
                        <p>Interestrate: {loan.InterestRate}</p>
                        <p>Max loan: {loan.MaxLoan}</p>
                        <p>Max Period: {loan.MaxPer}</p>
                        <p>Credit-check: {loan.NoCreditCheck}</p>
                      </Col>
                      <Col xl="4">
                        <p>Min-income: {loan.MinIncome}</p>
                        <p>Customer-limit: {loan.CustomerLimit}</p>
                        <p>BadRecordCheck: {loan.BadRecordCheck}</p>
                        <a
                          href={loan.link}
                          className="button small applyYellow btn btn-primary btn-block"
                        >
                          Se erbjudande
                        </a>
                        <hr />
                      </Col>
                    </Row>
                  </div>
                )
              )
            )
          : null}
      </div>
    );

    const requiredItem = this.state.requiredItem;

    let modalData;

    for (let element of banks) {
      if (element.id === requiredItem) {
        modalData = element;
        break;
      }
    }

    return (
      <div>
        <button
          type="submit"
          disabled={this.buttonActive}
          className="btn btn-primary btn-lg btn-block"
          onClick={this.btnClick}
        >
          <h1>Jämför Lån</h1>
        </button>
        <hr />
        {companyitems}

        {modalData ? (
          <MyModal
            id={modalData.id}
            company={modalData.company}
            InterestRate={modalData.InterestRate}
            MaxLoan={modalData.MaxLoan}
            MaxPer={modalData.MaxPer}
            MonthlyPayment={modalData.MonthlyPayment}
            TotalExpense={modalData.TotalExpense}
            AgeLimit={modalData.AgeLimit}
            NoCreditCheck={modalData.NoCreditCheck}
            MinIncome={modalData.MinIncome}
            CustomerLimit={modalData.CustomerLimit}
            BadRecordCheck={modalData.BadRecordCheck}
            logo={modalData.logo}
            private={modalData.private}
            sms={modalData.sms}
            link={modalData.link}
            contentLabel="Example Modal"
            openModal={true}
            saveModalDetails={this.saveModalDetails}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loans: state.companies.items,
    errorCompanyReadWrite: state.companies.error,
    role: state.firebase.profile.role,
    isEmpty: state.firebase.auth.isEmpty,
    userId: state.firebase.auth.uid,
    email: state.firebase.auth.email,
    loanSum: state.app.loanSum,
    loanPresent: state.app.loanPresent,
    present: state.app.present,
    loanPeriod: state.app.loanPeriod,
    yearMin: state.app.yearMin,
    yearMax: state.app.yearMax
  };
};
export default compose(
  connect(
    mapStateToProps,
    { companyAction, update, deleteItem }
  ),
  firestoreConnect(() => [
    {
      collection: "Loans"
    }
  ])
)(Companies);
