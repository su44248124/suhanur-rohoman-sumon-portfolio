import React from "react";
import { FaAlipay } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ourservises } from "../../data/data";
import "react-vertical-timeline-component/style.min.css";
import Title from "../../hooks/Title";
import { Element } from "react-scroll";
const Expariance = () => {
  return (
    <Element name="experience">
      <div className="py-14 bg-servicesDescriptions bg-cover bg-no-repeat">
        <Title title="Experience" subTitle="My Experience" />
        <VerticalTimeline>
          {ourservises.map((ourservis, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ color: "#070234 ,bac" }}
              contentArrowStyle={{ borderRight: "7px solid #070234" }}
              iconStyle={{
                background: "#070234",
                color: "#fff",
                border: "2px solid #fff",
              }}
              icon={<FaAlipay />}
              lineColor="#070234"
            >
              <div className=" bg-black p-2">
                <div className="flex">
                  <img
                    src={ourservis.img}
                    loading="lazy"
                    width="100"
                    height="10"
                    className=" p-4"
                    alt="servises images"
                  />
                  <div className="mt-4">
                    <h3 className="">
                      <span className="text-indigo-600 text-xl font-bold">
                        React js developer Intern
                      </span>{" "}
                      <br />{" "}
                      <span className="text-indigo-600 text-xl font-bold">
                        Rework ai{" "}
                      </span>
                      <br />{" "}
                      <span className="text-white">Nov 2023- June 2024</span>
                    </h3>
                    <p className=""></p>
                    <p> </p>
                  </div>
                </div>
                <p className="text-white">
                  Enhanced user experiences on Rework ai & Remote, Portals by
                  resolving bugs & reduced load time by 40%. Built Neurobit
                  Analytics portal using React Js with seamless interaction of
                  REST APIs using AXIOS optimized with React Query. Refactored
                  previous code to TypeScript, updated with new dependency and
                  integrated Vite with Jest for Unit Testing.
                </p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </Element>
  );
};

export default Expariance;
