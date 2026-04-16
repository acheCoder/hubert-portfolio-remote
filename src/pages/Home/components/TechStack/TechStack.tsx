import { useState } from 'react';
import './TechStack.scss';
import Modal from '@/common-submodule/src/components/Modal/Modal';
import forkLogo from '@/assets/img/fork-logo.png';
import jsLogo from '@/assets/img/js-logo.png';

interface TechItem {
  id: string;
  name: string;
  icon: string;
  experience: string;
  level: string;
  description: string;
}

const TOKEN = 'live_6a1a28fd-6420-4492-aeb0-b297461d9de2';
const logo = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${TOKEN}&format=png&theme=dark&size=64`;

const TECH_STACK: TechItem[] = [
  // Core & Frameworks
  {
    id: 'react',
    name: 'React 19+',
    icon: logo('react.dev'),
    experience: 'Actualidad',
    level: 'Principiante',
    description: 'Desarrollo de ecosistemas escalables bajo Arquitectura Hexagonal y Microfrontends con Module Federation.',
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: logo('angular.dev'),
    experience: '+5 años',
    level: 'Experto',
    description: 'Versiones 8 a 18. Migraciones críticas, arquitectura modular, lazy loading y paneles complejos.',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: logo('typescriptlang.org'),
    experience: '+5 años',
    level: 'Experto',
    description: 'Tipado estricto de contratos, generics, utility types y arquitecturas escalables.',
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: jsLogo,
    experience: '+3 años',
    level: 'Intermedio',
    description: 'ES6+, asincronía avanzada, closures y lógica core de aplicaciones.',
  },
  // State & Reactivity
  // {
  //   id: 'redux',
  //   name: 'Redux Toolkit',
  //   icon: logo('redux.js.org'),
  //   experience: '+4 años',
  //   level: 'Intermedio',
  //   description: 'Estado global centralizado con configureStore, Slices y combineReducers.',
  // },
  // {
  //   id: 'rxjs',
  //   name: 'RxJS',
  //   icon: logo('rxjs.dev'),
  //   experience: '+3 años',
  //   level: 'Intermedio',
  //   description: 'Flujos asíncronos complejos y programación reactiva en Angular.',
  // },
  // UI & Styling
  {
    id: 'scss',
    name: 'SCSS',
    icon: logo('sass-lang.com'),
    experience: '+1 años',
    level: 'Principiante',
    description: 'Theming multi-tenant, Design Tokens, mixins y arquitectura BEM en proyectos enterprise.',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: logo('getbootstrap.com'),
    experience: '+4 años',
    level: 'Avanzado',
    description: 'Diseño de interfaces consistentes y responsive con sistema de grid y componentes.',
  },
  // {
  //   id: 'material',
  //   name: 'Angular Material',
  //   icon: logo('material.angular.io'),
  //   experience: '+3 años',
  //   level: 'Intermedio',
  //   description: 'Desarrollo de paneles de administración con componentes Material Design.',
  // },
  // {
  //   id: 'apex',
  //   name: 'NgApexCharts',
  //   icon: logo('apexcharts.com'),
  //   experience: '+2 años',
  //   level: 'Intermedio',
  //   description: 'Visualización interactiva de datos y métricas en dashboards.',
  // },
  // Build & Architecture
  // {
  //   id: 'vite',
  //   name: 'Vite',
  //   icon: logo('vite.dev'),
  //   experience: '1 año',
  //   level: 'Principiante',
  //   description: 'Bundler principal para React. Module Federation, builds optimizados y dev server rápido.',
  // },
  // {
  //   id: 'mfe',
  //   name: 'Microfrontends',
  //   icon: logo('webpack.js.org'),
  //   experience: '1 año',
  //   level: 'Principiante',
  //   description: 'Module Federation y orquestación de repositorios independientes.',
  // },
  // {
  //   id: 'clean',
  //   name: 'Clean Architecture',
  //   icon: logo('nodejs.org'),
  //   experience: '1 año',
  //   level: 'Principiante',
  //   description: 'Arquitectura Hexagonal, puertos y adaptadores para sistemas desacoplados.',
  // },
  // Version Control
  {
    id: 'git',
    name: 'GitFlow',
    icon: logo('git-scm.com'),
    experience: '+5 años',
    level: 'Experto',
    description: 'Estrategias de ramificación, submódulos y resolución de conflictos en equipos grandes.',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: logo('github.com'),
    experience: '+5 años',
    level: 'Experto',
    description: 'Control de versiones, PR reviews, Actions y colaboración en equipo.',
  },
  {
    id: 'fork',
    name: 'Fork',
    icon: forkLogo,
    experience: '+3 años',
    level: 'Intermedio',
    description: 'Gestión avanzada de clientes Git y resolución visual de conflictos.',
  },
  // API & Testing
  {
    id: 'swagger',
    name: 'Swagger',
    icon: logo('swagger.io'),
    experience: '+4 años',
    level: 'Avanzado',
    description: 'Lectura e integración de contratos API documentados.',
  },
  {
    id: 'postman',
    name: 'Postman',
    icon: logo('postman.com'),
    experience: '+4 años',
    level: 'Avanzado',
    description: 'Testeo de endpoints, colecciones y validación de respuestas.',
  },
  {
    id: 'bruno',
    name: 'Bruno',
    icon: logo('usebruno.com'),
    experience: 'Actualidad',
    level: 'Intermedio',
    description: 'Cliente API open-source de nueva generación.',
  },
  // Management & Database
  {
    id: 'jira',
    name: 'Jira',
    icon: logo('atlassian.com'),
    experience: '+5 años',
    level: 'Experto',
    description: 'Metodologías ágiles, sprints y gestión del ciclo de software.',
  },
  {
    id: 'trello',
    name: 'Trello',
    icon: logo('trello.com'),
    experience: '+5 años',
    level: 'Experto',
    description: 'Organización de tareas y flujos Kanban.',
  },
  {
    id: 'toad',
    name: 'Toad Oracle',
    icon: logo('toadworld.com'),
    experience: '+2 años',
    level: 'Intermedio',
    description: 'Gestión y consulta de bases de datos relacionales Oracle.',
  },
];

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  return (
    <section className="tech-stack">
      <div className="tech-stack__header">
        <p className="tech-stack__label">Stack técnico</p>
        <h2 className="tech-stack__title">Tecnologías</h2>
      </div>

      <div className="tech-stack__grid">
        {TECH_STACK.map((tech) => (
          <button
            key={tech.id}
            className="tech-icon-btn"
            onClick={() => setSelectedTech(tech)}
            type="button"
            title={tech.name}
          >
            <img className="tech-icon-btn__icon" src={tech.icon} alt={tech.name} />
          </button>
        ))}
      </div>

      <Modal
        isOpen={selectedTech !== null}
        onClose={() => setSelectedTech(null)}
        className="tech-modal-card"
      >
        {selectedTech && (
          <div className="tech-modal">
            <div className="tech-modal__header">
              <img className="tech-modal__logo" src={selectedTech.icon} alt={selectedTech.name} />
              <span className="tech-modal__name">{selectedTech.name}</span>
            </div>
            <p className="tech-modal__description">{selectedTech.description}</p>
            <div className="tech-modal__footer">
              <span className="tech-modal__indicator" />
              <span className="tech-modal__meta">{selectedTech.experience} · {selectedTech.level}</span>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TechStack;
