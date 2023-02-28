import React from "react";

const Project = ({ object }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-y-8 sm:gap-x-8">
      <article className="w-full sm:w-1/2">
        <a href={object.link} target="_blank">
          <div className="border border-gray-300 py-10 rounded-lg shadow-card">
            <img
              className="w-full h-full"
              src={`src/assets/projects/${object.source}.png`}
            />
          </div>
        </a>
      </article>
      <article className="w-full sm:w-1/2 font-fira leading-6">
        <div>
          <div className="flex items-center gap-x-4 mb-6">
            <h3 className="font-bold text-xl text-slate-800">{object.title}</h3>
            <div className="flex items-center gap-x-2">
              {object.mobile && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-slate-800"
                    d="M10.5 1.5H8.25C7.65326 1.5 7.08097 1.73705 6.65901 2.15901C6.23705 2.58097 6 3.15326 6 3.75V20.25C6 20.8467 6.23705 21.419 6.65901 21.841C7.08097 22.2629 7.65326 22.5 8.25 22.5H15.75C16.3467 22.5 16.919 22.2629 17.341 21.841C17.7629 21.419 18 20.8467 18 20.25V3.75C18 3.15326 17.7629 2.58097 17.341 2.15901C16.919 1.73705 16.3467 1.5 15.75 1.5H13.5M10.5 1.5V3H13.5V1.5M10.5 1.5H13.5M10.5 20.25H13.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
              {object.desktop && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="stroke-slate-800"
                    d="M9 17.25V18.257C9.00005 18.6511 8.92244 19.0414 8.77162 19.4055C8.6208 19.7696 8.39971 20.1004 8.121 20.379L7.5 21H16.5L15.879 20.379C15.6003 20.1004 15.3792 19.7696 15.2284 19.4055C15.0776 19.0414 15 18.6511 15 18.257V17.25M21 5.25V15C21 15.5967 20.7629 16.169 20.341 16.591C19.919 17.0129 19.3467 17.25 18.75 17.25H5.25C4.65326 17.25 4.08097 17.0129 3.65901 16.591C3.23705 16.169 3 15.5967 3 15V5.25M21 5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25M21 5.25V12C21 12.5967 20.7629 13.169 20.341 13.591C19.919 14.0129 19.3467 14.25 18.75 14.25H5.25C4.65326 14.25 4.08097 14.0129 3.65901 13.591C3.23705 13.169 3 12.5967 3 12V5.25"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          <p className="text-slate-700">{object.description}</p>
        </div>
        <div className="mt-4">
          <a
            href={object.link}
            target="_blank"
            className="text-primarybtn underline"
          >
            {object.shortLink}
          </a>
        </div>
        <div className="mt-6 sm:mt-10">
          <h3 className="mb-6 font-semibold text-slate-700">
            Tecnologías utilizadas
          </h3>
          <div className="flex gap-x-2">
            {object.technologies.map((el) => {
              return (
                <div className="h-12 w-12">
                  <img src={`src/assets/projects/iconos/${el}.png`} />
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;
