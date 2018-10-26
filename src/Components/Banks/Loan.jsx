import React, { Component } from "react";
import { Row, Container } from "reactstrap";
import { Table } from "react-bootstrap";
import faker from "faker/locale/en_GB";

import { Form, FormGroup } from "reactstrap";

let Loaners = [];

class Loan extends Component {
  constructor(props) {
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
    this.onRadioClick = this.onRadioClick.bind(this);
    this.state = {
      test: false,
      numberOfBanks: 0,
      loaners: [],
      options: [
        {
          value: 3,
          chosen: false
        },
        {
          value: 5,
          chosen: false
        },
        {
          value: 10,
          chosen: false
        }
      ]
    };
    this.buttonActive = false;
    this.buttonClass = "btn btn-primary btn-lg btn-block";
    this.number = 0;
  }

  onRadioClick(e) {
    this.number = parseInt(e.target.value);
    console.log([this.buttonClass]);
    this.componentDidMount();
    console.log("The number of iteration is: " + [this.number]);
    console.log("The number of iteration is: " + e.target.value);
  }

  formSubmit(e) {
    e.preventDefault();
    this.setState({ [this.state.loaners]: Loaners });
  }

  componentDidMount() {
    Loaners = [];
    for (let index = 0; index < this.number; index++) {
      const loaner = {
        id: index + 1,
        Company: faker.company.companyName(),
        Field: faker.company.bsNoun(),
        Speciality: faker.company.bs(),
        Type: faker.finance.accountName(),
        Avatar: faker.image.business()
      };
      Loaners.push(loaner);
    }
  }

  render() {
    const imgStyle = {
      height: "142px",
      width: "142px",
      borderradius: "25px",
      border: "2px solid #fff",
      padding: "20px"
    };

    const tbody = Loaners.map(loaner => {
      return (
        <tr key={loaner.id}>
          <td>
            <img style={imgStyle} src={loaner.Avatar} alt="" />
          </td>
          <td>{loaner.Company}</td>
          <td>{loaner.Field}</td>
          <td>{loaner.Speciality}</td>
          <td>{loaner.Type}</td>
        </tr>
      );
    });
    return (
      <Form name="slideForm" onSubmit={this.formSubmit}>
        <FormGroup>
          <Container className="fluid">
            <hr />
            <fieldset>
              <legend>Choose your options</legend>

              <div>
                <input
                  type="radio"
                  id="3"
                  name="optionRadios"
                  value="3"
                  onChange={this.onRadioClick}
                />
                <label>3 years</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="5"
                  name="optionRadios"
                  value="5"
                  onChange={this.onRadioClick}
                />
                <label>5 years</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="10"
                  name="optionRadios"
                  value="10"
                  onChange={this.onRadioClick}
                />
                <label>10 years</label>
              </div>
            </fieldset>
            <button
              type="submit"
              disabled={this.buttonActive}
              className={[this.buttonClass]}
            >
              Jämför lån
            </button>

            <Row>
              <Table striped condensed hover>
                <thead>
                  <tr>
                    <th />
                    <th>Company</th>
                    <th>Field</th>
                    <th>Speciality</th>
                    <th>Loan</th>
                  </tr>
                </thead>
                <tbody>{tbody}</tbody>
              </Table>
            </Row>
          </Container>
        </FormGroup>
      </Form>
    );
  }
}

export default Loan;
