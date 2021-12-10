import {useForm, useFormState} from 'react-hook-form';
import React, {useRef, useState} from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

//Spinners Shelf
import {css} from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function Form({content, onSuccess, handleFirstName}) {
    const [color, setColor] = useState("#ffffff");
    const captcha = useRef();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const preloadedValues = {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      company_url: "www.",
      message_long: ""

    }
    const {register, handleSubmit, watch, formState, formState: { errors }, control, setValue} = useForm({
      defaultValues: preloadedValues
    });
    const {isSubmitting} = formState
    errors ? console.log(errors) : null;
    const {isSubmitSuccessful } = useFormState({control});


    const onSubmitForm = async values => {
        try {
          return new Promise(resolve =>{
            // Post to API endpoint with hcaptcha
            const response = fetch('/api/createLead', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            })

            //Fire onSuccess and bring on the modal
            onSuccess(true)
            //Pass first name onto modal
            handleFirstName(values.first_name)
            //Empty Fields
            for(let value in values){
                setValue(value, '');
            }
            resolve()
          })
        }
        catch (error) {
        console.error(error)
        }
    }


  return (
    <div id="GetInfo" className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{content.form_cta_title}</h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
            {content.form_cta_body} <a href="mailto:info@theclubagency.com">info@theclubagency.com</a>
            </p>
            <form onSubmit={handleSubmit(onSubmitForm)} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/*FIRST NAME*/}
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    {...register("first_name",{required: true, pattern: {
                      value: /^[A-Za-z_\- ]+$/i,
                      message:"Please enter a name with no special characters"
                    }})}
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    className={`${errors.first_name ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`}
                  />
                </div>
                <span className="text-sm font-medium text-red-400">{errors?.first_name?.message}</span>
              </div>
              {/*LAST NAME*/}
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    {...register("last_name",{required: true, pattern: {
                      value:/^[A-Za-z_\- ]+$/i,
                      message: "Please enter a valid last name with no special characters"
                    }})}
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    placeholder="Enter your last name"
                    className={`${errors.last_name ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`}
                  />
                </div>
                <span className="text-sm font-medium text-red-400">{errors?.last_name?.message}</span>
              </div>
              {/*EMAIL*/}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    {...register("email",{
                        required: {
                            value:true
                        },
                        pattern: {
                            value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            message: "Please enter a valid email address"
                        }

                    })}
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className={`${errors.email ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`}
                  />
                </div>
                <span className="text-sm font-medium text-red-400">{errors?.email?.message}</span>

              </div>
            {/*COMPANY*/}
              <div className="sm:col-span-2">
                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    {...register("company_name",{required: true, pattern: /^[A-Za-z0-9_ ]+$/i})}
                    type="text"
                    name="company_name"
                    id="company_name"
                    autoComplete="organization"
                    placeholder="Enter your company name"
                    className={`${errors.company_name ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`}
                  />
                </div>
                <span className="text-sm font-medium text-red-400">{errors?.company_name?.message}</span>

              </div>
              {/*COMPANY WEBSITE*/}
              <div className="sm:col-span-2">
                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                  Company Website
                </label>
                <div className="mt-1">
                  <input
                    {...register("company_url",{required: true, pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi})}
                    type="text"
                    name="company_url"
                    id="company_url"
                    autoComplete="organization"
                    className={`${errors.company_url ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`}
                  />
                </div>
                <span className="text-sm font-medium text-red-400">{errors?.company_url?.message}</span>

              </div>
              {/*PHONE*/}
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <span id="phone-description" className="text-sm text-gray-500">
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    {...register("phone",{
                        required: false,
                        message: "Please Enter A Valid Phone Number",
                        pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                            message: "Please Enter A Valid Phone Number"
                        }
                    })}
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone-description"
                    className={`${errors.phone ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md`}
                  />
                   <span className="text-sm font-medium text-red-400">{errors?.phone?.message}</span>
                </div>
              </div>
            {/*MESSAGE LONG*/}
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                    How can we help you?
                  </label>
                  <span id="how-can-we-help-description" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                  {...register("message_long",{
                      required: {
                          value:true,
                          message: 'You need to enter a message'
                        },
                        maxLength: {
                            value: 500,
                            message: "Please limit your message to 500 characters."
                        },
                        minLength: {
                            value: 7,
                            message: "Please enter a full message"
                        }
                    })}
                    id="how-can-we-help"
                    name="message_long"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className={`${errors.message_long ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md`}
                    defaultValue={''}
                  />
                </div>
                <span className="text-sm font-medium text-red-400">{errors?.message_long?.message}</span>
              </div>
              {/*BUDGET*/}
              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                        {...register("budget",{required: false})}
                      id="budget-under-25k"
                      name="budget"
                      defaultValue="under_25k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-under-25k" className="ml-3">
                      <span className="block text-sm text-gray-700">Less than $25K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                        {...register("budget",{required: false})}
                      id="budget-25k-50k"
                      name="budget"
                      defaultValue="25k-50k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-25k-50k" className="ml-3">
                      <span className="block text-sm text-gray-700">$25K – $50K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                        {...register("budget",{required: false})}
                      id="budget-50k-100k"
                      name="budget"
                      defaultValue="50k-100k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-50k-100k" className="ml-3">
                      <span className="block text-sm text-gray-700">$50K – $100K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                        {...register("budget",{required: false})}
                      id="budget-over-100k"
                      name="budget"
                      defaultValue="over_100k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget-over-100k" className="ml-3">
                      <span className="block text-sm text-gray-700">$100K+</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            {/*REFERENCE*/}
              <div className="sm:col-span-2">
                <label htmlFor="reference" className="block text-sm font-medium text-gray-700">
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    {...register("reference",{
                        required: {
                            value: true,
                            message: "Please tell us who sent you, we are paranoid like that."
                        }

                    })}
                    type="text"
                    name="reference"
                    id="reference"
                    className={`${errors.reference ? 'ring-2 ring-red-500': null } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md`}
                  />
                  <span className="text-sm font-medium text-red-400">{errors?.howDidYouHearAboutUs?.message}</span>
                </div>
              </div>
              <br />
            {/*HCAPTCHA*/}
              <div className="sm:col-span-2">
              <div className={errors["h-captcha-response"] ? "border-2 border-red-500" : "block text-sm font-medium text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"}>
                  <HCaptcha required {...register("h-captcha-response", { required: true })}
                      onVerify={(v) => { setValue("h-captcha-response", v, { shouldValidate: true }) }}
                      ref={captcha}
                      sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
              </div>
              {errors["h-captcha-response"] ? (<label class="label">
                  <span className="label-text-alt">Required Field</span>
              </label>) : []}
              </div>
              <div className="text-right sm:col-span-2">
              <p className="mt-3 text-sm text-indigo-600">
                We care about the protection of your data. Read our{' '}
                <a href="#" className="text-indigo-700 font-medium underline">
                  Privacy Policy.
                </a>
              </p>
              <br/>
            {/*SUBMIT BUTTON*/}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1">
                  <ClipLoader color='black' loading={true} css={override} size={150} />
                </span>}
                  Submit
                </button>

              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
