import React from "react";

import { IndexLink, Link } from "react-router";

import Me from "../components/MePic"


export default class AboutMe extends React.Component {
  constructor(props) {
    super();
  }
  componentWillMount(){
      document.body.setAttribute("class", "aboutBackGround");
    }


  render() {
    const path = '../../public/images/levi/'
    const levi =[
      { pic: path +'utahSt.jpg',
        info: 'big long line of text',},
      { pic:path +'levilex.jpg',
        info: 'big long line of text',},
      { pic: path +'football.jpg',
        info: 'big long line of text',},
      { pic: path +'friends.jpg',
        info: 'big long line of text',},
      { pic:path +'golf.jpg',
        info: 'big long line of text',},
      { pic:path +'cowboys.jpg',
      info: 'big long line of text',}
    ]


    return (
      <div>
        <Link to="/" >
              <img src='../../public/images/leftArrow.png' />
        </Link>
        <div>
          {levi.map((levi, i) => {
            return(
              <Me key={i} pic={levi.pic} info={levi.info}/>
            )
            }, this)
          }
        </div>
      </div>
    );
  }
}
