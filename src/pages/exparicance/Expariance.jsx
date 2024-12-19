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
    <div className="relative">
      <div className="absolute hidden md:block gradient  bottom-0 left-0"></div>
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
                  color: "#D0ABFF",
                  border: "2px solid #D0ABFF",
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
                        <span className="text-[#D0ABFF] text-xl font-bold">
                          {ourservis.title}
                        </span>{" "}
                        <br />{" "}
                        <span className="text-[#D0ABFF] text-xl font-bold">
                          {ourservis.company}
                        </span>
                        <br />{" "}
                        <span className="text-white">{ourservis.duration}</span>
                      </h3>
                      <p className=""></p>
                      <p> </p>
                    </div>
                  </div>
                  <p className="text-white">{ourservis.discription}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </Element>
    </div>
  );
};

export default Expariance;
