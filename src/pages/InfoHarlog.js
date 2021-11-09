import React from "react";

import { Layout } from "../layout";
import { NavLink } from "react-router-dom";

const InfoHarlog = () => (
  <Layout>  
    <div class='infopage'>
          <img src="screenshots/harloglogo.png" />
          <p>Harlog is a web application that's main function is to measure a students
              envolvement in lessions and to provide the teacher with comprohensive data.
          </p>
          <img src="screenshots/harlog1.png" />
          <p>Harlog functions through the use of room keys which can be used to enter sessions
              and accounts that can be used to create and manage sessions.
          </p>
          <img src="screenshots/harlog2.png" />
          <p>The data from students is gathered with a 6 question quiz and later processed to 
              find comprohensive results.</p>
          <img src="screenshots/harlog3.png" />
          <p>Logged in users can manage <b>Groups</b>, which resemble classrooms and within these
          groups are <b>Sessions</b> which resemble individual lessons, in which the participants
          answers are collected.</p>
    
   
          <img src="screenshots/harlog4.png" />
          <p>The room keys are made by the logged in user and they have the option to start and end
              sessions.
          </p>
          <img src="screenshots/harlog5.png" />
          <p>After being processed the answers of the participants are converted from 6 questions into 3 values
              which help the User to desipher how participants repsond to sessions.            
          </p>
          <img src="screenshots/harlog6.png" />
          <p>The logged in user can view the processed results in varying precision:
              Group average, Session average, specific Participant in group etc.
          </p>
          <img src="screenshots/harlog7.png" />
          <p>The logged in user has access to a tool that is helpful in comparing different results.</p>
        
        </div>
        <hr />
        <div class='infopage'>
            <h>Technical info</h>
            <br />
            <p>IDE used: Visual Studio Code (Version 1.57)
            Frameworks used: Svelte (3.38.2), 
            <br />Node.js (14.17.1 LTS), 
            <br />Express.js (4.17.1), 
            <br />PostgreSQL (9.6)
            </p>
            <p>The system is build as a CRUD stack. Utilizing Svelte in the frontend and Express 
                in the backend with a PostgreSQL database.
            </p>
            <p>For security the website uses JSON Web Tokens to verify user data in the front- and backend.</p>
            <p>In the database user passwords are hashed and all row id-s are in the uuid format.</p>
        </div>
  </Layout>
);

export default InfoHarlog;