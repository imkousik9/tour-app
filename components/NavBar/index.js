import React from 'react';
import NextLink from 'next/link';
import Router from 'next/router';
import { useAuth } from '../../lib/hooks';
import Loader from '../Loader';

function NavBar() {
  const { user, isLoading, signOut } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/tours?q=${e.target.search.value}`);
  };

  return (
    <header className="capitalize bg-gradient-to-r from-green-500 via-green-600 to-blue-500 text-gray-50 px-12 h-16 z-50 flex justify-between items-center sticky top-0">
      <nav className="flex items-center flex-2">
        <NextLink href="/">
          <a className="mr-4 cursor-pointer w-16">
            <img
              className="h-7 transition-all duration-200 hover:scale-105"
              src="/img/logo-white.png"
              alt="Natours logo"
            />
          </a>
        </NextLink>
        {user?.role !== 'admin' && (
          <NextLink href="/tours">
            <a className="text-base font-semibold no-underline inline-flex items-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              All tours
            </a>
          </NextLink>
        )}
      </nav>
      <form
        className="flex items-center border-2 border-solid border-gray-50 py-1 px-2 rounded-md"
        onSubmit={handleSubmit}
      >
        <button className="mr-3 translate-y-px" type="submit">
          <svg className="h-6 w-6 fill-current">
            <use xlinkHref="/img/icons.svg#icon-search"></use>
          </svg>
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search tours"
          className="outline-none bg-transparent text-base w-48 transition-all duration-300 focus:w-64"
        />
      </form>

      {isLoading ? (
        <span className="flex justify-end">
          <Loader size="text-3xl" />
        </span>
      ) : user ? (
        <nav className="flex items-center flex-2 justify-end">
          <NextLink href={user?.role === 'admin' ? '/dashboard' : '/bookings'}>
            <a className="mr-8 text-base font-semibold no-underline inline-flex items-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              {user?.role === 'admin' ? 'Dashboard' : 'My bookings'}
            </a>
          </NextLink>
          <button
            className="mr-8 text-base font-semibold no-underline inline-flex items-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5"
            onClick={signOut}
          >
            Log out
          </button>
          <NextLink href="#">
            <a className="text-base font-semibold no-underline inline-flex items-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              <img
                src={`/img/users/${user?.photo}`}
                alt="User photo"
                className="h-10 w-10 rounded-full mr-4"
              />
              <span>{user?.name}</span>
            </a>
          </NextLink>
        </nav>
      ) : (
        <nav className="flex items-center flex-2 justify-end">
          <NextLink href="/login">
            <a className="mr-8 text-base font-semibold no-underline inline-flex items-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5">
              Log in
            </a>
          </NextLink>
          <NextLink href="/register">
            <a className="text-base font-semibold inline-flex items-center transition-all duration-300 cursor-pointer  py-2 px-5 rounded-3xl border border-solid border-current  hover:-translate-y-0.5 hover:bg-white hover:text-gray-500 hover:ring-2">
              Sign up
            </a>
          </NextLink>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
