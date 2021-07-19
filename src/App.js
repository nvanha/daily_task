import "./App.css";
import React, { Component } from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardNav from "./components/DashboardNav";
import DashboardTaskForm from "./components/DashboardTaskForm";
import HeaderTitle from "./components/HeaderTitle";
import HeaderDesc from "./components/HeaderDesc";
import HeaderControl from "./components/HeaderControl";
import WorkList from "./components/WorkList";
import $ from "jquery";
import { connect } from "react-redux";
import * as actions from "./actions/index";

class App extends Component {
  toggleDashBoard = () => {
    $(".dashboard").toggleClass("show-dashboard");
    $(".toggle-icon").toggleClass("fa-plus");
    $(".toggle-icon").toggleClass("fa-times");
  };
  onToggleForm = () => {
    const { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== "") {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: "",
      name: "",
      category: "personal",
      day: "0",
      status: false,
    });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="dashboard">
            <DashboardHeader />
            <DashboardNav />
            <div className="dashboard-add-work">
              <DashboardTaskForm toggleDashBoard={this.toggleDashBoard} />
              <button
                type="button"
                className="addwork"
                onClick={this.onToggleForm}
              >
                <i className="fas fa-plus"></i>New Task
              </button>
            </div>
          </nav>
          <div className="content">
            <div className="content-inner">
              <header className="header">
                <HeaderTitle />
                <HeaderDesc />
                <HeaderControl />
              </header>
              <main className="main">
                <WorkList toggleDashBoard={this.toggleDashBoard} />
              </main>
            </div>
          </div>
        </div>
        <span id="toggle-show-dashboard" onClick={this.toggleDashBoard}>
          <i className="toggle-icon fas fa-plus"></i>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
