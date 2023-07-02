import { Element } from 'react-scroll';
import img from '../../assets/343399015_6139074462847606_8684665322266873971_n-removebg-preview.png';
import Title from '../../hooks/Title';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { saveAs } from 'file-saver';

import resumePDF from '../../assets/suhanur-rohoman-sumon-resume (1).pdf';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownload = () => {
    saveAs(resumePDF, 'suhanur-rohoman-sumon-resume.pdf');
  };

  return (
    <Element name="about">
      <Title title="about me" subTitle="about myself" />
      <div className="md:w-9/12 mx-auto  my-10 shadow-2xl shadow-indigo-800" >
        <div className="hero-content flex-col lg:flex-row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative"
          >
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <p className="text-3xl absolute text-indigo-800 p-4 border border-indigo-800 rounded-3xl top-2 left-2">
              <CountUp start={0} end={45} duration={2.5} /> + <br /> projects
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className="text-5xl font-bold text-indigo-800">About me</h1>
            <p className="py-2 text-white">
            I am Suhanur Rohoman Sumon, a passionate junior developer with a thirst for continuous learning. I have a solid understanding in Html,Css,Bootstrap,Javascript,Tailwind Css ,React js .I am also familier withe Node Js,Mongodb , express js. Collaborative and detail-oriented, I thrive in team environments. Eager to contribute to impactful projects and embrace new technologies, I am committed to delivering high-quality solutions. Lets create innovative software together!
            </p>

            <button onClick={handleDownload} className="btn btn-primary">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
