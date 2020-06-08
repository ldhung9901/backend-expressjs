import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"
export default class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
 
  onSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
     
    };
    console.log(user);
    
axios.post('http://localhost:5000/users/add',user)


   this.setState({
       username:""
   })

  }
  render() {
    return (
        <div className="container-fluid">
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
