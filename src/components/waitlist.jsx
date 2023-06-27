/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useState } from 'react'


export default function WaitList({ tier }) {

  const { register, handleSubmit, reset } = useForm();
  const [isSucceed, setIsSucceed] = useState(false)
  const router = useRouter()

  const onSubmit = async ({ firstname, lastname, company, email, phonenumber, message }) => {
    console.log('First Name:', firstname);
    console.log('Last Name:', lastname);
    console.log('Company:', company);
    console.log('Email:', email);
    console.log('Phone:', phonenumber);
    console.log('Message:', message);

    // Perform form submission logic here
    try {
      const response = await fetch('/api/store-contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstname,
          lastname,
          company,
          phonenumber,
          tier,
          message
        }),
      });

      console.log(response)
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }  
      // Now you can process the response or just check if it's ok
    } catch (error) {
      console.error('Error occurred while calling /api/store-contact:', error);
    } 
    reset();
    setIsSucceed(true)
    await new Promise(r => setTimeout(r, 1500));
    router.push('/')
  };


  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-50 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Waitlist</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          The product is ready to launch soon, join our first tier user group for free trail and help us improve the features
        </p>
      </div>
      {isSucceed&&(
      <div className="mx-auto bg-teal-100 max-w-2xl border-t border-b border-teal-500 text-teal-900 px-4 py-3 text-center" role="alert">
        <p className="text-sm">You have successfully joined our waitlist!</p>
      </div>)}

      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstname" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="firstname"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('firstname', { required: true })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="lastname"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('lastname', { required: true })}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('company', { required: true })}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                aria-invalid="true"
                aria-describedby="email-error"
                {...register('email', { required: true })}
              />
            </div>
            {/* <p className="mt-2 text-sm text-red-600" id="email-error">
              Not a valid email address.
            </p> */}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phonenumber" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone
            </label>
            <div className="mt-2.5">
            <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                autoComplete="tel"
                aria-invalid="true"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('phonenumber', { required: false })}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register('message', { required: false })}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-purple-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join
          </button>
        </div>
      </form>
    </div>
  )
}
