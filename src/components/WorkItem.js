import React, { Component } from "react";

class WorkItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  render() {
    var { task } = this.props;
    return (
      <div className="work-item">
        <div className="work-item__name">{task.name}</div>
        <div className="work-item__control">
          <span
            className={task.status === true ? "status true" : "status false"}
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Done" : "Active"}
          </span>
          <div className="space"></div>
          <button type="button" className="edit" onClick={this.onUpdate}>
            <i className="fas fa-pen"></i>
          </button>
          <button type="button" className="delete" onClick={this.onDelete}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default WorkItem;
