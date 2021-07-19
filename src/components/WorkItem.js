import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class WorkItem extends Component {
  onDeleteTask = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  };
  onUpdate = () => {
    this.props.toggleDashBoard();
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  };
  handleDayOfWeek = (day) => {
    switch (day) {
      case 0:
        return "sunday";
      case 1:
        return "monday";
      case 2:
        return "tuesday";
      case 3:
        return "wednesday";
      case 4:
        return "thursday";
      case 5:
        return "friday";
      case 6:
        return "saturday";
      default:
        return "everyday";
    }
  };
  handleIconCategory = (category) => {
    switch (category) {
      case "personal":
        return "fas fa-user-clock";
      case "study":
        return "fas fa-pen-alt";
      case "work":
        return "fas fa-briefcase";
      case "errands":
        return "fas fa-clipboard-list";
      default:
        return "";
    }
  };
  render() {
    const { task } = this.props;
    const day = this.handleDayOfWeek(task.day);
    const iconCate = this.handleIconCategory(task.category);
    return (
      <div className={`work-item demo ${task.category}`}>
        <label className="day">{day}</label>
        <div className="work-item__category">
          <span>
            <i className={iconCate}></i>
          </span>
          <p>{task.category}</p>
        </div>
        <div className="work-item__name">{task.name}</div>
        <div className="work-item__control">
          <span
            className={task.status === true ? "status true" : "status false"}
            onClick={() => this.props.onUpdateStatusTask(task.id)}
          >
            {task.status === true ? "Done" : "Pending"}
          </span>
          <div className="space"></div>
          <button type="button" className="edit" onClick={this.onUpdate}>
            <i className="fas fa-pen"></i>
          </button>
          <button type="button" className="delete" onClick={this.onDeleteTask}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateStatusTask: (id) => {
      dispatch(actions.updateStatusTask(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onOpenForm: () => {
      dispatch(actions.openForm());
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(null, mapDispatchToProps)(WorkItem);
