import React, { Component } from "react";

class DashboardNav extends Component {
  render() {
    return (
      <ul className="dashboard-nav">
        <li className="dashboard-item selected">
          <span>
            <i className="fas fa-play"></i>
          </span>
          <p role="button">
            <i className="fas fa-check"></i>Daily Task
          </p>
        </li>
      </ul>
    );
  }
}

export default DashboardNav;
