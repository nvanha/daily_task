import React, { Component } from "react";

class DashboardTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }
  componentDidMount() {
    if (this.props.taskEditing) {
      this.setState({
        id: this.props.taskEditing.id,
        name: this.props.taskEditing.name,
        status: this.props.taskEditing.status,
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.taskEditing) {
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        status: nextProps.taskEditing.status,
      });
    } else if (nextProps && nextProps.taskEditing === null) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
    }
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };
  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: false,
    });
    this.props.onClear();
  };
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  };
  render() {
    var { id } = this.state;
    return (
      <div className="taskform">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Write a new task"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <select
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={false}>Active</option>
              <option value={true}>Done</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit">{id === "" ? "Add" : "Edit"}</button>
            <button type="button" onClick={this.onClear}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DashboardTaskForm;
