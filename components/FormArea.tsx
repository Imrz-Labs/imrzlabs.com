import React, { useState } from 'react'
import { useRouter } from "next/router";


const FormArea = () => {

  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const onChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  }


  const [query, setQuery] = useState({
    forename: '',
    surname: '',
    email: '',
    company: '',
    message: '',
  })

  // Update inputs value
  const handleParam = () => (e: { target: { name: any; value: any } }) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  // Form Submit function
  const formSubmit = (e: { preventDefault: () => void }) => {
    router.push(`https://getform.io/thank-you${inputValue}`)
    e.preventDefault()
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })
    fetch('https://getform.io/f/fff5dcb9-386d-4296-8b90-143becb470a8', {
      method: 'POST',
      body: formData,
    }).then(() =>
      setQuery({
        forename: '',
        surname: '',
        email: '',
        company: '',
        message: '',
      })
    )
  }

  return (
    <>
      <div id="contact" className="bg-brand-gradient w-full">
        <h2 className="py-20 text-center text-base font-bold text-white md:text-sm">
          Get In Touch
        </h2>

        <form
          className="m-auto w-6/12 xl:w-8/12 lg:w-9/12 md:w-11/12"
          onSubmit={formSubmit}
        >
          {/********************************Name Input********************************/}
          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**First Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white">First Name</p>
              <input
                type="text"
                name="forename"
                className="form-input"
                required
                value={query.forename}
                onChange={handleParam()}
              />
            </div>

            {/**Last Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white">Last Name</p>
              <input
                type="text"
                name="surname"
                className="form-input"
                required
                value={query.surname}
                onChange={handleParam()}
              />
            </div>
          </div>

          {/********************************Email & Company Name Input********************************/}

          <div className="imrz-text-black grid grid-cols-2 gap-5">
            {/**Email**/}
            <div className="mb-3 pt-0">
              <p className="text-white">Email</p>
              <input
                type="email"
                name="email"
                className="form-input"
                required
                value={query.email}
                onChange={handleParam()}
              />
            </div>

            {/**Company Name**/}
            <div className="mb-3 pt-0">
              <p className="text-white">Company Name</p>
              <input
                type="text"
                name="company"
                className="form-input"
                required
                value={query.company}
                onChange={handleParam()}
              />
            </div>
          </div>

          {/********************************Services Dropdown

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
            </div>**/}

          {/**Budget**
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
          /}
          ********************************/}
          {/********************************Message Description********************************/}

          <div className="mb-3 pt-0">
            <p className="text-white">Description (Optional)</p>
            <textarea
              name="message"
              className="form-input"
              value={query.message}
              onChange={handleParam()}
            />
          </div>

          <div className="pt-0 pb-20">
            <button
              type="submit"
              className="button-pink"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormArea
