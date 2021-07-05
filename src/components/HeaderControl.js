import React, { Component } from "react";

class HeaderControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, // All: -1, Active: 0, Done: 1
    };
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };
  dropdownShow = () => {
    this.setState({
      dropdownMenu: !this.state.dropdownMenu,
    });
  };
  render() {
    var { filterName, filterStatus } = this.state;
    return (
      <div className="header-control">
        <div className="header-control__search">
          <form>
            <input
              type="text"
              placeholder="Search work..."
              name="filterName"
              value={filterName}
              onChange={this.onChange}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="header-control__sort">
          <select
            className="dropdown-menu"
            name="filterStatus"
            value={filterStatus}
            onChange={this.onChange}
          >
            <option className="sort_selected" value={-1}>
              All
            </option>
            <option className="sort_selected" value={0}>
              Active
            </option>
            <option className="sort_selected" value={1}>
              Done
            </option>
          </select>
        </div>
      </div>
    );
  }
}

export default HeaderControl;
