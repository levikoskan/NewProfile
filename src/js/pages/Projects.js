import React from "react";


import Project from "../components/Project";

export default class Projects extends React.Component {
  constructor(props) {
    super();
  };
  componentWillMount(){
      document.body.setAttribute("class", "projectsBackGround")
    }

  render() {


    return (
      <div className='projectContainer'>
        <h2>My Projects</h2>
        <Project/>
      </div>

    );
  }
}
