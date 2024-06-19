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
  const [active, setIsActive] = useState(tabTitles[0]); // Set initial active tab to the first tab title

  return (
    <div className="relative">
      <div className="absolute hidden md:block gradient top-0 right-0"></div>
      <Element name="projects">
        <Title title="Projects" subTitle="All of my projects" />
        <div className="w-10/12 mx-auto shadow-indigo-600">
          <div className="py-16">
            <Tabs>
              <TabList className="lg:w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-6 place-items-center gap-y-3 mb-24">
                {tabTitles.map((tabTitle) => (
                  <Tab
                    key={tabTitle}
                    onClick={() => setIsActive(tabTitle)}
                    className={`${
                      active === tabTitle
                        ? "bg-indigo-600 text-white"
                        : "bg-transparent text-indigo-600"
                    } py-1 lg:py-3 px-3 lg:px-5 border text-xl font-semibold tracking-tight cursor-pointer w-[140px] transition-colors duration-200 text-center`}
                  >
                    {tabTitle}
                  </Tab>
                ))}
              </TabList>
              <TabPanel className="lg:w-10/12 px-2 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {FrontendTabPanel.map((panelContent, index) => (
                    <div
                      className="card border border-white shadow-2xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                      key={index}
                    >
                      <figure className="relative h-64 w-full overflow-hidden">
                        <img
                          src={panelContent.img}
                          className="w-full h-full "
                          alt="Project"
                        />
                      </figure>
                      <div className="p-4">
                        <h2 className="text-indigo-500 font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4">
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
                        <div className="mb-4">
                          {panelContent.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="badge badge-primary mr-2"
                            >
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {BackendTabPanel.map((panelContent, index) => (
                    <div
                      className="card shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                      key={index}
                    >
                      <figure className="relative h-64 w-full overflow-hidden">
                        <img
                          src={panelContent.img}
                          className="w-full h-full "
                          alt="Project"
                        />
                      </figure>
                      <div className="p-4">
                        <h2 className="text-indigo-500 font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.githubBackendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4">
                          {panelContent.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="badge badge-primary mr-2"
                            >
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {FullstackTabPanel.map((panelContent, index) => (
                    <div
                      className="card shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                      key={index}
                    >
                      <figure className="relative h-64 w-full overflow-hidden">
                        <img
                          src={panelContent.img}
                          className="w-full h-full "
                          alt="Project"
                        />
                      </figure>
                      <div className="p-4">
                        <h2 className="text-indigo-500 font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.githubBackendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4">
                          {panelContent.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="badge badge-primary mr-2"
                            >
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {NexJsTabPanel.map((panelContent, index) => (
                    <div
                      className="card shadow-xl rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
                      key={index}
                    >
                      <figure className="relative h-64 w-full overflow-hidden">
                        <img
                          src={panelContent.img}
                          className="w-full h-full "
                          alt="Project"
                        />
                      </figure>
                      <div className="p-4">
                        <h2 className="text-indigo-500 font-bold text-2xl mb-2">
                          {panelContent.heading}
                        </h2>
                        <div className="badge badge-secondary mb-4">
                          {panelContent.subTitle}
                        </div>
                        <div className="card-actions mb-4">
                          <a
                            href={panelContent.liveSideLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            Live Site
                          </a>
                          <a
                            href={panelContent.githubBackendLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="badge badge-secondary"
                          >
                            GitHub
                          </a>
                        </div>
                        <div className="mb-4">
                          {panelContent.technology.map((tech, index) => (
                            <span
                              key={index}
                              className="badge badge-primary mr-2"
                            >
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
            </Tabs>
          </div>
        </div>
        <div className="gradient absolute  left-0"></div>
      </Element>
    </div>
  );
};

export default Project;
