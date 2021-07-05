import React, { Component } from "react";
import WorkItem from "./WorkItem";

class WorkList extends Component {
  onUpdateStatus;
  render() {
    var { tasks } = this.props;
    var elmTasks = tasks.map((task) => {
      return (
        <WorkItem
          key={task.id}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
    });
    return <div className="work-list">{elmTasks}</div>;
  }
}

export default WorkList;
