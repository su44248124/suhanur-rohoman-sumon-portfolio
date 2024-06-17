import React, { useEffect } from "react";
import { Element, Link } from "react-scroll";
import img from "../../assets/343399015_6139074462847606_8684665322266873971_n-removebg-preview.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import bootsrap from "../../assets/bootstrap.jpg";
import reactBootsrap from "../../assets/react-bootsrap.jpg";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import express from "../../assets/express.jpg";
import mongodb from "../../assets/mongodb.jpg";
import firebase from "../../assets/firebase.png";
import figma from "../../assets/figma.png";
import photshop from "../../assets/photoshop.png";
import Typewriter from "react-ts-typewriter";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Wave from "react-wavify";
import "aos/dist/aos.css";
import "../../pages/styel.scss";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Element className="" name="home">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div
              className="md:text-center pr-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1 className="md:text-6xl text-4xl font-bold mt-6 text-[#0066FF]">
                Hey 👋
              </h1>
              <h1 className="md:text-5xl text-4xl font-bold mt-6 text-indigo-600">
                Welcome to Suhanur Rohoman Sumon Portfolio
              </h1>
              <h1 className="text-4xl font-bold py-4 text-white">
                I am a{" "}
                <Typewriter
                  speed={200}
                  text={["Web-Degainer", "Web-Devloper"]}
                  loop={true}
                />
              </h1>
              <p className="py-6 text-white">
                I am a passionate web developer with a focus on creating elegant
                and intuitive user experiences. Through my portfolio, I showcase
                my skills and projects, demonstrating my dedication to crafting
                exceptional websites. Join me on this journey as I explore the
                world of web development and bring creative ideas to life.
              </p>
              <Link
                to="contact"
                className="link no-underline hover:underline text-white w-fit"
                smooth={true}
                duration={500}
              >
                <button className="btn btn-primary">Get Started</button>
              </Link>
              <Link
                to="contact"
                className="link no-underline hover:underline text-white w-fit"
                smooth={true}
                duration={500}
              >
                <button className="btn btn-secendary ml-4">Contact Me</button>
              </Link>

              <br />
              <button className="btn btn-circle btn-round mt-4">
                <a href="https://www.facebook.com/suhanurrohoman.sumon">
                  <FaFacebook className="w-6 h-6 text-blue-700" />
                </a>
              </button>
              <button className="btn btn-circle btn-round mt-4 ml-4">
                <a href="https://www.linkedin.com/in/suhanur-rohoman-sumon-5b5266237/">
                  <FaLinkedin className="w-6 h-6 text-blue-700" />
                </a>
              </button>
              <button className="btn btn-circle btn-round mt-4 ml-4">
                <a href="https://github.com/Suhanur-Rohoman-Sumon-github">
                  <FaGithub className="w-6 h-6" />
                </a>
              </button>
            </div>
          </div>
          <div className="gradient "></div>
        </div>
      </Element>
    </div>
  );
};

export default Banner;
