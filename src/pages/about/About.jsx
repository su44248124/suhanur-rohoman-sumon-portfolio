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
      <div className="md:w-9/12 mx-auto  py-52">
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
            <p className="py-6 text-white">
              Hi there! I am Suhanur Rohoman Sumon, a passionate and
              detail-oriented web developer with a strong focus on creating
              elegant and user-friendly websites. With several years of
              experience in the industry, I have successfully delivered numerous
              projects for clients across various domains.
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
