import React, { Component } from "react";
import WorkItem from "./WorkItem";
import { connect } from "react-redux";

class WorkList extends Component {
  render() {
    let { tasks } = this.props;
    const { keyword, filter } = this.props;
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
    tasks = tasks.filter((task) => {
      if (filter === -1) {
        return task;
      } else {
        return task.status === (filter === 0 ? true : false);
      }
    });
    const elmTasks = tasks.map((task) => {
      return (
        <WorkItem
          key={task.id}
          task={task}
          toggleDashBoard={this.props.toggleDashBoard}
        />
      );
    });
    return <div className="work-list">{elmTasks}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    keyword: state.searchTask,
    filter: state.filterTask,
  };
};

export default connect(mapStateToProps, null)(WorkList);
