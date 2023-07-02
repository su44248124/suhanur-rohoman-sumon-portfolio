
import { Element } from "react-scroll";
import Title from "../../hooks/Title";
import firstProjects from '../../assets/FireShot Capture 004 - mosko shakib - mosko-shakib.web.app.png'
import secondProjects from '../../assets/FireShot Capture 005 - wheel and deel _home - wheels-and-deals-4f2d3.web.app.png'
import thierdProjects from '../../assets/FireShot Capture 006 - Vite + React - chief-recipi-clint.web.app.png'
import { FaExternalLinkAlt, FaGithub, } from "react-icons/fa";
import './projects.css';
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import express from '../../assets/express.jpg'
import mongodb from '../../assets/mongodb.jpg'
import firebase from '../../assets/firebase.png'
const Projects = () => {
  return (
    <>
      <Element className="py-32" name="projects">
        <Title title="projects" subTitle="my recent projects" />
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="md:flex  md:w-11/12 md:mx-auto shadow-2xl p-4 shadow-indigo-800">
          <div className="card card-compact w-96  shadow-2xl hover:shadow-indigo-800">
            <div className="container">
              <div className="row">
                <div className=" content">
                  <div className="screen">
                    <img src={firstProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className="md:flex items-center ml-4">
              <h1 className="text-3xl text-indigo-800 font-bold">Mosko Shakib Cricket Academy</h1>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="https://github.com/su44248124/mosko-shakib">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="https://github.com/su44248124/mosko-shakib-server-side">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://mosko-shakib.web.app/">live webside link</a></p>
              </div>
            </div>
            <div className="flex items-center md:w-9/12 mx-auto my-2">
              <h1 className="text-3xl text-indigo-800">tecnology use :  </h1>
              <img src={tailwind} className='h-6 w-6 md:mr-4 rounded-full ml-4' alt="" />
              <img src={react} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={node} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={express} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={mongodb} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={firebase} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
            </div>
            <div className="md:flex">
              <p className="md:ml-7 text-white border border-white p-4 text-left my-2 shadow-2xl shadow-indigo-800">  Multi-page Structure: The website consists of four main pages: Home, Classes, Instructors, and Dashboard. Each page serves a specific purpose and provides relevant content to enhance the user experience.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800 ">User-friendly Website: The Mosko Shakib Cricket Academy website provides a user-friendly interface, making it easy for visitors to navigate through the various pages and access the desired information.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Admin Dashboard: The admin dashboard offers powerful features for managing the cricket academy. Admins can access functions like managing classes and users, allowing them to efficiently oversee operations.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Instructor Dashboard: The instructor dashboard is designed to meet the needs of cricket instructors. Instructors can utilize features like adding classes and managing their own classes, enabling them to effectively organize and deliver cricket coaching sessions.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Student/User Dashboard: The student/user dashboard provides a personalized experience for the academyes students. It offers features like viewing enrolled classes, managing the useres cart, and making payments via Stripe, ensuring a seamless and convenient learning journey.</p>
            </div>
          
            <button className="btn btn-primary ml-7" onClick={() => window.my_modal_4.showModal()}>view dtails</button>
            <dialog id="my_modal_4" className="modal">
              <form method="dialog" className="modal-box md:w-11/12 max-w-5xl">
                <p>The Mosko Shakib Cricket Academy website aims to revolutionize the way cricket enthusiasts learn and practice the sport. With its user-friendly design and intuitive navigation, visitors can effortlessly explore the diverse range of offerings provided by the academy.</p>
                <p>The multi-page structure ensures that every aspect of the academy is covered. The Home page serves as an engaging introduction to the academy, showcasing its mission, achievements, and upcoming events. The Classes page provides detailed information about the available cricket classes, including schedules, skill levels, and pricing.</p>
                <p>For aspiring cricketers, the Instructors page presents a comprehensive overview of the academys experienced coaching staff. Users can learn about the instructors' qualifications, expertise, and coaching philosophy, enabling them to make informed decisions.</p>
                <p>Students and regular users also have access to a personalized dashboard that provides a seamless learning experience. They can view their enrolled classes, manage their cart, and conveniently make payments using the secure Stripe payment method, offering peace of mind and convenience.</p>
                <p>The Mosko Shakib Cricket Academy website is committed to delivering exceptional cricket education and training. Through its innovative design, comprehensive features, and commitment to user satisfaction, the website strives to nurture and develop the cricketing talents of aspiring players while providing a seamless and enjoyable experience for all users.</p>
                <div className="modal-action">
                  <button className="btn btn-secondary">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="md:flex  md:w-11/12 md:mx-auto shadow-2xl p-4 shadow-indigo-800">
          <div className="card card-compact w-96  shadow-2xl hover:shadow-indigo-800">
            <div className="container">
              <div className="row">
                <div className=" content">
                  <div className="screen">
                    <img src={secondProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className="md:flex items-center ml-4">
              <h1 className="text-3xl text-indigo-800 font-bold">wheels and deals</h1>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="https://github.com/su44248124/whhels-and-deals-clint-side">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="https://github.com/su44248124/whhel-and-deels-server-side">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://wheels-and-deals-4f2d3.web.app/">live webside link</a></p>
              </div>
            </div>
            <div className="flex items-center md:w-9/12 mx-auto my-2">
              <h1 className="text-3xl text-indigo-800">tecnology use :  </h1>
              <img src={tailwind} className='h-6 w-6 md:mr-4 rounded-full ml-4' alt="" />
              <img src={react} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={node} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={express} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={mongodb} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={firebase} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
            </div>
            <div className="md:flex">
              <p className="md:ml-7 text-white border border-white p-4 text-left my-2 shadow-2xl shadow-indigo-800">  Multi-page Structure: The website consists of four main pages: Home, Classes, Instructors, and Dashboard. Each page serves a specific purpose and provides relevant content to enhance the user experience.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800 ">User-friendly Website: The Mosko Shakib Cricket Academy website provides a user-friendly interface, making it easy for visitors to navigate through the various pages and access the desired information.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Admin Dashboard: The admin dashboard offers powerful features for managing the cricket academy. Admins can access functions like managing classes and users, allowing them to efficiently oversee operations.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Instructor Dashboard: The instructor dashboard is designed to meet the needs of cricket instructors. Instructors can utilize features like adding classes and managing their own classes, enabling them to effectively organize and deliver cricket coaching sessions.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Student/User Dashboard: The student/user dashboard provides a personalized experience for the academyes students. It offers features like viewing enrolled classes, managing the useres cart, and making payments via Stripe, ensuring a seamless and convenient learning journey.</p>
            </div>
          
            <button className="btn btn-primary ml-7" onClick={() => window.my_modal_5.showModal()}>view dtails</button>
            <dialog id="my_modal_5" className="modal">
              <form method="dialog" className="modal-box md:w-11/12 max-w-5xl">
                <p>The Mosko Shakib Cricket Academy website aims to revolutionize the way cricket enthusiasts learn and practice the sport. With its user-friendly design and intuitive navigation, visitors can effortlessly explore the diverse range of offerings provided by the academy.</p>
                <p>The multi-page structure ensures that every aspect of the academy is covered. The Home page serves as an engaging introduction to the academy, showcasing its mission, achievements, and upcoming events. The Classes page provides detailed information about the available cricket classes, including schedules, skill levels, and pricing.</p>
                <p>For aspiring cricketers, the Instructors page presents a comprehensive overview of the academys experienced coaching staff. Users can learn about the instructors' qualifications, expertise, and coaching philosophy, enabling them to make informed decisions.</p>
                <p>Students and regular users also have access to a personalized dashboard that provides a seamless learning experience. They can view their enrolled classes, manage their cart, and conveniently make payments using the secure Stripe payment method, offering peace of mind and convenience.</p>
                <p>The Mosko Shakib Cricket Academy website is committed to delivering exceptional cricket education and training. Through its innovative design, comprehensive features, and commitment to user satisfaction, the website strives to nurture and develop the cricketing talents of aspiring players while providing a seamless and enjoyable experience for all users.</p>
                <div className="modal-action">
                  <button className="btn btn-secondary">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="md:flex  md:w-11/12 md:mx-auto shadow-2xl p-4 shadow-indigo-800">
          <div className="card card-compact w-96  shadow-2xl hover:shadow-indigo-800">
            <div className="container">
              <div className="row">
                <div className=" content">
                  <div className="screen">
                    <img src={thierdProjects} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className="md:flex items-center ml-4">
              <h1 className="text-3xl text-indigo-800 ">suhanur rohoman sumon</h1>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="#">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://mosko-shakib.web.app/">live webside link</a></p>
              </div>
            </div>
            <div className="flex items-center md:w-9/12 mx-auto my-2">
              <h1 className="text-3xl text-indigo-800">tecnology use :  </h1>
              <img src={tailwind} className='h-6 w-6 md:mr-4 rounded-full ml-4' alt="" />
              <img src={react} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={node} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={express} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={mongodb} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
              <img src={firebase} className='h-6 w-6 md:mr-4 rounded-full ' alt="" />
            </div>
            <div className="md:flex">
              <p className="md:ml-7 text-white border border-white p-4 text-left my-2 shadow-2xl shadow-indigo-800">  Multi-page Structure: The website consists of four main pages: Home, Classes, Instructors, and Dashboard. Each page serves a specific purpose and provides relevant content to enhance the user experience.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800 ">User-friendly Website: The Mosko Shakib Cricket Academy website provides a user-friendly interface, making it easy for visitors to navigate through the various pages and access the desired information.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Admin Dashboard: The admin dashboard offers powerful features for managing the cricket academy. Admins can access functions like managing classes and users, allowing them to efficiently oversee operations.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Instructor Dashboard: The instructor dashboard is designed to meet the needs of cricket instructors. Instructors can utilize features like adding classes and managing their own classes, enabling them to effectively organize and deliver cricket coaching sessions.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Student/User Dashboard: The student/user dashboard provides a personalized experience for the academyes students. It offers features like viewing enrolled classes, managing the useres cart, and making payments via Stripe, ensuring a seamless and convenient learning journey.</p>
            </div>
          
            <button className="btn btn-primary ml-7" onClick={() => window.my_modal_6.showModal()}>view dtails</button>
            <dialog id="my_modal_6" className="modal">
              <form method="dialog" className="modal-box md:w-11/12 max-w-5xl">
                <p>The Mosko Shakib Cricket Academy website aims to revolutionize the way cricket enthusiasts learn and practice the sport. With its user-friendly design and intuitive navigation, visitors can effortlessly explore the diverse range of offerings provided by the academy.</p>
                <p>The multi-page structure ensures that every aspect of the academy is covered. The Home page serves as an engaging introduction to the academy, showcasing its mission, achievements, and upcoming events. The Classes page provides detailed information about the available cricket classes, including schedules, skill levels, and pricing.</p>
                <p>For aspiring cricketers, the Instructors page presents a comprehensive overview of the academys experienced coaching staff. Users can learn about the instructors' qualifications, expertise, and coaching philosophy, enabling them to make informed decisions.</p>
                <p>Students and regular users also have access to a personalized dashboard that provides a seamless learning experience. They can view their enrolled classes, manage their cart, and conveniently make payments using the secure Stripe payment method, offering peace of mind and convenience.</p>
                <p>The Mosko Shakib Cricket Academy website is committed to delivering exceptional cricket education and training. Through its innovative design, comprehensive features, and commitment to user satisfaction, the website strives to nurture and develop the cricketing talents of aspiring players while providing a seamless and enjoyable experience for all users.</p>
                <div className="modal-action">
                  <button className="btn btn-secondary">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
       

      </Element>
    </>
  );
};

export default Projects;
