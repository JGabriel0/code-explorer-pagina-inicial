import JoaoGabriel from "../../assets/joao-gabriel.jpeg";
import { Github, Linkedin } from "lucide-react";

export function Main() {
  return (
    <main className="w-full h-[86%] bg-neutral-800 text-neutral-100 flex flex-col md:flex-row justify-between md:justify-center items-center">
      <section className="w-[80%] h-full flex justify-between items-center mt-2 md:mt-0">
        <div className="flex flex-col m-auto justify-between items-center gap-8">
          <img
            src={JoaoGabriel}
            alt="Foto do João Gabriel"
            className="w-40 rounded-full"
          />
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-xl font-bold">João Gabriel</h1>
            <h3 className="text-neutral-400 text-sm">
              Desenvolvedor Front-End Júnior
            </h3>
          </div>
          <div className="flex justify-evenly w-full">
            <button className="bg-red-600 p-1 rounded-lg hover:bg-red-900">
              <a
                className="flex gap-2"
                href="https://github.com/JGabriel0"
                target="_blank"
              >
                <Github /> Github
              </a>
            </button>
            <button className="bg-blue-600 p-1 rounded-lg hover:bg-blue-900">
              <a
                className="flex gap-2"
                href="https://www.linkedin.com/in/j-gabriel/"
                target="_blank"
              >
                <Linkedin /> Linkedin
              </a>
            </button>
          </div>
        </div>
      </section>

      <section className="w-[80%] h-full m-auto flex justify-between items-center">
        <div className="flex flex-col m-auto justify-between items-center gap-10">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-xl font-bold">Sobre mim</h1>
            <p className="text-sm">
              Me chamo João Gabriel tenho 21 anos, sou desenvolvedor front-end
              júnior. Gosto de programação e estou continuo estudando para
              melhorar mais. Tenho habilidades em: HTML, CSS, JavaScript, React,
              Node, PostgresSQL.
            </p>
            <p className="text-sm">
              Atualmente trabalho na Salt Informática, foi lá que aprendi tudo o
              que sei hoje, e foi lá que comecei a trabalhar com desenvolvimento
              web
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
