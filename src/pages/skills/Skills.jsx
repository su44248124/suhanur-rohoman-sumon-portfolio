import Title from "../../hooks/Title";
import ProgressBar from "@ramonak/react-progress-bar";


const Skills = () => {
    return (
        <div>
            <Title title="skills" subTitle="about my skills" />
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">fronend</h1>
                        <div className="flex items-center">
                        <p className="  ">html</p><ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                        <p className="  ">html</p><ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                        <p className="  ">html</p><ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                        <p className="  ">html</p><ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                        <p className="  ">html</p><ProgressBar className="text-white w-full" completed={60} />
                        </div>
                        <div className="flex items-center">
                        <p className="  ">html</p><ProgressBar className="text-white w-full" completed={60} />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;