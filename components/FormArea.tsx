import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


const FormArea = () => {
  {/*********************************
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const toastifySuccess = () => {
    toast('Inquiry sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  const onSubmit = async (data: { forename: string; surname: string; email: any; company: string; services: string; budget: any; message: string }) => {
    const { forename, surname, email, company, services, budget, message } = data;
    try {
      const templateParams = {
        forename,
        surname,
        email,
        company,
        services,
        budget,
        message
      };   
      
     await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
    
  **/}

  return (
    <>
      <div id="contact" className="bg-brand-gradient w-full">
        <h2 className="py-20 text-center text-base font-bold text-white md:text-sm">
          Get In Touch
        </h2>

        <form
          className="m-auto w-6/12 xl:w-8/12 lg:w-9/12 md:w-11/12"
          method="POST"
          target="_blank"
          
        >
          {/********************************Name Input********************************/}
          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**First Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white">First Name</p>
              <input type="text" name="forename" className="form-input" required  />
            </div>

            {/**Last Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white">Last Name</p>
              <input type="text" name="surname" className="form-input" required />
            </div>
          </div>

          {/********************************Email & Company Name Input********************************/}

          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**Email**/}
            <div className="mb-3 pt-0">
              <p className="text-white">Email</p>
              <input type="email" name="email" className="form-input" required />
            </div>

            {/**Company Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white">Company Name</p>
              <input type="text" name="company" className="form-input" required />
            </div>
          </div>

          {/********************************Services Dropdown********************************/}

          {/****
          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**Interested Services
            <div className="mb-3 pt-0">
              <p className="text-white">Interested Services:</p>
              <select required name="services" className="form-input">
                <option disabled selected>Select Service</option>
                <option value="consultancy">Consultancy</option>
                <option value="delivery">Delivery</option>
                <option value="ventures">Ventures</option>
              </select>
            </div>

            {/**Budget*
            <div className="mb-3 pt-0">
              <p className="text-white">Budget</p>
              <select required name="budget" className="form-input">
                <option disabled selected>Select budget range</option>
                <option value="10-25K">10-25K</option>
                <option value="20-50K">20-50K</option>
                <option value="100K+">100K+</option>
              </select>
            </div>
          </div>

          {/********************************Message Description********************************/}

          <div className="mb-3 pt-0">
            <p className="text-white">Description (Optional)</p>
            <textarea name="message" className="form-input" />
          </div>

          <div className="pt-0 pb-20">
            <button type="submit" className="button-pink">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormArea
