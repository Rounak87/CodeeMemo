import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0">

<div className="absolute text-3xl font-bold sm:z-10 top-4 left-4 flex items-center space-x-1 ">
  <span className="text-gray-200 tracking-wide">Code</span>
  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Memo</span>
</div>



      <div className="flex justify-center gap-5 text-2xl bg-gray-900 text-white py-2 rounded-lg shadow-lg relative">
      <NavLink to="/"
       className={({isActive})=>`px-4 py-2 rounded-lg hover:text-amber-300 transition-colors
       ${isActive ? 'text-amber-300 font-semibold' : ''}
       `

    }
      >
      Home
      </NavLink>
      <NavLink to="/memos"
       className={({isActive})=>`px-4 py-2 rounded-lg hover:text-amber-300 transition-colors
       ${isActive ? 'text-amber-300 font-semibold' : ''}
       `

    }
      >
      Memos
      </NavLink>
    </div>
    </div>
  );
};

export default Navbar;
