import React from "react";

import { Link } from "react-router";



import MenuItem from "../components/MenuItem"


export default class Featured extends React.Component {
  constructor() {
    super();
      this.state = {
        show: false
      }
    }

    componentWillMount(){
      document.body.setAttribute("class", "homeBackGround")
    }

    show() {
      this.setState({
        show: !this.state.show
      });
      // document.addEventListener('click', this.noShow.bind(this));
    }
    // noShow(){
    //   document.removeEventListener('click', this.noShow.bind(this));
    //   // this.setState({ show: false});
    //   console.log('noShow says the show is' + this.state.show)
    // }

  render() {
    return (
      <div>
        <div>
            <div className="menu">
              <div className={(this.state.show ? "visible" : "")}>

                <MenuItem >Contact Me</MenuItem>
                <MenuItem >Resume</MenuItem>
                <MenuItem >Technologies Used</MenuItem>
                <div className="menu-item" onClick={this.show.bind(this)}>Exit</div>
              </div>
            </div>

        </div>
        <div>
          <img src='../../public/images/nameText.png'/>
          <img className="navCloud" onClick={this.show.bind(this)} src='../../public/images/navCloud.png'/>
        </div>
        <div className="homeContainer">
          <Link to="projects">

              <img src='../../public/images/sandCastle_Sign.png' />

          </Link>
          <Link to="about" >

              <img src='../../public/images/tiki_Levi_Sign.png' />

          </Link>
        </div>
      </div>
    );
  }
}
