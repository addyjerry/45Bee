import React from "react";
import "./Second.css";
import computer from "../../assets/hire.png";

const Second = () => {
  return (
    <div id="Second">
      <div id="text">
        <p>
          I am a <b>Full Stack</b> web developer. I have experience in using
          various web frameworks and tools in building different projects. Talk
          of responsive and dynamic web sites, I am your best option. Are you
          looking for someone who will work with you to get the best app or
          project just as you picture it? I suggest you try me. I bring
          diversity in the creation of web apps through judicious use of the
          tools at my disposal. I create all forms of
          sites(news,blog,e-commerce,personal,company,logs,etc). Contact me and
          lets work together.
        </p>
      </div>
      <div id="computer">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlHmbDmKLJxbKqwSbkKHlvZxcHJwTsDCKnnmrZdKDhjtgjKKfHtLfZbVQQKFZSJKpKVjFL">
          <img src={computer} alt="computer" />
          <h3>Hire Me</h3>
        </a>
      </div>
    </div>
  );
};

export default Second;
