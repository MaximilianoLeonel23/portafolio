import { Link } from "react-router-dom";

const Home = () => {
  return (
    
        <div className="my-auto w-1/3">
          <div className="text-4xl text-slate-700 leading-tight">
            <h2>¡Hola!</h2>
            <h2>
              Mi nombre es <b>Maximiliano</b>
            </h2>
            <h2>
              Soy <b>Desarrollador Front-End</b>
            </h2>
          </div>
          <div className="flex gap-x-4 items-center group text-slate-700 mt-8 mb-4">
            <Link
              to="/proyectos"
              className="text-md font-fira group-hover:cursor-pointer"
            >
              ¿Quieres conocer mis trabajos?
            </Link>
            <svg
              className="group-hover:translate-x-4 group-hover:cursor-pointer transition "
              width="14"
              height="20"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"
                fill="#5972C0"
              />
            </svg>
          </div>
          <div className="flex gap-x-4 items-center group text-slate-700">
            <Link className="text-md font-fira group-hover:cursor-pointer">
              ¿Tienes preguntas? Contacta conmigo
            </Link>
            <svg
              className="group-hover:translate-x-4 group-hover:cursor-pointer transition "
              width="14"
              height="20"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5H12V10.5H11V13.5Z"
                fill="#5972C0"
              />
            </svg>
          </div>
        </div>
      
  );
};

export default Home;
