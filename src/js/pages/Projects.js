import React from "react";

import { IndexLink, Link } from "react-router";



export default class Projects extends React.Component {
  constructor(props) {
    super();
  };
  componentWillMount(){
      document.body.setAttribute("class", "projectsBackGround")

    }

  render() {


    return (
      <div>
        <h1>Projects!</h1>
        <Link to="/" >
            <button className="test" type="button">
              Home
            </button>
        </Link>
      </div>

    );
  }
}
