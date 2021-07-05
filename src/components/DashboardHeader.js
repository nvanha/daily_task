import React, { Component } from "react";

class DashboardHeader extends Component {
  render() {
    return (
      <div className="dashboard-header">
        <div className="dashboard-header__avt">
          <img
            src="https://raw.githubusercontent.com/nvanha/myweb/master/images/logo/logo.png"
            alt="logo"
          />
        </div>
        <div className="dashboard-header__title">
          <p>nvan.ha</p>
        </div>
      </div>
    );
  }
}

export default DashboardHeader;
