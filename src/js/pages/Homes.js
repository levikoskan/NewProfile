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
    const path = './public/images/links/'
    return (
      <div>
        <div>
            <div className="menu">
              <div className={(this.state.show ? "visible" : "")}>

                <MenuItem >Contact Me</MenuItem>
                <MenuItem >Resume</MenuItem>
                <MenuItem >Technologies Used</MenuItem>
                <div className="menu-item" id="bottomBar">
                  <a href="https://www.linkedin.com/in/levikoskan"><img className="linkIcon" src={path +"linkedin.png"}/></a>
                  <a href="https://github.com/levikoskan"><img className="linkIcon" src={path +"github.png"}/></a>
                  <a href="https://about.me/levikoskan"><img className="linkIcon" src={path +"aboutMe.png"}/></a>
                </div>
              </div>
            </div>

        </div>
        <div>
          <img id='nameImg' src='../../public/images/nameText.png'/>
          <img className="navCloud" onClick={this.show.bind(this)} src='../../public/images/navCloud.png'/>
        </div>
        <div className="homeContainer">
          <Link to="projects">

              <img id='castleImg' src='../../public/images/sandCastle_Sign.png' />

          </Link>
          <Link to="about" >

              <img id='tikiImg' src='../../public/images/tiki_Levi_Sign.png' />

          </Link>
        </div>
      </div>
    );
  }
}
