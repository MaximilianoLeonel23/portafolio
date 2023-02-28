import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="hidden sm:flex items-center gap-x-2 text-slate-700 font-medium">
      <NavLink
        to="/"
        className="hover:bg-slate-100 py-2 px-4 rounded transition"
      >
        Inicio
      </NavLink>
      <NavLink
        to="/proyectos"
        className="hover:bg-slate-100 py-2 px-4 rounded transition"
      >
        Proyectos
      </NavLink>
      <NavLink
        to="/sobre-mi"
        className="hover:bg-slate-100 py-2 px-4 rounded transition"
      >
        Sobre mi
      </NavLink>
    </nav>
  );
};

export default Nav;
