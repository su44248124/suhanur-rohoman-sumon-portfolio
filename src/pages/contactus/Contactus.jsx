import Title from "../../hooks/Title";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5lrqfr2', 'template_h92aoqs', form.current, 'PqUQzvDCtALzGpxGo', {
      
    })
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  };


  return (
    <div className="">
      <Title title="Contact Me" subTitle="Get in touch" />
      <div className="min-h-screen md:w-9/12 md:mx-auto">
        <form ref={form} onSubmit={sendEmail} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name="from_emai" placeholder="" className="input input-bordered input-accent" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name="password" placeholder="password" className="input input-bordered input-accent" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bio</span>
            </label>
            <textarea name="bio" className="textarea textarea-accent" placeholder="Bio"></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
