import React from "react";

import { IndexLink, Link } from "react-router";

import Project from "../components/Project";

export default class Projects extends React.Component {
  constructor(props) {
    super();
  };
  componentWillMount(){
      document.body.setAttribute("class", "projectsBackGround")

    }

  render() {
        const array = [{pic: 'something', discription: 'something'}, {pic: 'pic2', discription: 'something else'}]


    return (
      <div>

        <Link to="/" >

              <img src='../../public/images/rightArrow.png' />

        </Link>

      <Project/>

      </div>

    );
  }
}
