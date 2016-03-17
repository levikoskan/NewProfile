import React from "react";
import { Link } from "react-router";




export default class Layout extends React.Component {
  render() {
    const { location } = this.props;


    return (



        <div className="container" >



              {this.props.children}



        </div>



    );
  }
}
