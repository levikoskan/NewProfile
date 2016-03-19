import React from "react";

export default class Project extends React.Component {
   constructor() {
    super();

    this.state = {
        submitted: true,
        picIndex: null
      }
    }

  newState(i, event) {
    this.setState({
      submitted: !this.state.submitted,
      picIndex: i
    });
  }

  render() {
    const path = '../../public/images/projects/'
    const projects =[
      {
        pics:[path +'propPredictorHomePic.png',path + 'propPredictorDis.png',path + 'propPredictorResults.png'],
        discription: 'talking about project 1',
        info: 'big long line of text',
        href: 'https://propertypredictor.herokuapp.com'
      },
      {
        pics:[path +'toDoHome.png',path + 'toDoLogin.png',path + 'toDoList.png'],
        discription: 'talking about project 2',
        info: 'big long line of text',
        href: 'https://eight-bit-to-do.herokuapp.com/'
      },
      {
        pics:[path +'slackFlowHome.png', path +'slackFlowLogin.png', path +'slackFlowQuestion.png'],
        discription: 'talking about project 3',
        info: 'big long line of text',
        href: 'Coming Soon'
      }]
      const index = this.state.picIndex;

    if (this.state.submitted){
      return(
      <div>
         {projects.map((projects, i) => {
            return(
              <ul key={i}>
                <li>
                 <img className="projectImg" onClick={this.newState.bind(this,i)} src={projects.pics[0]}/>
                </li>
                <li>{projects.discription}</li>
              </ul>
            )
            }, this)
          }
      </div>
      );
    }else{
      return(
        <div>
          <h4 onClick={this.newState.bind(this)}>Back</h4>
          {projects[index].pics.map(function(pics, i){
            return <img key={i} className="projectImg" src={pics}/>
            }
          )}
          <div>{projects[index].info}
          </div>
          <a href={projects[index].href}><h2>Demo it live</h2></a>
        </div>
      );
    }
  }
}
