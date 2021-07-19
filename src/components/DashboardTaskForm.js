import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class DashboardTaskForm extends Component {
  componentDidMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        category: this.props.itemEditing.category,
        day: this.props.itemEditing.day,
        status: this.props.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        category: nextProps.itemEditing.category,
        day: nextProps.itemEditing.day,
        status: nextProps.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };
  onClear = () => {
    this.props.onClearTask({
      id: "",
      name: "",
      category: "personal",
      day: "0",
      status: false,
    });
  };
  onCloseForm = () => {
    this.props.onCloseForm();
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    this.onClear();
    this.onCloseForm();
    this.props.toggleDashBoard();
  };
  render() {
    const { id } = this.props.itemEditing;
    return this.props.isDisplayForm ? (
      <div className="taskform">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>New Task</label>
            <input
              type="text"
              placeholder="Write a new task"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <label>Category</label>
            <select
              name="category"
              value={this.state.category}
              onChange={this.onChange}
              className="category"
            >
              <option value="personal">Personal</option>
              <option value="study">Study</option>
              <option value="work">Work</option>
              <option value="errands">Errands</option>
            </select>
            <label>
              <span>Status: </span>
              <span>Day: </span>
            </label>
            <select
              name="status"
              value={this.state.status}
              onChange={this.onChange}
              className="status"
            >
              <option value={false}>Pending</option>
              <option value={true}>Done</option>
            </select>
            <select
              name="day"
              value={this.state.day}
              onChange={this.onChange}
              className="day"
            >
              <option value={0}>Sunday</option>
              <option value={1}>Monday</option>
              <option value={2}>Tuesday</option>
              <option value={3}>Wednesday</option>
              <option value={4}>Thursday</option>
              <option value={5}>Friday</option>
              <option value={6}>Saturday</option>
              <option value={7}>Everyday</option>
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
    ) : (
      ""
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm());
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTaskForm);
