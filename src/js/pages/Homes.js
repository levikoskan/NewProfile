import React from "react";

import { Link } from "react-router";



import MenuItem from "../components/MenuItem"



export default class Featured extends React.Component {
  constructor() {
    super();
      this.state = {
        show: false,
        resume: false
      }
      this.x = this.noShow.bind(this);
    }
    componentWillMount(){
      document.body.setAttribute("class", "homeBackGround")
    }
    componentWillUnmount() {
     document.body.removeEventListener('click', this.x);
   }
    show() {
      console.log("show")
      this.setState({
        show: !this.state.show
      });
    }
    showResume(){
      this.setState({
      resume: !this.state.resume,
      show: false
      });
      document.body.addEventListener('click', this.x);
    }

    noShow(){
      console.log("noShow")
      document.body.removeEventListener('click', this.x);
      this.setState({ show: false, resume: false});
    }

  render() {
    const path = './public/images/links/'
    return (
      <div>
        <div>
            <div className="menu">
              <div className={(this.state.show ? "visible" : "")}>

                <MenuItem >Contact Me</MenuItem>
                <div className="menu-item" onClick={this.showResume.bind(this)}><MenuItem>Resume</MenuItem></div>
                <MenuItem >Technologies Used</MenuItem>
                <div className="menu-item" id="bottomBar">
                  <a href="https://www.linkedin.com/in/levikoskan"><img className="linkIcon" src={path +"linkedin.png"}/></a>
                  <a href="https://github.com/levikoskan"><img className="linkIcon" src={path +"github.png"}/></a>
                  <a href="https://about.me/levikoskan"><img className="linkIcon" src={path +"aboutMe.png"}/></a>
                </div>
              </div>
            </div>

            <div className="menuResume">
              <div className={(this.state.resume ? "visible" : "")}>
                <MenuItem><div id="resumeImgWrapper"><img id="resumeImg" src={path +"resume.png"}/></div></MenuItem>
              </div>
            </div>

        </div>
        <div className="homeContainer">
          <div className="skyContainer">
            <img id='nameImg' src='../../public/images/nameText.png'/>

            <img id="navCloud" onClick={this.show.bind(this)} src='../../public/images/navCloud.png'/>
          </div>
          <div className="beachContainer">
            <Link to="projects">

                <img id='castleImg' src='../../public/images/sandCastle_Sign.png' />

            </Link>
            <Link to="about" >

                <img id='tikiImg' src='../../public/images/tiki_Levi_Sign.png' />

            </Link>
          </div>
        </div>
      </div>
    );
  }
}
