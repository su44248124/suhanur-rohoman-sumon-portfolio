import Title from "../../hooks/Title";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Element } from "react-scroll";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5lrqfr2', 'template_h92aoqs', form.current, 'PqUQzvDCtALzGpxGo', {

    })
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  };


  return (
    <Element className="py-32" name="contact">
      <Title title="Contact Me" subTitle="Get in touch" />
      <div className="min-h-screen md:w-9/12 md:mx-auto shadow-2xl shadow-indigo-800 mb-12">
        <form data-aos="fade-up"
          data-aos-duration="3000" ref={form} onSubmit={sendEmail} className="card-body pt-56 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-2xl">Email</span>
            </label>
            <input type="email" name="from_emai" placeholder="your email" className="input input-bordered input-accent" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-2xl">your  name</span>
            </label>
            <input type="text" name="password" placeholder="name" className="input input-bordered input-accent" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white text-2xl">your massage</span>
            </label>
            <textarea name="message" className="textarea textarea-accent" placeholder="your massage"></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">send</button>
          </div>
        </form>
      </div>
      </Element>
  );
};

export default Contactus;
