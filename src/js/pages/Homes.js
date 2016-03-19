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
    return (
      <div>
        <div>
          <img src='../../public/images/nameText.png'/>
          <img className="navCloud" src='../../public/images/navCloud.png'/>
        </div>
        <div className="homeContainer">
          <Link to="projects">

              <img src='../../public/images/sandCastle.png' />

          </Link>
          <Link to="about" >

              <img src='../../public/images/tiki_Levi.png' />

          </Link>
        </div>
      </div>
    );
  }
}
