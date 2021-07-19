import React, { Component } from "react";
import Search from "./Search";
import Filter from "./Filter";

class HeaderControl extends Component {
  render() {
    return (
      <div className="header-control">
        <Search />
        <Filter />
      </div>
    );
  }
}

export default HeaderControl;
