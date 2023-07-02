
import Title from "../../hooks/Title";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Tilt from 'react-parallax-tilt';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import bootsrap from '../../assets/bootstrap.jpg'
import reactBootsrap from '../../assets/react-bootsrap.jpg'
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import express from '../../assets/express.jpg'
import mongodb from '../../assets/mongodb.jpg'
import firebase from '../../assets/firebase.png'
import figma from '../../assets/figma.png'
import photshop from '../../assets/photoshop.png'
import Typewriter from 'react-ts-typewriter';
import { Element } from "react-scroll";

const Skills = () => {
    return (
        <Element className="py-32" name="skills">
            <Title title="skills" subTitle="about my skills" />
            <div className="min-h-screen md:w-9/12 md:mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <Tilt className="md:w-1/2 p-4  shadow-2xl shadow-indigo-800" glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className=''>
                            <h1 className="text-4xl font-bold text-center text-indigo-800"><Typewriter text='Fronend Realeted' speed={200}  loop={true} /></h1>
                            <div className="flex items-center">
                                <img src={html} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={95} />
                            </div>
                            <div className="flex items-center">
                                <img src={css} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={90} />
                            </div>
                            <div className="flex items-center">
                                <img src={js} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={95} />
                            </div>
                            <div className="flex items-center">
                                <img src={bootsrap} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={98} />
                            </div>
                            <div className="flex items-center">
                                <img src={reactBootsrap} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={96} />
                            </div>
                            <div className="flex items-center">
                                <img src={tailwind} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={85} />
                            </div>
                            <div className="flex items-center">
                                <img src={react} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={92} />
                            </div>

                        </div>
                    </Tilt>
                    <Tilt className="md:w-1/2 p-4  shadow-2xl shadow-indigo-800" glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className=''>
                            <h1 className="text-4xl font-bold text-center text-indigo-800"><Typewriter text='Backend Realated' speed={200}  loop={true} /></h1>
                            <div className="flex items-center">
                                <img src={node} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={60} />
                            </div>
                            <div className="flex items-center">
                                <img src={express} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={65} />
                            </div>
                            <div className="flex items-center">
                                <img src={mongodb} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={80} />
                            </div>
                            <h1 className="text-4xl font-bold text-center text-indigo-800">Degain Realated</h1>
                            <div className="flex items-center">
                                <img src={figma} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={50} />
                            </div>
                            <div className="flex items-center">
                                <img src={photshop} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={45} />
                            </div>
                        </div>
                    </Tilt>
                </div>
                <div className="hero-content flex-col lg:flex-row">
                    <Tilt className="md:w-1/2 p-4  shadow-2xl shadow-indigo-800" glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className=''>
                            <h1 className="text-4xl font-bold text-center text-indigo-800"><Typewriter text='Authentications Related' speed={200}  loop={true} /></h1>
                            <div className="flex items-center">
                                <img src={firebase} className='h-12 w-12 mr-4 rounded-full my-4' alt="" />
                                <ProgressBar className="text-white w-full" transitionDuration={1000} completed={70} />
                            </div>

                        </div>
                    </Tilt>
                    <Tilt className="md:w-1/2 shadow-2xl shadow-indigo-800 p-4" glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="">
                            <h1 className="text-5xl font-bold text-center text-indigo-800"><Typewriter text='Inter Personal skills' speed={200}  loop={true} /></h1>
                            <div className="md:flex items-center my-4">
                                <div className="ml-4   ">
                                    <CircularProgressbar className="w-20 h-20 mx-auto" value={60} text={`${95}%`} />
                                    <h1 className="text-center text-white">Communication</h1>
                                </div>
                                <div className="ml-4">
                                    <CircularProgressbar className="w-20 h-20 mx-auto" value={60} text={`${92}%`} />
                                    <h1 className="text-center text-white">Teamwork</h1>
                                </div>
                                <div className="ml-4  ">
                                    <CircularProgressbar className="w-20 h-20 mx-auto" value={60} text={`${90}%`} />
                                    <h1 className="text-center text-white">Time Management</h1>
                                </div>
                                <div className="ml-4 ">
                                    <CircularProgressbar className="w-20 h-20 mx-auto" value={60} text={`${92}%`} />
                                    <h1 className="text-center text-white">continue learning</h1>
                                </div>

                            </div>

                        </div>
                    </Tilt>
                </div>
            </div>
            </Element>
    );
};

export default Skills;
