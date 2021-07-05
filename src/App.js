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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        /* 
        id: unique
        name
        status
      */
      ],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }
  toggleDashBoard = () => {
    $(".dashboard").toggleClass("show-dashboard");
    $(".toggle-icon").toggleClass("fa-plus");
    $(".toggle-icon").toggleClass("fa-times");
  };
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }
  };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onSubmit = (data) => {
    var index = this.findIndex(data.id);
    var { tasks } = this.state;
    if (index === -1) {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    this.setState({
      taskEditing: tasks[index],
    });
    this.toggleDashBoard();
    this.onShowForm();
  };
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.onCloseForm();
    }
  };
  onClear = () => {
    if (this.state.taskEditing !== null) {
      this.setState({
        taskEditing: null,
      });
    }
  };
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4();
  }
  render() {
    var { tasks, isDisplayForm, taskEditing, filter } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="dashboard">
            <DashboardHeader />
            <DashboardNav />
            <div className="dashboard-add-work">
              {isDisplayForm === true ? (
                <DashboardTaskForm
                  onSubmit={this.onSubmit}
                  onClear={this.onClear}
                  onCloseForm={this.onCloseForm}
                  taskEditing={taskEditing}
                />
              ) : (
                ""
              )}
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
                <HeaderControl onFilter={this.onFilter} />
              </header>
              <main className="main">
                <WorkList
                  tasks={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                />
              </main>
            </div>
          </div>
        </div>
        <a
          role="button"
          id="toggle-show-dashboard"
          onClick={this.toggleDashBoard}
        >
          <i className="toggle-icon fas fa-plus"></i>
        </a>
      </div>
    );
  }
}

export default App;
