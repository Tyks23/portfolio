import React from "react";
import { Document, Page } from "react-pdf";
import "./App.css";
import { Layout } from "../layout";

const About = () => (
  <Layout>
    <div class="container">   
      <div class="fade-in-text">
      <h1>About me!</h1>
        <div class="row">
          <div class="column">
          <h class="bigh">Profile</h>
            <p>
              I'm a motivated and tech-savvy software developer. I bring a good
              attitude, a good work ethic and team spirit.
            </p>
            </div>
            <div class="column">
                <h class="bigh">Experience</h>
            <p>Junior front end developer | Industry62 | 09.2017 - 03.2018</p>
            <p>
              While working in a team, I developed a website as per the client's
              instructions. The Scrum development framework was in use. Technologies
              used in website development:{" "}
            <strong>Bootstrap, Typescript, Angular2, Git</strong>
           </p>
            </div>

        <div class="row">
          <div class="column">
          <h class="bigh">Education</h>
        <p>
          Junior software developer vocational education | Tallinn Polytechnic
          School | 2015 - 2018
        </p>
        <p>Informatics bachelor's degree | Tallinn University | 2020 - ... </p>
        <div class="inline">
          <h>CV ► </h>
          <a href="/assets/mtyksammel_cv_ee.pdf">EE</a>
          <h> | </h>
          <a href="/assets/mtyksammel_cv_en.pdf"> EN</a>
        </div>
            </div>
            <div class="column">
            <h class="bigh">Technical proficiency</h>
            <br />
            <div class="row">
              <div class="column">
                <h>Languages</h>
                <p>Javascript <img src="icons/jsiconpng.png" class="pngicon"/></p>
                <p>PHP <img src="icons/phpicon.png" class="pngicon"/></p>
                <p>Java <img src="icons/javaicon.png" class="pngicon"/></p>
                <p>C# <img src="icons/csharp.png" class="pngicon"/></p>
                <p>HTML/CSS3 <img src="icons/htmlicon.png" class="pngicon"/> <img src="icons/cssicon.png" class="pngicon"/></p>
                <p>SQL</p>
              </div>
              <div class="column">
                <h>Software</h>
                <p>VSCode<img src="icons/vscodeicon.png" class="pngicon"/></p>
                <p>Visual Studio <img src="icons/vsicon.png" class="pngicon"/></p>
                <p>Intellij<img src="icons/intellijicon.png" class="pngicon"/></p>
                <p>Github <img src="icons/githubicon.png" class="pngicon"/></p>
                <p>MS Office <img src="icons/msicon.png" class="pngicon"/></p>
                <p>Windows 10 <img src="icons/windowsicon.png" class="pngicon"/></p>
                <p>VirtualBox <img src="icons/virtualboxicon.png" class="pngicon"/></p>
              </div>
              <div class="column">
                <h>Frameworks and Tools</h>
                <p>Svelte <img src="icons/svelteicon.png" class="pngicon"/></p>
                <p>ReactJS <img src="logo512.png" class="pngicon"/></p>
                <p>Express <img src="icons/expressjs-icon.svg" class="pngicon"/></p>
                <p>Nodejs <img src="icons/nodeicon.png" class="pngicon"/></p>
                <p>PostgreSQL <img src="icons/postgreicon.png" class="pngicon"/></p>  
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  </Layout>
);

export default About;
