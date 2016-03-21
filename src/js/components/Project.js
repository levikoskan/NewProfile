import React from "react";

import { Link } from "react-router";

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
        title: 'Property Predictor',
        discription: 'Users enter in an address and an algorithm is used to give a score on the likelihood of that property appreciating in the short to mid term.',
        info: 'I think most people would agree that real estate almost always appreciates over time. What seems to be missed is the fact that most people only invest in one piece of property at a time, their home. Recent reports are showing that the average time an American is spending in a new home is around 10 years. If something happens to the market then that amount of time may be to low in order to build the wealth that a homeowner would expect. The goal of my application is to give potential homeowners another tool that will help them decide to move on purchasing a home. It will help them by taking in relevant data that has shown to affect appreciation in the past and compute that data to give a potential homeowner an easily digestible number. The number represents the likelihood of that property appreciating in the short to mid future. Hopefully this helps potential homeowners put aside fears of financial lose when deciding on a home purchase.',
        techUsed:['HTML', 'CSS & CSS animations', 'Node.js', 'React library', 'Flux framework', 'Ajax for API calls', 'Webpack', 'Austin City API'],
        href: 'https://propertypredictor.herokuapp.com'
      },
      {
        pics:[path +'toDoHome.png',path + 'toDoLogin.png',path + 'toDoList.png'],
        title: '8-bit To-Do',
        discription: 'Users can make a to do list and be rewarded points upon completion.',
        info: 'Two other people and myself decided to create a game themed to-do list. The to-do list included the ability to add multiple lists and multiple tasks on each list. Also, a user could give each task a point value with the expectation of collecting those points once the task was complete. My team and I built out our own API to consume as we decided to make this application single paged. The application has user authentication and persistent data.',
        techUsed:['HTML', 'CSS', 'Bootstrap', 'Node.js', 'Experss', 'Mongo DB', 'Mongoose', 'Ajax for API calls', 'PassPort for User Auth', 'Handlebars library', 'Jquery'],
        href: 'https://eight-bit-to-do.herokuapp.com/'
      },
      {
        pics:[path +'slackFlowHome.png', path +'slackFlowLogin.png', path +'slackFlowQuestion.png'],
        title: 'SlackOverflow',
        discription: 'A forum for GA students to post questions and receive answers in an interactive atmosphere.',
        info: 'With a team of three other people we created a forum for those in the General Assembly community to post 140 character or less questions and receive answers. This was to be a place where any GA student from any department could ask a question and receive help from alumni, teachers and fellow students. Features include user authentication, question bar to ask a question, updated community questions with timestamp and visual display for questions asked in the last 30 minutes, a section displaying your own questions, and being able to answer a question once you’ve clicked on it.',
        techUsed:['HTML', 'CSS', 'Bootstrap', 'Ruby', 'Rails framework', 'Devise for user authentication', 'Disqus API'],
        href: 'Coming Soon'
      }]
      const index = this.state.picIndex;

    if (this.state.submitted){
      return(
      <div>
        <div className='projectHomeContainer'>
          <div id="projectParagraph">
            <p>Here is three projects that I believe are awesome and really greatI believe are awesome and really greatI believe are awesome and really greatI believe are awesome and really greatI believe are awesome and really greatI believe are awesome and really greatI believe are awesome and really great</p>
          </div>

           {projects.map((projects, i) => {
              return(
                <div className='projectImgWrapper' key={i}>

                   <img className="projectImg" onClick={this.newState.bind(this,i)} src={projects.pics[0]}/>

                  <p>{projects.discription}</p>
                </div>
              )
              }, this)
            }
          </div>
          <div className='arrowImg'>
            <Link to="/" >
              <img id="projectArrow" src='../../public/images/rightArrow.png' />
            </Link>
          </div>
      </div>
      );
    }else{
      return(
        <div>
          <h4 onClick={this.newState.bind(this)}>Back</h4>
          <h2>{projects[index].title}</h2>
          <div className="singleProjectWrapper">
            {projects[index].pics.map(function(pics, i){
              return (
                  <img key={i} className="singleProjectImgs" src={pics}/>
              );}
            )}
          </div>
          <div>{projects[index].info}</div>
          <div>
            <h4>Technologies Used</h4>
            {projects[index].techUsed.map(function(tech, i){
              return (
                <ul>
                  <li>{tech}</li>
                </ul>
              );}
            )}
          </div>
          <h2><a href={projects[index].href}>See it live</a></h2>
        </div>
      );
    }
  }
}
