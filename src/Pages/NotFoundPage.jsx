import React, { Component } from "react";

import "../Style/404.scss";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="error-page-wrap">
        <article className="error-page gradient">
          <hgroup>
            <h1>404</h1>
            <h2>oops! page not found</h2>
          </hgroup>
          <a href="./" title="Back to site" className="error-back">
            back
          </a>
        </article>
      </div>
    );
  }
}
