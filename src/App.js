import React from "react";
import axios from "axios";
import "./App.css";
import Student from "./Student/Student";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoaded: false,
      showDetails: false,
      input: "",
    };
  }

  componentDidMount() {
    axios.get("https://hatchways.io/api/assessment/students ").then((res) => {
      this.setState({
        students: res.data.students,
        isLoaded: true,
      });
    });
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }



  filterStudents = (input) => {
    return (student) => {
      return (
        student.firstName.toLowerCase().includes(input.toLowerCase()) ||
        student.lastName.toLowerCase().includes(input.toLowerCase()) ||
        !input
      );
    };
  };


  render() {
    const { isLoaded } = this.state;
    // console.log(studentArray);


    if (!isLoaded) {
      return <div className="App">Loading...</div>;
    } else {
      return (
        <div className="App">
          <input
            type="text"
            onChange={this.handleInput}
            className="name-input"
          />

          {this.state.students
            .filter(this.filterStudents(this.state.input))
            .map((student) => {
              return (
                <Student
                  pic={student.pic}
                  firstName={student.firstName}
                  lastName={student.lastName}
                  email={student.email}
                  company={student.company}
                  skill={student.skill}
                  grades={student.grades}
                />

              );
            })}
        </div>
      );
    }
  }
}
export default App;
