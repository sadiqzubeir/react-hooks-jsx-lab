
import React from "react";
import { image } from "../data/data"; // adjust path if your file is actually ../data/user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Write a short sentence about yourself here.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
