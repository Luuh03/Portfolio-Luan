import { useState } from 'react';

import './Portfolio.css';
import curriculo from './assets/files/Curriculo Luan Emidio de Queiroz.pdf'
import fotoLuan from './assets/imgs/luanPicture.png';
import citLogo from './assets/imgs/citLogo.png';
import apexLogo from './assets/imgs/apexLogo.png';

import githubIcon from './assets/imgs/icons/github.png';
import linkedinIcon from './assets/imgs/icons/linkedin.png';

import html from './assets/imgs/icons/html5.png';
import css from './assets/imgs/icons/css3.png';
import javascript from './assets/imgs/icons/javascript.png';
import react from './assets/imgs/icons/react.png';
import csharp from './assets/imgs/icons/csharp.png';
import java from './assets/imgs/icons/java.png';
import php from './assets/imgs/icons/php.png';
import netcore from './assets/imgs/icons/netcore.png';
import mysql from './assets/imgs/icons/mysql.png';
import figma from './assets/imgs/icons/figma.png';
import git from './assets/imgs/icons/git.png'
import visualStudio from './assets/imgs/icons/visualstudio.png';
import jira from './assets/imgs/icons/jira.png';
import eclipse from './assets/imgs/icons/eclipse.png';
import vscode from './assets/imgs/icons/vscode.png';
import scrum from './assets/imgs/icons/scrum.png';
import kanban from './assets/imgs/icons/kanban.png';

import wedfy from './assets/imgs/projects/wedfy.png';
import naturezaViva from './assets/imgs/projects/naturezaViva.png';
import estoque from './assets/imgs/projects/estoque.png';
import agenda from './assets/imgs/projects/agenda.png';

import { FaRegFileLines, FaRegEnvelope, FaBars, FaXmark } from "react-icons/fa6";

