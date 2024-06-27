import React, { Component } from "react";

class Resume extends Component {
  renderWork() {
    return (
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div key={"tesla"}>
            <h3>Tesla</h3>
            <p className="info">
              Sr. Software Engineer<span>&bull;</span>{" "}
              <em className="date">May. 2023 – Present</em>
            </p>
            <p>
              <span>&bull; </span> Designed a platform from scratch, enabling
              Data Scientists to build visual web apps without any front-end
              knowledge, resulting in reduced their web development timelines
              <strong> from weeks to just a few days.</strong>
            </p>
            <p>
              <span>&bull; </span> Led the migration and restructuring of
              Airflow to integrate NVIDIA GPU support, boosting scalability and
              efficiency in machine learning model training processes.
            </p>
            <p>
              <span>&bull; </span> Developed and integrated a robust CI/CD
              pipeline, streamlining development cycles and ensuring seamless,
              automated updates for machine learning models.
            </p>
          </div>
          <div key={"skywatch"}>
            <h3>Inventec</h3>
            <p className="info">
              Sr. Software Engineer<span>&bull;</span>{" "}
              <em className="date">Dec. 2019 – May. 2022</em>
            </p>
            <p>
              Inventec is a tier-one manufacturer of laptops and consumer
              electronic products with annual revenue exceeding US$18B in 2020.
            </p>
            <p>
              <span>&bull; </span>Led{" "}
              <a
                href="https://apps.apple.com/tw/app/skywatch-view/id523592053"
                target="_blank"
              >
                APP
              </a>{" "}
              team of 2 engineers to integrate react-native with the existing
              native app, and also using multi-bundler to speed up APP by
              splitting each bundle file from <strong>4MB to 200 KB</strong>.
            </p>
            <p>
              <span>&bull; </span> Implemented a IoT management system with
              Kafka to collect data for near real-time suggestion functionality.
            </p>
            <p>
              <span>&bull; </span>Developed{" "}
              <a href="https://line.me/R/ti/p/%40825xitig" target="_blank">
                Chatbot
              </a>{" "}
              service based on Node.js, Docker and Kubernetes into IoT platform
              to support customers control IoT devices easily and efficiently.
            </p>
            <p>
              <span>&bull; </span>Created JavaScript{" "}
              <a
                href="https://github.com/Skywatch24/JS-Library"
                target="_blank"
              >
                SDK
              </a>{" "}
              from scratch to support vendors to develop their IoT Services.{" "}
              <strong>(number of devices: 50,000+)</strong>
            </p>
          </div>
          <div key={"tico"}>
            <h3>Tico</h3>
            <p className="info">
              Software Engineer<span>&bull;</span>{" "}
              <em className="date">Feb. 2017 – Nov. 2019</em>
            </p>
            <p>
              Tico focuses on creating human-centered communication solutions to
              improve collaborations for the world.
            </p>
            <p>
              <span>&bull; </span>Developed communication{" "}
              <a href="https://tico.app/" target="_blank">
                service
              </a>{" "}
              from scratch based on React Native, with <strong>10,000+</strong>{" "}
              users. (
              <a href="https://tico.chat/en" target="_blank">
                Web
              </a>
              ,{" "}
              <a
                href="https://itunes.apple.com/app/id1136577997"
                target="_blank"
              >
                iOS
              </a>
              ,{" "}
              <a
                href="https://play.google.com/store/apps/details?id=com.ticoservice"
                target="_blank"
              >
                Android
              </a>
              )
            </p>
            <p>
              <span>&bull; </span>Built testing environment to improve front-end
              developing quality using Jest and React Testing Library.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderEducation() {
    return (
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <div key={"MS"}>
                <h3>Carnegie Mellon University</h3>
                <p className="info">
                  Master of Science in Software Engineering<span>&bull;</span>
                  <em className="date">Aug. 2022 – Dec. 2023</em>
                  <br />
                  <em className="date">Overall GPA: 3.7 / 4.0</em>
                </p>
                <p>
                  <strong>Coursework</strong>
                  <br />
                  <p>
                    Cloud Computing,
                    <br />
                    Foundation of Software Engineering, <br />
                    Software Design and Architecture, <br />
                    Software Refactoring <br />
                    Data Science of Software Engineering
                  </p>
                </p>
              </div>
            </div>
            <div className="twelve columns">
              <div key={"MS"}>
                <h3>Fu Jen Catholic University</h3>
                <p className="info">
                  Master of Science in Computer Science<span>&bull;</span>
                  <em className="date">Sep. 2017 – Jun. 2018</em>
                  <br />
                  <em className="date">Overall GPA: 3.97 / 4.0</em>
                </p>
                <p>
                  <strong>PUBLICATION: </strong>
                  <br />
                  <strong>Meng-Pei Lee</strong>, Hsiang-Yu Hu, Hsing Mei, “
                  <a
                    href="https://dl.acm.org/doi/abs/10.1145/3242789.3242834"
                    target="_blank"
                  >
                    Life Chasing: A Location-based Game Prototype for Elderly
                    Health Promotion
                  </a>
                  ”, International Conference on Healthcare Service Management (
                  <strong>ACM</strong>), Japan, 2018, pp. 265-271
                </p>
              </div>
            </div>
            <div className="twelve columns">
              <div key={"BA"}>
                <h3>Fu Jen Catholic University</h3>
                <p className="info">
                  Bachelor of Science in Computer Science<span>&bull;</span>
                  <em className="date">Sep. 2013 – Jun. 2017</em>
                  <br />
                  <em className="date">GPA in final year: 4.0 / 4.0</em>
                </p>
                <p>
                  <strong>HONOR: </strong>
                  <br />
                  Won first place in{" "}
                  <a
                    href="https://github.com/mengpeilee/Fit-Meets"
                    target="_blank"
                  >
                    Graduation Competition
                  </a>{" "}
                  for developing a dating app combined with an IoT device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function(skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        {this.renderWork()}
        {this.renderEducation()}

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
