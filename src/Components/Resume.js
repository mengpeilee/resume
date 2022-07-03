import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                <div key={"MS"}><h3>Carnegie Mellon University</h3>
                  <p className="info">Master of Science in Software Engineering<span>&bull;</span><em className="date">Aug. 2022 – Present</em></p>
                  <p><strong>Looking for a 2023 summer intern position now.</strong></p>
                </div>
               </div>
               <div className="twelve columns">
                <div key={"MS"}><h3>Fu Jen Catholic University</h3>
                  <p className="info">Master of Science in Computer Science<span>&bull;</span><em className="date">Sep. 2017 – Jun. 2018</em><br /><em className="date">Cumulative GPA: 3.97 / 4.0</em></p>
                  <p><strong>PUBLICATION: </strong><br /><strong>Meng-Pei Lee</strong>, Hsiang-Yu Hu, Hsing Mei, “<a href="https://dl.acm.org/doi/abs/10.1145/3242789.3242834" target="_blank">Life Chasing: A Location-based Game Prototype for Elderly Health Promotion</a>”, International Conference on Healthcare Service Management (<strong>ACM</strong>), Japan, 2018, pp. 265-271</p>
                </div>
               </div>
               <div className="twelve columns">
                <div key={"BA"}><h3>Fu Jen Catholic University</h3>
                  <p className="info">Bachelor of Science in Computer Science<span>&bull;</span><em className="date">Sep. 2013 – Jun. 2017</em><br /><em className="date">GPA in final year: 4.0 / 4.0</em></p>
                  <p><strong>HONOR: </strong><br />Won first place in <a href="https://github.com/mengpeilee/Fit-Meets" target="_blank">Graduation Competition</a> for developing a dating app combined with an IoT device.</p>
                </div>
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          <div key={"skywatch"}><h3>Inventec & Skywatch Innovation Inc.</h3>
              <p className="info">Sr. Software Engineer<span>&bull;</span> <em className="date">Dec. 2019 – Present</em></p>
              <p><span>&bull; </span>Led <a href="https://www.skywatch24.com/home-en" target="_blank">front-end</a> team of 3 engineers to separate front-end (JS, jQuery, React) from complicated back-end (PHP, Python, Node.js) architecture using Webpack and Lerna (Monorepo), which led to <strong>a 50% increase </strong> in development speed.</p>
              <p><span>&bull; </span>Led <a href="https://apps.apple.com/tw/app/skywatch-view/id523592053" target="_blank">APP</a> team of 3 engineers to integrate react-native with the existing native app, and also using multi-bundler to speed up APP by splitting each bundle file from <strong>4MB to 200 KB</strong>.</p>
              <p><span>&bull; </span>Built <a href="https://line.me/R/ti/p/%40825xitig" target="_blank">Chatbot</a> server that can reply <strong>7000+ users at the same time</strong> by using Docker and Kubernetes on GCP.</p>
              <p><span>&bull; </span>Project owner for <a href="https://github.com/Skywatch24/JS-Library" target="_blank">SDK</a> that supports enterprises in developing their IoT Services. <strong>(number of devices: 50,000+)</strong></p>
          </div>
          <div key={"tico"}><h3>Tico</h3>
              <p className="info">Software Engineer<span>&bull;</span> <em className="date">Feb. 2017 – Nov. 2019</em></p>
              <p><span>&bull; </span>Project owner for a cross-platform social communication <a href="https://tico.app/" target="_blank">service</a> using React Native, with an average of <strong>10,000+</strong> users per month. (<a href="https://tico.chat/en" target="_blank">Web</a>, <a href="https://itunes.apple.com/app/id1136577997" target="_blank">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.ticoservice" target="_blank">Android</a>)</p>
              <p><span>&bull; </span>Built testing environment to improve front-end developing quality using Jest and React Testing Library.</p>
          </div>
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
