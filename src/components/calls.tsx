import { useRef } from 'react'

export default function Calls() {
  const emailInput = useRef<HTMLInputElement | null>(null)

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailInput.current?.value
    if (!email || email === undefined) {
      return
    }
    try {
      const response = await fetch('/api/store-contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phonenumber: "",
          firstname: "",
          lastname: "",
          company: "",
          tier: "newsletter",
          message: ""
        }),
      });

      console.log(response)
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } 
      emailInput.current!.value = ''    
      // Now you can process the response or just check if it's ok
    } catch (error) {
      console.error('Error occurred while calling /api/store-contact:', error);
    }  
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const errorMessage = 'Please use valid email address'



    return (
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-75 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{' '}
            <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2" onSubmit={handleSubscribe}>
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                ref={emailInput}
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              We care about your data. Read our{' '}
              <a href="#" className="font-semibold text-white">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    )
  }