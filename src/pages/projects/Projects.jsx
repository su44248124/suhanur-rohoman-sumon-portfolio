
import { Element } from "react-scroll";
import Title from "../../hooks/Title";
import firstProjects from '../../assets/FireShot Capture 004 - mosko shakib - mosko-shakib.web.app.png'
import secondProjects from '../../assets/FireShot Capture 005 - wheel and deel _home - wheels-and-deals-4f2d3.web.app.png'
import thierdProjects from '../../assets/FireShot Capture 006 - Vite + React - chief-recipi-clint.web.app.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import './projects.css';
const Projects = () => {
  return (
    <>
      <Element className="py-32" name="projects">
        <Title title="projects" subTitle="my recent projects" />
        <div data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine" className="md:flex  md:w-11/12 md:mx-auto ">
          <div  className="card card-compact w-96  shadow-2xl hover:shadow-indigo-800">
            <div className="container">
              <div className="row">
                <div className=" content">
                  <div className="screen">
                    <img src={firstProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="md:flex items-center ml-4">
              <h1 className="text-3xl text-indigo-800 ">suhanur rohoman sumon</h1>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://mosko-shakib.web.app/">live webside link</a></p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine" className="md:flex  md:w-11/12 md:mx-auto ">
          <div  className="card card-compact w-96  shadow-2xl hover:shadow-indigo-800">
            <div className="container">
              <div className="row">
                <div className=" content">
                  <div className="screen">
                    <img src={secondProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="md:flex items-center ml-4">
              <h1 className="text-3xl text-indigo-800 ">suhanur rohoman sumon</h1>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://mosko-shakib.web.app/">live webside link</a></p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="300"  data-aos-easing="ease-in-sine" className="md:flex  md:w-11/12 md:mx-auto ">
          <div  className="card card-compact w-96  shadow-2xl hover:shadow-indigo-800">
            <div className="container">
              <div className="row">
                <div className=" content">
                  <div className="screen">
                    <img src={thierdProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="md:flex items-center ml-4">
              <h1 className="text-3xl text-indigo-800 ">suhanur rohoman sumon</h1>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://mosko-shakib.web.app/">live webside link</a></p>
              </div>
            </div>
          </div>
        </div>
        
      </Element>
    </>
  );
};

export default Projects;
