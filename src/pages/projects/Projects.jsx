
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
              <p className="md:ml-7 text-white border border-white p-4 text-left my-2 shadow-2xl shadow-indigo-800">  Description: Wheel and Deels is an online platform that allows users to add and explore a wide variety of toys. When users are logged in, they can add their own toys to the platform. However, if a user is not logged in, they will not be able to view individual toys. Nevertheless, there is a separate tab called All Toys that displays all the toys added by users, regardless of whether they are logged in or not. This way, users can still browse through the entire collection of toys contributed by the community.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800 ">Objective: The objective of Wheel and Deels is to create a platform where toy enthusiasts can share and discover different toys. By allowing users to add their own toys, the platform encourages collaboration and a sense of community among toy lovers.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Features: Some key features of Wheel and Deels include user authentication and authorization, toy addition functionality for logged-in users, and an All Toys tab to display the complete collection of toys. The platform aims to provide an intuitive and user-friendly interface for seamless toy exploration and sharing.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Technology Stack: The Wheel and Deels project is built using a modern technology stack. The frontend is developed using HTML, CSS, and JavaScript, ensuring a responsive and interactive user interface. The backend is powered by a robust server-side framework like Node.js, providing efficient data management and handling user authentication. The project utilizes a database system like MongoDB to store and retrieve toy information securely.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Collaboration and Feedback: At Wheel and Deels, we value collaboration and feedback from our users. We have integrated a user feedback system to gather suggestions and ideas for improving the platform. Users can provide feedback on existing toys, suggest new features, or report any issues they encounter. This feedback helps us continually enhance the platform, ensuring a better experience for all users.</p>
            </div>

            <button className="btn btn-primary ml-7" onClick={() => window.my_modal_5.showModal()}>view dtails</button>
            <dialog id="my_modal_5" className="modal">
              <form method="dialog" className="modal-box md:w-11/12 max-w-5xl">
                <p>Welcome to Wheel and Deels! Our vibrant online platform is dedicated to toy enthusiasts of all ages. Whether you're a collector, a parent searching for the perfect gift, or simply someone who appreciates the joy of toys, you've come to the right place.</p>

                <p>With Wheel and Deels, registered users gain access to a wide range of features designed to enhance the toy experience. You can add your own toys, complete with descriptions, images, and categories, allowing you to share your unique collection and connect with fellow enthusiasts. Explore a diverse assortment of toys contributed by our community, and dive into the world of play and imagination.</p>

                <p>At Wheel and Deels, we value collaboration and feedback. Engage with other users, provide feedback on toys, suggest new features, and report any issues you encounter. Your input helps us continually improve the platform, ensuring an exceptional experience for everyone.</p>

                <p>Powered by cutting-edge technologies, our user-friendly interface ensures seamless navigation and interaction. Discover new toys, find inspiration, and stay up-to-date with the latest trends in the toy world.</p>

                <p>Join us at Wheel and Deels, where the magic of toys comes alive. Start your journey today and unlock a world of wonder, creativity, and joy!</p>
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
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="https://github.com/su44248124/chefe-recepe-clintside">clint side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaGithub className="ml-4" /> <p className="text-white ml-4"><a href="https://github.com/su44248124/chef-recipi-hunter-server-side">server side link</a> </p>
              </div>
              <div className="flex  items-center">
                <FaExternalLinkAlt className="ml-4 text-indigo-800" /> <p className="text-white ml-4"><a href="https://chief-recipi-clint.web.app/">live webside link</a></p>
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
              <p className="md:ml-7 text-white border border-white p-4 text-left my-2 shadow-2xl shadow-indigo-800">  Chef Recipe Hunter is a dedicated platform for food enthusiasts and aspiring chefs. Our website is divided into four sections, each offering a unique experience to our users.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800 ">The first section is the banner, where you'll find enticing visuals and captivating images that reflect the essence of our culinary world.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">Next, we have the "Our Chefs" section, showcasing talented chefs from around the globe. Each chef is accompanied by their ratings, a selection of their signature recipes, and a "View Details" button. Clicking on the "View Details" button will reveal the full details of the chef, including their background, achievements, and additional recipes. If a user is not logged in, they will be redirected to the login page to ensure access is reserved for registered users.</p>
              <p className="md:ml-7 my-2 text-white border border-white p-4 text-left shadow-2xl shadow-indigo-800">In the blog section, you'll find a collection of informative articles, tips, and answers to frequently asked culinary questions. Alongside each blog post, there is a convenient "Download PDF" button. When clicked, the entire page, including the blog content, will be downloaded in PDF format, allowing users to save and reference the information at their convenience.</p>
            </div>

            <button className="btn btn-primary ml-7" onClick={() => window.my_modal_6.showModal()}>view dtails</button>
            <dialog id="my_modal_6" className="modal">
              <form method="dialog" className="modal-box md:w-11/12 max-w-5xl">
                <p>Welcome to Chef Recipe Hunter!</p>

                <p>Chef Recipe Hunter is an innovative and interactive platform designed for food enthusiasts, aspiring chefs, and culinary explorers. Our website is dedicated to providing a comprehensive culinary experience, connecting users with talented chefs, mouthwatering recipes, and a wealth of culinary knowledge.</p>

                <p>The website is divided into four distinct sections, each offering a unique aspect of the culinary world:</p>

                <p>1. Banner: Our visually stunning banner sets the tone for the culinary journey that awaits. With enticing imagery and captivating visuals, we aim to create an immersive experience that ignites your passion for food and cooking.</p>

                <p>2. Our Chefs: In this section, we proudly showcase a curated selection of top-notch chefs from around the globe. Each chef is accompanied by their ratings, highlighting their expertise and culinary prowess. Additionally, you'll find a tantalizing selection of their signature recipes, tantalizing your taste buds and inspiring your culinary creativity. To learn more about a chef, simply click the "View Details" button, which will reveal their full profile, including their background, culinary achievements, and a comprehensive collection of their recipes. To ensure the privacy and security of our chefs' information, the "View Details" functionality is available exclusively to registered users. If a user is not logged in, they will be seamlessly redirected to the login page, where they can easily create an account or sign in to unlock this exclusive content.</p>

                <p>3. Blog: Our blog section serves as a rich source of culinary information and inspiration. Here, you'll find a diverse array of articles, tips, and insights on a wide range of culinary topics. From cooking techniques and ingredient spotlights to kitchen hacks and expert advice, our blog offers valuable content that will enhance your culinary skills and expand your knowledge. Each blog post is accompanied by a "Download PDF" button, allowing you to conveniently save the entire page, including the blog content, in PDF format. This feature enables you to create your own culinary library and refer back to the articles whenever you need them.</p>

                <p>4. Login and Registration: To fully enjoy the offerings of Chef Recipe Hunter, users are encouraged to create an account or log in if they already have one. By doing so, users gain access to the exclusive "View Details" functionality in the "Our Chefs" section, allowing them to delve deeper into the profiles and recipes of our featured chefs. Additionally, registered users can take advantage of personalized features, such as saving favorite recipes, participating in discussions, and receiving tailored culinary recommendations based on their preferences.</p>

                <p>Join Chef Recipe Hunter today and embark on an exciting culinary adventure! Explore the profiles of renowned chefs, discover their exquisite recipes, and learn valuable culinary insights from our blog. Whether you're a seasoned chef looking for inspiration or a novice home cook eager to expand your repertoire, Chef Recipe Hunter is your go-to destination for all things culinary. Unleash your culinary creativity and let the flavors come alive!</p>


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
