import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Excercise = (props) => (
  <tr>
    <td>{props.excercise.username}</td>
    <td>{props.excercise.description}</td>
    <td>{props.excercise.duration}</td>
    <td>{props.excercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.excercise._id}>
        {" "}
        <button className="btn btn-primary">edit </button>
      </Link>{" "}
      |{" "}
      <button
        className="btn btn-primary"
        onClick={() => {
          props.deleteExcercise(props.excercise._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);
export default class Excerciselist extends Component {
  constructor(props) {
    super(props);
    this.deleteExcercise = this.deleteExcercise.bind(this);
    this.state = {
      excercises: [],
    };
  }
  async componentDidMount() {
    let res = await axios.get("https://backend-express123.herokuapp.com/excercise");

    if (res.data.length > 0) {
      this.setState({
        excercises: res.data,
      });
    }
  }
  deleteExcercise(id) {
    axios.delete("https://backend-express123.herokuapp.com/excercise/" + id).then((res) => {
      this.setState({
        excercises: this.state.excercises.filter((item) => item._id !== id),
      });
    });
  }
  excerciseList() {
    return this.state.excercises.map((currentexercise) => {
      return (
        <Excercise
          excercise={currentexercise}
          deleteExcercise={this.deleteExcercise}
          key={currentexercise._id}
        />
      );
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.excerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
