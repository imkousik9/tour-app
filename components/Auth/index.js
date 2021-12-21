import NextLink from 'next/link';

function Auth({ type, onSubmit, onTestSubmit, form, message }) {
  const { formData, errors, handleInput, isFormValid } = form;

  return (
    <main className="grid place-items-center min-h-screen">
      <section className="bg-gray-100 px-9 py-8 shadow-2xl rounded-md">
        <h2 className="text-2xl uppercase font-bold bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text inline-block mb-8">
          {type === 'Sign Up' ? 'Create your account' : 'Log into your account'}
        </h2>
        <form>
          {type === 'Sign Up' && (
            <>
              <label htmlFor="name" className="block text-lg font-bold mb-3">
                Name
              </label>
              <input
                className={`w-full block text-lg px-2 py-1 transition-all rounded mb-8 focus:outline-none focus:border-2 focus:border-solid focus:border-green-400 ${
                  errors.name &&
                  'border-2 border-solid border-red-400 focus:border-red-400'
                }`}
                id="name"
                value={formData.name}
                onChange={handleInput}
                required
              />
            </>
          )}

          <label htmlFor="email" className="block text-lg font-bold mb-3">
            Email address
          </label>
          <input
            className={`w-full block text-lg px-2 py-1 transition-all rounded mb-8 focus:outline-none focus:border-2 focus:border-solid focus:border-green-400 ${
              errors.email &&
              'border-2 border-solid border-red-400 focus:border-red-400'
            }`}
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInput}
            required
          />

          <label htmlFor="password" className="block text-lg font-bold mb-3">
            Password
          </label>
          <input
            className={`w-full block text-lg px-2 py-1 transition-all rounded mb-5 focus:outline-none focus:border-2 focus:border-solid focus:border-green-400 ${
              errors.password &&
              'border-2 border-solid border-red-400 focus:border-red-400'
            }`}
            id="password"
            type="password"
            value={formData.password}
            onChange={handleInput}
            required
          />
          <div className="flex flex-col items-center">
            <p className="text-red-500 mb-6 align-middle">{message}</p>

            {type !== 'Sign Up' && (
              <button
                className="mb-4 text-lg py-2 px-7 rounded-full uppercase inline-block font-medium cursor-pointer text-white bg-green-500 transition-all duration-300 hover:-translate-y-px hover:shadow-lg disabled:bg-gray-400 disabled:text-gray-300"
                onClick={onTestSubmit}
                type="submit"
              >
                Login With Test Credentials
              </button>
            )}

            <button
              className="mb-4 text-lg py-2 px-7 rounded-full uppercase inline-block font-medium cursor-pointer text-white bg-green-500 transition-all duration-300 hover:-translate-y-px hover:shadow-lg disabled:bg-gray-400 disabled:text-gray-300"
              onClick={onSubmit}
              disabled={!isFormValid}
              type="submit"
            >
              {type === 'Sign Up' ? 'Sign Up' : 'Login'}
            </button>
            <NextLink href={`/${type === 'Sign Up' ? 'login' : 'register'}`}>
              <a className="text-green-600 underline">
                {type === 'Sign Up'
                  ? 'Log into your account'
                  : 'Create your account'}
              </a>
            </NextLink>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Auth;
