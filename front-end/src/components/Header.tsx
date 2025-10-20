import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex  flex-shrink-0 items-center">
          <img
            src={logo}
            alt="GeekBnB logo"
            className="h-20 w-auto object-contain"
          />
        </div>

        {/* Filtro central */}
        <div className="flex items-center border border-gray-300 rounded-full px-5 py-3 shadow-md">
          <p className="border-r border-r-gray-400 pr-4">Lugar</p>
          <p className="border-r border-r-gray-400 px-4">Fecha</p>
          <p className="px-4">Huéspedes</p>

          <div className="bg-purple-500 rounded-full p-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* Perfil */}
        <div className="flex items-center border  border-gray-300 rounded-full px-4 py-3 shadow-sm">
      
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
<p>Guilherme C</p>

        </div>
      </div>
    </div>
  );
};

export default Header;
