import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class Search extends Component {
  onChange = (event) => {
    let target = event.target;
    let value = target.value;
    this.props.onSearchTask(value);
  };
  render() {
    const { keyword } = this.props;
    return (
      <div className="header-control__search">
        <form>
          <input
            type="text"
            placeholder="Search work..."
            name="keyword"
            value={keyword}
            onChange={this.onChange}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.searchTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTask: (keyword) => {
      dispatch(actions.searchTask(keyword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
