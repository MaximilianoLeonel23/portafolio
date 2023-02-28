import Nav from "./Nav";
import Social from "./Social";
import { NavLink } from "react-router-dom";
const Header = () => {
  const changeBtn = () => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const menu = document.getElementById("menu");

    menu.classList.toggle("translate-x-0");
    line1.classList.toggle("translate-y-2.5");
    line1.classList.toggle("rotate-45");
    line2.classList.toggle("opacity-0");
    line3.classList.toggle("-translate-y-2.5");
    line3.classList.toggle("-rotate-45");
  };

  return (
    <header className="lg:border-b lg:border-slate-200 lg:shadow-sm">
      <div className="container hidden sm:flex justify-between items-center mx-auto h-14">
        {/* Mail, contacto */}
        {/* <div>
          <a href="/" className="flex gap-x-4 items-center">
            <svg
              width="24"
              height="18"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.4294 0.777324L14.9014 10.16C14.6571 10.3778 14.3413 10.4981 14.014 10.4981C13.6868 10.4981 13.3709 10.3778 13.1267 10.16L2.55469 0.782658C2.80707 0.70568 3.06949 0.666587 3.33335 0.666658H24.6667C24.9249 0.666424 25.1818 0.703702 25.4294 0.777324ZM27.2374 2.62399C27.3 2.85066 27.3334 3.08799 27.3334 3.33332V16.6667C27.3334 17.3739 27.0524 18.0522 26.5523 18.5523C26.0522 19.0524 25.3739 19.3333 24.6667 19.3333H3.33335C2.62611 19.3333 1.94783 19.0524 1.44774 18.5523C0.947639 18.0522 0.666687 17.3739 0.666687 16.6667V3.33332C0.666687 3.08666 0.70002 2.84799 0.762687 2.62132L11.352 12.152C12.0847 12.805 13.0319 13.1658 14.0134 13.1658C14.9948 13.1658 15.942 12.805 16.6747 12.152L27.2374 2.62399Z"
                fill="#334155"
              />
            </svg>
            <h4 className="text-slate-700 font-medium">
              maxoleo.dev@gmail.com
            </h4>
          </a>
        </div> */}
        {/* Redes */}
        <Social />
        {/* Menú de navegación - Desktop */}
        <Nav />
      </div>
      {/* Menú denavegación - Mobile */}
      <div className="container flex items-center sm:hidden mx-auto py-8">
        <div className="flex flex-col gap-y-2 z-10" onClick={changeBtn}>
          <span
            id="line1"
            className="w-8 h-0.5 rounded-lg bg-slate-700 transition"
          ></span>
          <span
            id="line2"
            className="w-8 h-0.5 -translate-x-1 rounded-lg bg-slate-700 transition"
          ></span>
          <span
            id="line3"
            className="w-8 h-0.5 rounded-lg bg-slate-700 transition"
          ></span>
        </div>
      </div>
      <div
        id="menu"
        className="fixed top-0 left-0 w-full h-screen -translate-x-full bg-slate-200 transition duration-300"
      >
        <div className="container flex flex-col h-full justify-between pt-12 pb-8 font-mont text-slate-800">
          <nav className="flex flex-col text-slate-700 font-semibold text-2xl gap-y-4 mt-16 ">
            <NavLink to="/" onClick={changeBtn} className="">
              Inicio
            </NavLink>
            <NavLink to="/proyectos" onClick={changeBtn} className="">
              Proyectos
            </NavLink>
            <NavLink to="/sobre-mi" onClick={changeBtn} className="">
              Sobre mi
            </NavLink>
          </nav>
          <div>
            <div className="pb-4">
              <p>Contáctame en</p>
              <a href="mailto:maxoleo.dev@gmail.com">
                <h4 className="font-semibold text-lg">maxoleo.dev@gmail.com</h4>
              </a>
              <p>o en mis redes sociales</p>
            </div>
            <Social />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
