import { useEffect } from "react";
import { Element, Link } from "react-scroll";
import Typewriter from "react-ts-typewriter";
import AOS from "aos";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import "aos/dist/aos.css";
import "../../pages/styel.scss";
import imge from "../../assets/profile-pic (6).png";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "./banner.css";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const backgroundImageUrl =
    "https://i0.wp.com/static.vecteezy.com/system/resources/thumbnails/040/862/024/original/beautiful-abstract-futuristic-animation-with-particles-on-black-background-3d-render-abstract-particles-animation-video.jpg?ssl=1"; // Replace with your image URL

  return (
    <div>
      <Element className="" name="home">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="md:w-[30%] cards">
              <img
                src={imge}
                className="w-full h-full rounded-full shadow-2xl"
              />
            </div>
            <div
              className="md:w-[70%] pr-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h1 className="md:text-6xl text-4xl font-bold mt-6 text-[#0066FF]">
                Hey 👋
              </h1>
              <h1 className="md:text-5xl text-4xl font-bold mt-6 text-indigo-600 ">
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
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className=" md:mt-[500px] hidden md:block"
          >
            <Player
              autoplay
              speed={1.5}
              loop
              src="https://lottie.host/9da8988f-e037-43c5-862e-0091dee5f0ec/mOrdpTkLpJ.json"
              style={{ height: "30%", width: "30%" }}
            >
              <Controls
                buttons={[
                  "play",
                  "repeat",
                  "frame",
                  "debug",
                  "snapshot",
                  "background",
                ]}
              />
            </Player>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Banner;
