import './Portfolio.css';
import curriculo from './assets/files/Curriculo Luan Emidio de Queiroz.pdf'
import fotoLuan from './assets/imgs/luanPicture.png';

import githubIcon from './assets/imgs/icons/github.png';
import linkedinIcon from './assets/imgs/icons/linkedin.png';
import whatsappIcon from './assets/imgs/icons/whatsapp.png';

import html from './assets/imgs/icons/html5.png';
import css from './assets/imgs/icons/css3.png';
import javascript from './assets/imgs/icons/javascript.png';
import react from './assets/imgs/icons/react.png';
import csharp from './assets/imgs/icons/csharp.png';
import java from './assets/imgs/icons/java.png';
import php from './assets/imgs/icons/php.png';
import netcore from './assets/imgs/icons/netcore.png';
import mysql from './assets/imgs/icons/mysql.png';

import { FaRegFileLines, FaRegEnvelope } from "react-icons/fa6";

function Portfolio() {
  return (
    <div className='portfolio'>
      <header className='portfolio-header'>
        <nav>
          <ul>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Experiência</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='inicio'>
          <div className='containerImagem'>
            <img src={fotoLuan} />
          </div>

          <div className='containerApresentacao'>
            <h1>Olá! Eu sou o <br /><span>Luan Queiroz</span></h1>
            <h2>Desenvolvedor FullStack</h2>

            <a href={curriculo} download='Curriculo Luan'>
              <button><FaRegFileLines />Baixar CV</button>
            </a>
          </div>

          <div className='containerContato'>
            <ul>
              <li><a href='https://github.com/Luuh03' target='_blank'><img src={githubIcon} /> Luuh03</a></li>
              <li><a href='https://www.linkedin.com/in/luan-queiroz/' target='_blank'><img src={linkedinIcon} /> Luan Queiroz</a></li>
              <li><a href='https://wa.me/5519995230386' target='_blank'><img src={whatsappIcon} /> (19)99523-0386</a></li>
              <li><a href='mailto:luan.queiroz2003@gmail.com'><FaRegEnvelope /> luan.queiroz2003@gmail.com</a></li>
            </ul>
          </div>

        </section>

        <hr />

        <section className='sobre'>
          <h1>Sobre mim</h1>

          <p>
            Desenvolvedor FullStack com experiência em React, ASP.NET Core, HTML, CSS, JavaScript, Java, C# e PHP.
            Meu interesse em programação surgiu aos meus 14 anos quando comecei o curso técnico em informática da Etec de Hortolândia com o desenvolvimento de sites usando HTML e CSS.
          </p>
          <p>
            Também obtive experiência profissional em projetos gerenciados por Metodologias Ágeis como SCRUM e Kanban.
            Formado em Análise e Desenvolvimento de Sistemas no IFSP Campus Hortolândia.
          </p>
          <p>
            Atualmente meu foco é buscar oportunidades para desenvolver aplicações inovadoras e acessíveis que gerem impacto de forma eficiente.
          </p>

        </section>

        <hr />

        <section className='habilidades'>
          <h1>Habilidades</h1>

          <div className='containerHabilidades'>
            <fieldset className='sessaoHabilidades'>
              <legend>Front-end</legend>

              <ul>
                <li><img src={html} />HTML5</li>
                <li><img src={css} />CSS3</li>
                <li><img src={javascript} />JavaScript</li>
                <li><img src={react} />React</li>
              </ul>
            </fieldset>

            <fieldset className='sessaoHabilidades'>
              <legend>Back-end</legend>

              <ul>
                <li><img src={csharp} />CSharp</li>
                <li><img src={java} />Java</li>
                <li><img src={php} />PHP</li>
                <li><img src={netcore} />ASP.Net Core</li>
                <li><img src={mysql} />MySQL</li>
              </ul>
            </fieldset>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Portfolio;
