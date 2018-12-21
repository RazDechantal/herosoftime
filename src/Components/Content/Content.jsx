import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchContents } from "../../Action/contentAction";

class Content extends Component {
  componentWillMount() {
    this.props.fetchContents();
  }
  render() {
    const contentitems = this.props.contents.map(content => (
      <div key={content.id} content={content}>
        <h3>{content.title}</h3>
        <p>{content.text}</p>
      </div>
    ));

    return <div>{contentitems}</div>;
  }
}

Content.propTypes = {
  fetchContents: PropTypes.func.isRequired,
  contents: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  contents: state.contents.items
});
export default connect(
  mapStateToProps,
  { fetchContents }
)(Content);
