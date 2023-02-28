const About = () => {
  return (
    <section className="m-auto flex flex-col sm:flex-row gap-x-8">
      <article className="sm:w-1/2 flex flex-col leading-6 pb-8 text-slate-700 font-fira">
        <h3 className="font-bold text-lg pb-4">Un poco sobre mi...</h3>
        <p>
          Me llamo <b>Maximiliano Leonel Pérez</b> y me dedico al{" "}
          <b>desarrollo front-end.</b>
        </p>
        <p>
          Me emociona aprender cosas nuevas y poner a prueba mis capacidades.
        </p>
        <p>
          Trabajo de forma ordenada y eficiente, buscando una interacción entre
          las soluciones más convencionales y las novedosas. Me gusta resolver
          problemas y me considero una persona autodidacta por naturaleza, que
          no se detiene en sus esfuerzos hasta lograr mi objetivo.
        </p>
        <p>
          <b>Estoy abierto a nuevos proyectos</b>, asi que si tienes alguna
          propuesta y necesitas de mi colaboración{" "}
          <a href="/" className="underline text-primarybtn">
            charlemos sobre eso
          </a>
        </p>
      </article>
      <article className="sm:w-1/2">
        <div>
          <img src="src\img\58219.jpg" alt="proyecto#" />
        </div>
      </article>
    </section>
  );
};

export default About;
