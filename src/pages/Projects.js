import React from "react";

import { Layout } from "../layout";
import { NavLink } from "react-router-dom";

const Projects = () => (
  <Layout>
    <div>
      <div class="project">
        <h1>Harlog</h1>
        {/* <div>
          <img src="screenshots/harlog1.png" />
          <img src="screenshots/harlog2.png" />
          <img src="screenshots/harlog3.png" />
          <img src="screenshots/harlog4.png" />
          <img src="screenshots/harlog5.png" />
          <img src="screenshots/harlog6.png" />
          <img src="screenshots/harlog7.png" />
        </div> */}
        <p>
          A web application built for academic purpose that uses a Svelte,
          Express, PostgreSQL stack
        </p>
        <a href="/infoharlog">Closer look</a>
        

        <p>
        <a href="https://github.com/Tyks23/harlog">Frontend github</a> | <a href="https://github.com/Tyks23/harlog-backend">Backend github</a>
        </p>
      </div>

      <div class="project">More to come</div>
    </div>
  </Layout>
);

export default Projects;
