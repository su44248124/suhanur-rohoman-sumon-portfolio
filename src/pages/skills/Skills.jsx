import { Element } from "react-scroll";
import Title from "../../hooks/Title";

const Skills = () => {
  return (
    <div className="relative">
      <div className="gradient absolute"></div>
      <Element className="" name="skills">
        <Title title="Skills" subTitle="All of my skills" />
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="flex border border-indigo-500  p-8 items-center justify-center md:w-9/12 md:mx-auto  "
        >
          <div className="w-full ">
            <div className="md:flex flex-wrap grid grid-cols-2 gap-2">
              <div className="border font-bold border-white text-white text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                HTML
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                CSS
              </div>
              <div className="border text-2xl font-bold border-indigo-500 text-indigo-500 text-center  uppercase rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Tailwind
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Bootstrap
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                JavaScript
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                React JS
              </div>
            </div>
            <div className="md:ml-14 md:mr-14  mt-4 md:flex flex-wrap grid grid-cols-2 gap-2">
              <div className="border font-bold border-white text-white text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                ExpressJS
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                MongoDB
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                NodeJS
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                TypeScript
              </div>
            </div>
            <div className="md:ml-32 md:mr-32 grid grid-cols-2 gap-2 mt-4 md:flex flex-wrap">
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Next js
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Git
              </div>
              <div className="border  font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Prisma
              </div>
            </div>
            <div className="md:ml-44 md:mr-44 grid grid-cols-2 gap-2 mt-4 md:flex flex-wrap">
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Mongoose
              </div>
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Redux
              </div>
            </div>
            <div className="md:ml-52 md:mr-52 grid grid-cols-2 gap-2 mt-4 md:flex flex-wrap">
              <div className="border font-bold border-indigo-500 text-indigo-500 text-center  uppercase text-2xl rounded-md p-4 flex-1 mx-2 min-w-[150px]">
                Uitesting
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Skills;
