import React from "react";

import { IndexLink, Link } from "react-router";

export default class AboutMe extends React.Component {
  constructor(props) {
    super();
  }
  componentWillMount(){
      document.body.setAttribute("class", "aboutBackGround");
    }


  render() {
    const linkStyle = { textDecoration: 'none'};

    return (
      <div>
        <h1>About Me</h1>
        <Link to="/" style={linkStyle}>
            <button className="test" type="button">
              Home
            </button>
        </Link>
      </div>
    );
  }
}
