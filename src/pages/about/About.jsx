import { Element } from "react-scroll";
import Title from "../../hooks/Title";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { saveAs } from "file-saver";
import resumePDF from "../../assets/suhanur-rohoman-sumon-resume (1).pdf";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownload = () => {
    saveAs(resumePDF, "suhanur-rohoman-sumon-resume.pdf");
  };

  return (
    <Element name="about">
      <Title title="About Me" subTitle="About Myself" />
      <div className="md:w-9/12 mx-auto my-10 shadow-2xl shadow-indigo-800">
        <div className="hero-content flex-col lg:flex-row">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative w-full lg:w-1/2"
            style={{ paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src="https://player.vimeo.com/video/959905854?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="About Me Video"
            ></iframe>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="lg:ml-8 mt-8 lg:mt-0 w-full lg:w-1/2"
          >
            <h1 className="text-5xl font-bold text-indigo-600">About me</h1>
            <p className="py-2 text-white">
              I am Suhanur Rohoman Sumon, a passionate junior developer with a
              thirst for continuous learning. I have a solid understanding in
              HTML, CSS, Bootstrap, JavaScript, Tailwind CSS, React.js. I am
              also familiar with Node.js, MongoDB, and Express.js. Collaborative
              and detail-oriented, I thrive in team environments. Eager to
              contribute to impactful projects and embrace new technologies, I
              am committed to delivering high-quality solutions. Let's create
              innovative software together!
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
