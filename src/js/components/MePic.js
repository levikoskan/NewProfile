import React from "react";


export default class Me extends React.Component {
   constructor() {
    super();

    this.state = {
        submitted: true
      }
  }

  newState() {
    this.setState({
      submitted: !this.state.submitted
    });

  }
  render() {

    if (this.state.submitted){
      return(
      <div>
        <img className="projectImg" onClick={this.newState.bind(this)} src={this.props.pic}/>
      </div>
      );
    }else{
      return(
        <div>
          <p onClick={this.newState.bind(this)}>{this.props.info}</p>
        </div>
      );
    }
  }
}
