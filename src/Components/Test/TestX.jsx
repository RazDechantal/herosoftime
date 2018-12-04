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

export default class TestX extends Component {
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
    //alert(this.props.openModal);
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Jewel
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  <span className="modal-lable">Currency:</span>
                  <input
                    value={this.props.company}
                    onChange={e => this.currHandler(e)}
                  />
                </p>
                <p>
                  <span className="modal-lable">Value:</span>
                  <input
                    value={this.props.MaxPer}
                    onChange={e => this.valHandler(e)}
                  />
                </p>
                <p>
                  <span className="modal-lable">Msg:</span>
                  <input
                    value={this.props.logo}
                    onChange={e => this.msgHandler(e)}
                  />
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    this.handleSave();
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}
