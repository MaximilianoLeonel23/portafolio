const Projects = () => {
  return (
    <section className="px-32 h-[80vh] flex">
      <div className="m-auto w-3/4 flex gap-x-8">
        <article className="w-1/2">
          <div>
            <img src="src\img\58219.jpg" alt="proyecto#" />
          </div>
        </article>
        <article className="w-1/2 text-slate-700 font-fira leading-6">
          <div>
            <h3 className="mb-6 font-bold text-lg">E-commerce</h3>
            <p>
              “Nam finibus libero sed nulla interdum, ac vehicula ex tincidunt.
              Integer ac convallis libero. Nullam ac pulvinar nulla. Etiam
              vehicula ullamcorper imperdiet. Donec id eros at urna condimentum
              iaculis ac sed metus. Proin eget lorem egestas, porta magna quis,
              ultrices leo.”
            </p>
          </div>
          <div className="mt-10">
            <h3 className="mb-6 font-bold text-lg">Tecnologías utilizadas</h3>
            <div className="flex gap-x-2">
              <div className="h-12 w-12 bg-slate-200 rounded-md"></div>
              <div className="h-12 w-12 bg-slate-200 rounded-md"></div>
              <div className="h-12 w-12 bg-slate-200 rounded-md"></div>
              <div className="h-12 w-12 bg-slate-200 rounded-md"></div>
              <div className="h-12 w-12 bg-slate-200 rounded-md"></div>
              <div className="h-12 w-12 bg-slate-200 rounded-md"></div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
