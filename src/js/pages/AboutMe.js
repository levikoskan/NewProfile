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


    return (
      <div>

        <Link to="/" >

              <img src='../../public/images/leftArrow.png' />

        </Link>
      </div>
    );
  }
}