function Portfolio() {
  const [abreMenu, setAbreMenu] = useState(false);

  function FechaMenuMobile() {
    setAbreMenu(false);
  }

  return (
    <div className='portfolio'>
      <header className='portfolio-header'>
        <nav>
          <div className='mobile' onClick={() => {
            setAbreMenu(!abreMenu);
          }}>
            <FaBars id='abrir' />
            <FaXmark id='fechar' />
          </div>

          <ul className={abreMenu ? "open" : ""}>
            <li><a href="#sobre" onClick={FechaMenuMobile}>Sobre mim</a></li>
            <li><a href="#habilidades" onClick={FechaMenuMobile}>Habilidades</a></li>
            <li><a href="#experiencia" onClick={FechaMenuMobile}>Experiência</a></li>
            <li><a href="#projetos" onClick={FechaMenuMobile}>Projetos</a></li>
            <li><a href="#contato" onClick={FechaMenuMobile}>Contato</a></li>
          </ul>

        </nav>
      </header>
      <main>
        <section className='inicio'>
          <div className='containerImagem'>
            <img src={fotoLuan} alt='Foto Luan Queiroz' />
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
              <li><a href='https://github.com/Luuh03' target='_blank' rel='noreferrer'><img src={githubIcon} alt='Ícone GitHub' />Luuh03</a></li>
              <li><a href='https://www.linkedin.com/in/luan-queiroz/' target='_blank' rel='noreferrer'><img src={linkedinIcon} alt='Ícone LinkedIn' />Luan Queiroz</a></li>
              <li><a href='mailto:luan.queiroz2003@gmail.com'><FaRegEnvelope />luan.queiroz2003@gmail.com</a></li>
            </ul>
          </div>

        </section>

        <hr id='sobre' />

        <section className='secao sobre'>
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

        <hr id='habilidades' />

        <section className='secao habilidades'>
          <h1>Habilidades</h1>

          <div className='containerHabilidades'>
            <fieldset className='frontend secaoHabilidades'>
              <legend>Front-end</legend>

              <ul>
                <li><img src={html} alt='Ícone HTML5' />HTML5</li>
                <li><img src={css} alt='Ícone CSS3' />CSS3</li>
                <li><img src={javascript} alt='Ícone JavaScript' />JavaScript</li>
                <li><img src={react} alt='Ícone React' />React</li>
              </ul>
            </fieldset>

            <fieldset className='backend secaoHabilidades'>
              <legend>Back-end</legend>

              <ul>
                <li><img src={csharp} alt='Ícone CSharp' />CSharp</li>
                <li><img src={java} alt='Ícone Java' />Java</li>
                <li><img src={php} alt='Ícone PHP' />PHP</li>
                <li><img src={netcore} alt='Ícone ASP.Net Core' />ASP.Net Core</li>
                <li><img src={mysql} alt='Ícone MySQL' />MySQL</li>
              </ul>
            </fieldset>

            <fieldset className='ferramentas secaoHabilidades'>
              <legend>Ferramentas</legend>

              <ul>
                <li><img src={figma} alt='Ícone Figma' />Figma</li>
                <li><img src={git} alt='Ícone Git' />Git</li>
                <li><img src={githubIcon} alt='Ícone GitHub' />GitHub</li>
                <li><img src={visualStudio} alt='Ícone Visual Studio' />Visual Studio</li>
                <li><img src={jira} alt='Ícone Jira' />Jira</li>
                <li><img src={eclipse} alt='Ícone Eclipse IDE' />Eclipse IDE</li>
                <li><img src={vscode} alt='Ícone Visual Studio Code' />Visual Studio Code</li>
              </ul>
            </fieldset>

            <fieldset className='metodologias secaoHabilidades'>
              <legend>Metodologias</legend>

              <ul>
                <li><img src={scrum} alt='Ícone sprint Scrum' />Scrum</li>
                <li><img src={kanban} alt='Ícone quadro Kanban' />Kanban</li>
              </ul>
            </fieldset>

          </div>

        </section>

        <hr id='experiencia' />

        <section className='secao'>
          <h1>Experiência</h1>

          <div className='containerExperiencia'>
            <div className='cardExperiencia'>
              <span className='data'>Fev/2022 - Mar/2023</span>

              <img src={citLogo} alt='Logo CI&T' />
              <strong>Estagiario de Desenvolvimento</strong>

              <p>Responsável por desenvolvimento de novas rotas em APIs, correção de código, testes unitários e injeção de dados.</p>
              <p><span>Tecnologias:</span> ASP.Net Core, C#, SQL, API REST, AWS</p>
            </div>

            <div className='cardExperiencia'>
              <span className='data'>Mai/2024 - Jun/2024</span>

              <img src={apexLogo} alt='Logo Apex America' />
              <strong>Consultor de Atendimento Bilíngue (Inglês)</strong>

              <p>Responsável por realizar atendimento em inglês de clientes por chat e ligação.</p>
              <p><span>Competências:</span> Escrita e fala em inglês, resolução de problemas</p>
            </div>
          </div>

        </section>

        <hr id='projetos' />

        <section className='secao'>
          <h1>Projetos</h1>

          <div className='containerProjetos'>

            <a href='https://github.com/Luuh03/Frontend-WedFY' target='_blank' rel='noreferrer'>
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${wedfy})` }} ></div>
                <h2 className='nomeProjeto'>WedFY</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>
            </a>

            <a href='https://github.com/Luuh03/natureza-viva' target='_blank' rel='noreferrer'>
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${naturezaViva})` }} ></div>
                <h2 className='nomeProjeto'>Natureza Viva</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>

            </a>

            <a href='https://github.com/Luuh03/App-Estoque-C-Sharp' target='_blank' rel='noreferrer'>
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${estoque})` }} ></div>
                <h2 className='nomeProjeto'>App Estoque</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>
            </a>

            <a href='https://github.com/Luuh03/App-Agenda-C-Sharp' target='_blank' rel='noreferrer'>
              <div className='cardProjeto'>
                <div className='imagemProjeto' style={{ backgroundImage: `url(${agenda})` }} ></div>
                <h2 className='nomeProjeto'>App Agenda</h2>
                <h2 className='verDetalhes'>Ver detalhes do projeto</h2>
              </div>
            </a>

          </div>

        </section>

        <hr id='contato' />

        <section className='secao'>
          <h1>Contato</h1>

          <div className='containerContato'>
            <ul>
              <li><a href='mailto:luan.queiroz2003@gmail.com'><FaRegEnvelope /><span>E-Mail</span>luan.queiroz2003@gmail.com</a></li>
              <li><a href='https://www.linkedin.com/in/luan-queiroz/' target='_blank' rel='noreferrer'><img src={linkedinIcon} alt='Ícone LinkedIn' /><span>LinkedIn</span>Luan Queiroz</a></li>
              <li><a href='https://github.com/Luuh03' target='_blank' rel='noreferrer'><img src={githubIcon} alt='Ícone GitHub' /><span>GitHub</span>Luuh03</a></li>
            </ul>
          </div>

        </section>

        <footer>
          <p>© 2024 Luan Queiroz | Todos os direitos reservados.</p>
        </footer>

      </main>
    </div>
  );
}

export default Portfolio;
