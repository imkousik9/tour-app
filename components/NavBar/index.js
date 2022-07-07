import React from 'react';
import NextLink from 'next/link';
import Router from 'next/router';
import { useAuth } from '../../lib/hooks';
import Loader from '../Loader';
import { FaUserAlt } from 'react-icons/fa';

function NavBar() {
  const { user, isLoading, signOut } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push(`/tours?q=${e.target.search.value}`);
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-gradient-to-r from-green-500 via-green-600 to-blue-500 px-4 capitalize text-gray-50 md:px-8 lg:px-12">
      <nav className="flex flex-2 items-center">
        <NextLink href="/">
          <a className="mr-2 w-16 cursor-pointer md:mr-4">
            <img
              className="h-6 transition-all duration-200 hover:scale-105 md:h-7"
              src="/img/logo-white.png"
              alt="Natours logo"
            />
          </a>
        </NextLink>
        {user?.role !== 'admin' && (
          <NextLink href="/tours">
            <a className="inline-flex cursor-pointer items-center text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 md:text-base">
              All tours
            </a>
          </NextLink>
        )}
      </nav>
      <form
        className="hidden items-center rounded-md border-2 border-solid border-gray-50 py-1 px-2 lg:flex"
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
          className="outline-none w-48 bg-transparent text-base transition-all duration-300 focus:w-64"
        />
      </form>

      {isLoading ? (
        <span className="flex justify-end">
          <Loader size="text-3xl" />
        </span>
      ) : user ? (
        <nav className="flex flex-2 items-center justify-end">
          <NextLink
            href={user?.role === 'admin' ? '/dashboard/bookings' : '/bookings'}
          >
            <a className="mr-4 inline-flex cursor-pointer items-center text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 md:text-base lg:mr-8">
              {user?.role === 'admin' ? 'Dashboard' : 'My bookings'}
            </a>
          </NextLink>
          <button
            className="mr-4 inline-flex cursor-pointer items-center text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 md:text-base lg:mr-8"
            onClick={signOut}
          >
            Log out
          </button>
          <NextLink href="#">
            <a className="flex cursor-pointer  flex-col items-center text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 md:text-base">
              <FaUserAlt className="md:h-5 md:w-5" />
              <span>Hi, {user?.name}</span>
            </a>
          </NextLink>
        </nav>
      ) : (
        <nav className="flex flex-2 items-center justify-end">
          <NextLink href="/login">
            <a className="mr-5 inline-flex cursor-pointer items-center text-sm font-semibold no-underline transition-all duration-300 hover:-translate-y-0.5 md:mr-8 md:text-base">
              Log in
            </a>
          </NextLink>
          <NextLink href="/register">
            <a className="inline-flex cursor-pointer items-center rounded-3xl border border-solid border-current py-2  px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5  hover:bg-white hover:text-gray-500 hover:ring-2 md:text-base">
              Sign up
            </a>
          </NextLink>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
