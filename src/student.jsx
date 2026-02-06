import React, { Component } from "react";
import PropTypes from "prop-types";

class StudentProfile extends Component{
    // constructor is optional here, but kept for clarity
    constructor(props){
        super(props);
        console.log("Student Profile Initialized");
    }

    // Component Did Mount - Side Effects only
    componentDidMount(){
        console.log("Student Profile Mounted");
    }

    // Component Did Update - React to props changes
    componentDidUpdate(prevProps){
        if (prevProps.marks != this.props.marks){
            console.log(
                `Marks Updated: ${prevProps.marks} -- ${this.props.marks}`
             );
        }
    }

    // Component will Unmout - Clean up Only
    componentWillUnmount(){
        console.log("Student Profile Unmounted cleanup Done");
    }

    // Calcution Grade
    calculateGrade(marks){
        if (marks >= 75) return "A";
        if (marks >= 65) return "B";
        if (marks >= 50) return "C";
        if (marks >= 35) return "s";
        return "FAILL";
    }

    render(){
        const {name, marks } = this.props;
        const grade = this.calculateGrade(marks)

        return(
            <div 
                style={{
                    border: "1px solid #ccc",
                    padding: "12px",
                    width: "260px",
                    borderRadius: "6px"
                        }}
            >
                <h3>Student Profile</h3>
                <p> <strong>Name  : </strong> {name} </p>
                <p> <strong>Marks : </strong> {marks} </p>
                <p> <strong>Grade : </strong> {grade} </p>
            </div>
        )
    }
}

StudentProfile.protoTypes ={
    name: PropTypes.string.isRequired,
    marks: PropTypes.number.isRequired,
};

export default StudentProfile;