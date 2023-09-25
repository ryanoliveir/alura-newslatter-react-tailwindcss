function App() {

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email Addres</label>
            <div className="mt-2">
              <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" type="email" name="email" placeholder="Your email" autoComplete="email" required />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="">Password</label>
              <div className="text-sm">
                <a  className="font-semibold text-indigo-600 hover:text-indigo-500" href="">Forgot password?</a>
              </div>
            </div>
            <div>
              <input 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="password"
                name="password"
                placeholder="Your password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div>
            <button 
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              Sign in
            </button>
          </div>

        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Start 1 14 day gree trial</a>
        </p>
    </div>
    </div>
  )
}

export default App