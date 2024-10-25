import { Helmet } from 'react-helmet-async'

export const SignUp = () => {
  return (
    <>
      <Helmet title="Sign Up" />
      <div className="grid h-screen grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="hidden bg-[#9747FF] md:col-span-4 md:block md:rounded-br-3xl md:rounded-tr-3xl lg:col-span-6"></div>
        <div className="col-span-4 flex items-center justify-center px-4 lg:col-span-6">
          <div className="w-[450px] p-4">
            <img
              src="./src/assets/talkspace.svg"
              alt="logo"
              className="mb-2 ml-[-8px]"
            />
            <h2 className="mb-4 text-2xl font-bold">Create account</h2>
            <form className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9747FF] disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9747FF] disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-2 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9747FF] disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="password"
                placeholder="Password"
                className="col-span-2 w-full rounded-md border px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9747FF] disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="col-span-2 mt-4 rounded-md bg-[#9747FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#9747FF]/90 disabled:pointer-events-none disabled:opacity-50"
              >
                Create account
              </button>
            </form>
            <span className="mt-4 block text-zinc-500">
              Already have an account?{' '}
              <a
                href="#"
                className="cursor-pointer font-bold text-[#9747FF] hover:text-[#9747FF]/90"
              >
                Log in here
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
