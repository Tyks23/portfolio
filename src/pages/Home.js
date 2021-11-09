import React from "react";

import { Layout } from "../layout";

const Home = () => (
  <Layout>
    <div class="container">
    <div class="fade-in-text">
      <h1>Hey I'm Mattias, an aspiring developer</h1>
      <h>This site is still a work in progress and there isnt anything here yet. </h>
      <h>Feel free to browse the <a href="/about">About</a> or <a href="/projects">Projects</a> sections of the site or just get a CV right here!</h>
      <br />
      <div class="inline">
          <h>CV ► </h>
          <a href="/assets/mtyksammel_cv_ee.pdf">EE</a>
          <h> | </h>
          <a href="/assets/mtyksammel_cv_en.pdf"> EN</a>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
