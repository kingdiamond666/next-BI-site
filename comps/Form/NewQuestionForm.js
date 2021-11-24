import {useForm, useFormState} from 'react-hook-form';
import React, {useRef, useState} from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';


export default function NewQuestionForm({onSuccess, handleFirstName, cta, subCta}) {
  const captcha = useRef();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const {register, handleSubmit, watch, formState: { errors }, control, setValue} = useForm();
  errors ? console.log(errors) : null;
  const {isSubmitSuccessful } = useFormState({control});


  const onSubmitForm = async values => {
      console.log(values.first_name);

      try {
      const response = await fetch('/api/createQuestion', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      })
      // await isSubmitSuccessful ? props.onSuccess(true) : setSubmitSuccess(false);
      onSuccess(true)
      handleFirstName(values.first_name)
      for(let value in values){
          setValue(value, '');
      }
      } catch (error) {
      console.error(error)
      }
  }

  return (

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 bg-indigo-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-1">
          <div className="">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {cta}
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              {subCta}
            </p>
          </div>
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <form onSubmit={handleSubmit(onSubmitForm)} className="mt-9 grid grid-cols-1 gap-y-6  sm:gap-x-8">
            <div>
              <label htmlFor="first_name" className="sr-only">
                First name
              </label>
              <div className="mt-1">
                <input
                  {...register("first_name",{required: true, pattern: /^[A-Za-z_\- ]+$/i})}
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className={`${errors.first_name ? 'ring-2 ring-red-500': null } w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md`}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mt-1">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
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
                className={`${errors.email ? 'ring-2 ring-red-500': null } w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md`}
                placeholder="Enter your email"
              />
              <label htmlFor="question" className="sr-only">
                Question
              </label>
              </div>
              <div className="mt-1">
                <textarea
                {...register("question_long",{
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
                  id="question_long"
                  name="question_long"
                  aria-describedby="how-can-we-help-description"
                  rows={4}
                  className={`${errors.message_long ? 'ring-2 ring-red-500': null } block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md`}
                  defaultValue={''}
                  placeholder="What question would you like to ask the magic lamp?"
                />
                </div>
                <br />
                <div className="">
                <div className={errors["h-captcha-response"] ? "border-2 border-red-500" : "block text-sm font-medium text-gray-700"}>
                    <HCaptcha required {...register("h-captcha-response", { required: true })}
                        onVerify={(v) => { setValue("h-captcha-response", v, { shouldValidate: true }) }}
                        ref={captcha}
                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
                </div>
                {errors["h-captcha-response"] ? (<label class="label">
                    <span class="label-text-alt">{fv('requiredField')}</span>
                </label>) : []}
                </div>
              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Answer My Question
              </button>
            </form>
            <p className="mt-3 text-sm text-indigo-200">
              We care about the protection of your data. Read our{' '}
              <a href="#" className="text-white font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
        </div>

  )
}
