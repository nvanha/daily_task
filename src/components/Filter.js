import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Filter extends Component {
  onChange = (event) => {
    let target = event.target;
    let value = target.value;
    this.props.onFilterTask(value);
  };
  render() {
    const { filter } = this.props;
    return (
      <div className="header-control__sort">
        <select
          className="dropdown-menu"
          name="filter"
          value={filter}
          onChange={this.onChange}
        >
          <option className="sort_selected" value={-1}>
            All
          </option>
          <option className="sort_selected" value={0}>
            Done
          </option>
          <option className="sort_selected" value={1}>
            Pending
          </option>
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.filterTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTask: (filter) => {
      dispatch(actions.filterTask(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
