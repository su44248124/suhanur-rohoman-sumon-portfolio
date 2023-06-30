import { Circle } from "rc-progress";
import Title from "../../hooks/Title";
import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
    return (
        <div>
            <Title title="skills" subTitle="about my skills" />
            <div className="min-h-screen md:w-9/12 md:mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-center">Frontend</h1>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" transitionDuration={1000} completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-center">Backend</h1>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} strokeColor="#fff" />
                        </div>
                        <div className="flex items-center">
                            <p className="  ">html</p>
                            <ProgressBar className="text-white w-full" completed={60} />
                        </div>
                    </div>
                </div>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold text-center">Authentications</h1>
                        <div className="flex items-center">
                            <p className="  ">firebase</p>
                            <ProgressBar className="text-white w-full" transitionDuration={1000} completed={60} />
                        </div>
                       
                    </div>
                    <div className="md:w-1/2 ">
                        <h1 className="text-5xl font-bold">Inter Personal skills</h1>
                        <div className="md:flex items-center">
                            <div className="ml-4">
                            <Circle className="w-20 h-20 " percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <h1>Communication</h1>
                            </div>
                            <div className="ml-4">
                            <Circle className="w-20 h-20 " percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <h1>Teamwork</h1>
                            </div>
                            <div className="ml-4">
                            <Circle className="w-20 h-20 " percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                            <h1>Time Management</h1>
                            </div>
                            <div className="ml-4">
                            <Circle className="w-20 h-20 " percent={10} text="10%" strokeWidth={4} strokeColor="#D3D3D3" />
                            <h1 className="">Continuous Learning</h1>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
