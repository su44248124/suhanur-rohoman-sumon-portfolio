import { useState } from "react";
import { Element } from "react-scroll";
import Title from "../../hooks/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  BackendTabPanel,
  FrontendTabPanel,
  FullstackTabPanel,
  NexJsTabPanel,
  tabTitles,
} from "../../data/data";

const Project = () => {
  const [active, setIsActive] = useState(tabTitles[0]);

  return (
    <div className="relative">
      <div className="absolute hidden md:block gradient bottom-0 right-0"></div>
      <Element name="projects">
        <Title title="Projects" subTitle="All of my projects" />
        <div className="w-10/12 mx-auto shadow-[#eeecf1]">
          <div className="py-16">
            <Tabs>
              <TabList className="lg:w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-6 place-items-center gap-y-3 mb-24">
                {tabTitles.map((tabTitle) => (
                  <Tab
                    key={tabTitle}
                    onClick={() => setIsActive(tabTitle)}
                    className={`${
                      active === tabTitle
                        ? "bg-transparent text-[#FFF]"
                        : "bg-transparent text-[#D0ABFF]"
                    } py-1 lg:py-3 px-3 lg:px-5 border text-xl font-semibold tracking-tight cursor-pointer w-[140px] transition-colors duration-200 text-center`}
                  >
                    {tabTitle}
                  </Tab>
                ))}
              </TabList>
              {/* Frontend Tab Panel */}
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {FrontendTabPanel.map((panelContent, index) => (
                    <div
                      className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4 hover:shadow-[0px_0px_15px_4px_rgba(208,171,255,0.8)] transform transition-all duration-500"
                      key={index}
                    >
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <img
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              {/* Backend Tab Panel */}
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {BackendTabPanel.map((panelContent, index) => (
                    <div
                      className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4 hover:shadow-[0px_0px_15px_4px_rgba(208,171,255,0.8)] transform transition-all duration-500"
                      key={index}
                    >
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <img
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {NexJsTabPanel.map((panelContent, index) => (
                    <div
                      className="card relative shadow-md border border-white rounded-lg flex flex-col lg:flex-row items-center gap-6 p-4 hover:shadow-[0px_0px_15px_4px_rgba(208,171,255,0.8)] transform transition-all duration-500"
                      key={index}
                    >
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <img
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  {FullstackTabPanel.map((panelContent, index) => (
                    <div key={index}>
                      {/* Image Section */}
                      <figure className="relative flex-shrink-0 w-full lg:w-1/3 h-64 overflow-hidden group">
                        <img
                          src={panelContent.img}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                          alt="Project"
                        />
                      </figure>
                      {/* Text Section */}
                      <div className="flex-1">
                        <h2 className="text-[#D0ABFF] font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4 flex flex-wrap gap-2">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.gitHubFrontendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {panelContent.technology.map((tech, index) => (
                            <span key={index} className="badge badge-primary">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="text-white text-sm space-y-2">
                          <p>{panelContent.para1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              {/* Other Panels */}
              {/* Add FullstackTabPanel and NexJsTabPanel similarly */}
            </Tabs>
          </div>
        </div>
        <div className="gradient absolute left-0 top-52"></div>
      </Element>
    </div>
  );
};

export default Project;
