import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const style = {
  nav: `bg-gray-800 h-1/7 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <header class="h-1/7  top-0 block text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="lg:ml-80 text-xl text-white">CIAO</span>
        </a>
        <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none lg:ml-96 rounded text-base mt-4 ">
          {user ? <LogOut /> : <SignIn />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
