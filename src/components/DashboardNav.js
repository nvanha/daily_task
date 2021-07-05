import React, { Component } from "react";

class DashboardNav extends Component {
  render() {
    return (
      <ul className="dashboard-nav">
        <li className="dashboard-item selected">
          <span>
            <i className="fas fa-play"></i>
          </span>
          <a role="button">
            <i className="fas fa-check"></i>Daily Task
          </a>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="fas fa-play"></i>
          </span>
          <a role="button">
            <i className="fas fa-user-clock"></i>Personal
          </a>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="fas fa-play"></i>
          </span>
          <a role="button">
            <i className="fas fa-briefcase"></i>Work
          </a>
        </li>
        <li className="dashboard-item">
          <span>
            <i className="fas fa-play"></i>
          </span>
          <a role="button">
            <i className="fas fa-handshake"></i>Errands
          </a>
        </li>
      </ul>
    );
  }
}

export default DashboardNav;
