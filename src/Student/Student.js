import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  averageGrades(gradesArray) {
    var sum = 0;
    for (var i = 0; i < gradesArray.length; i++) {
      sum += parseInt(gradesArray[i], 10);
    }
    return (sum / gradesArray.length).toFixed(2);
  }

  moreDetails = () => {
    let expand = this.state.showDetails;
    this.setState({ showDetails: !expand });
  };

  render() {
    console.log(this.state.showDetails);
    return (
      <div>
        <div>
          <div key={this.props.id} className="Student">
            <img
              src={this.props.pic}
              alt={this.props.firstName}
              className="student-image"
            ></img>
            <div className="expand-btn" onClick={this.moreDetails}>
              +
            </div>
            <h1 className="student-name">
              {this.props.firstName} {this.props.lastName}
            </h1>
            <br></br>
            Email: {this.props.email}
            <br></br>
            Company: {this.props.company}
            <br></br>
            Special Skill: {this.props.skill}
            <br></br>
            Grades: {this.averageGrades(this.props.grades)}%<br></br>

            {this.state.showDetails === true
              ? this.props.grades.map((grade) => {
                  return (
                    <div>
                      <li className="grade">{grade}</li>
                      <br></br>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
