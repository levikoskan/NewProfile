import React from "react";

import { Link } from "react-router";




export default class Featured extends React.Component {
  constructor() {
    super();

    }

    componentWillMount(){
      document.body.setAttribute("class", "homeBackGround")

    }


  render() {
    const linkStyle = { textDecoration: 'none'};

    return (
      <div >
          <h4>Home Page</h4>
          <Link to="about" style={linkStyle}>
            <button type="button">
              About Me
            </button>
          </Link>
          <Link to="projects" style={linkStyle}>
            <button type="button">
              Projects
            </button>
          </Link>

      </div>
    );
  }
}
