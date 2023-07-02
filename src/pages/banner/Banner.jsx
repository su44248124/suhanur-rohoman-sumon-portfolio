
import { Element } from 'react-scroll';
import img from '../../assets/343399015_6139074462847606_8684665322266873971_n-removebg-preview.png';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import bootsrap from '../../assets/bootstrap.jpg'
import reactBootsrap from '../../assets/react-bootsrap.jpg'
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import express from '../../assets/express.jpg'
import mongodb from '../../assets/mongodb.jpg'
import firebase from '../../assets/firebase.png'
import figma from '../../assets/figma.png'
import photshop from '../../assets/photoshop.png'
import Typewriter from 'react-ts-typewriter';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Marquee from "react-fast-marquee";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Wave from 'react-wavify';


const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Element name="home">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative ">
          <Wave
          className="image-background"
          fill="#3F51B5" 
          paused={false}
          options={{
            height: 2,
            amplitude: 20, 
            speed: 0.1, 
            points: 3, 
          }}
        />
        <img
          data-aos="zoom-in-left"
          src={img}
          className="max-w-sm rounded-lg p-4 shadow-2xl absolute top-0 left-0 right-0 bottom-0 m-auto"
        />
            <Marquee className='max-w-sm rounded-lg'>
              <img src={html} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={css} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={js} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={bootsrap} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={reactBootsrap} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={tailwind} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={react} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={node} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={express} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={mongodb} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={firebase} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={figma} className='h-12 w-12 ml-4 rounded-full' alt="" />
              <img src={photshop} className='h-12 w-12 ml-4 rounded-full' alt="" />
            </Marquee>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000">
            <h1 className="text-5xl font-bold text-indigo-800">Hey I am Suhanur Rohoman Sumon</h1>
            <h1 className="text-4xl font-bold py-4 text-white">
              I am a{' '}
              <Typewriter speed={200} text={['Web-Degainer', 'Web-Devloper']} loop={true} />
            </h1>
            <p className="py-6 text-white">
              I am a passionate web developer with a focus on creating elegant and intuitive user
              experiences. Through my portfolio, I showcase my skills and projects, demonstrating my
              dedication to crafting exceptional websites. Join me on this journey as I explore the
              world of web development and bring creative ideas to life.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secendary ml-4">Contact Me</button><br />
            <button className="btn btn-circle btn-round  mt-4">
            <a href="https://www.facebook.com/suhanurrohoman.sumon">  <FaFacebook className='w-6 h-6 text-blue-700'/></a>
            </button>
            <button className="btn btn-circle btn-round  mt-4 ml-4">
            <a href="https://www.linkedin.com/in/suhanur-rohoman-sumon-5b5266237/">  <FaLinkedin className='w-6 h-6 text-blue-700 '/></a>
            </button>
            <button className="btn btn-circle btn-round mt-4 ml-4">
              <a href="https://github.com/su44248124"><FaGithub className='w-6 h-6'/></a>
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Banner;
