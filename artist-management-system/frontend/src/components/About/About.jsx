import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <p className="heading">About AURORA</p>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          AURORA Entertainment is an artist management company focused on
          supporting artists, their music, and their creative journey. We aim to
          create an environment where artists can express themselves freely
          while building a lasting connection with their audience.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          We believe every artist has a unique story to tell. Our vision is to
          help artists turn their ideas into meaningful work and create
          opportunities that allow their creativity to reach a wider audience.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Do</h2>
        <p>
          From artist management and music releases to digital promotion and
          creative development, AURORA Entertainment supports artists throughout
          their journey.
        </p>

        <p>
          We manage artist profiles, releases, music information, news, and
          digital content in one connected platform, making it easier for
          audiences to discover and follow the artists we represent.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Approach</h2>
        <p>
          We value creativity, authenticity, and long-term growth. Rather than
          following trends blindly, we aim to help each artist develop their own
          identity and build a career that reflects who they are.
        </p>
      </section>

      <section className="about-section">
        <h2>Looking Ahead</h2>
        <p>
          AURORA Entertainment is built with the belief that great artists can
          come from anywhere. We are committed to discovering new talent,
          supporting creativity, and creating a space where artists can grow.
        </p>
      </section>

      <blockquote className="about-quote">
        “Where creativity finds its light.”
      </blockquote>
    </div>
  );
}

export default About;
