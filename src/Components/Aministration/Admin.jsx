import React, { Component } from "react";
import AddComp from "../Helper/AddComp";
import Company from "../Company/Companies";
import Test from "../Test/Test";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Test
          company={"testCompany"}
          InterestRate={3.5}
          MaxLoan={150000}
          MaxPer={15}
          MonthlyPayment={8888}
          TotalExpense={""}
          AgeLimit={22}
          NoCreditCheck={"Yes"}
          MinIncome={"100000"}
          CustomerLimit={"No"}
          BadRecordCheck={"No"}
          logo={"Logo"}
          private={"Private"}
          sms={"sms"}
          link={"link"}
          contentLabel="Example Modal"
          openModal={true}
        />
      </div>
    );
  }
}
