import { useState } from 'react';
import './TechStack.scss';
import Modal from '@/common-submodule/src/components/Modal/Modal';
import forkLogo from '@/assets/img/fork-logo.png';
import jsLogo from '@/assets/img/js-logo.png';
import { useLanguage } from '@/app/context/LanguageContext';

interface TechConfig {
  id: string;
  name: string;
  icon: string;
}

interface TechItem extends TechConfig {
  experience: string;
  level: string;
  description: string;
}

const TOKEN = 'live_6a1a28fd-6420-4492-aeb0-b297461d9de2';
const logo = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${TOKEN}&format=png&theme=dark&size=64`;

const TECH_CONFIG: TechConfig[] = [
  { id: 'react', name: 'React 19+', icon: logo('react.dev') },
  { id: 'angular', name: 'Angular', icon: logo('angular.dev') },
  { id: 'ts', name: 'TypeScript', icon: logo('typescriptlang.org') },
  { id: 'js', name: 'JavaScript', icon: jsLogo },
  { id: 'scss', name: 'SCSS', icon: logo('sass-lang.com') },
  { id: 'bootstrap', name: 'Bootstrap', icon: logo('getbootstrap.com') },
  { id: 'git', name: 'GitFlow', icon: logo('git-scm.com') },
  { id: 'github', name: 'GitHub', icon: logo('github.com') },
  { id: 'fork', name: 'Fork', icon: forkLogo },
  { id: 'swagger', name: 'Swagger', icon: logo('swagger.io') },
  { id: 'postman', name: 'Postman', icon: logo('postman.com') },
  { id: 'bruno', name: 'Bruno', icon: logo('usebruno.com') },
  { id: 'jira', name: 'Jira', icon: logo('atlassian.com') },
  { id: 'trello', name: 'Trello', icon: logo('trello.com') },
  { id: 'toad', name: 'Toad Oracle', icon: logo('toadworld.com') },
];

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const { t } = useLanguage();

  const techStack: TechItem[] = TECH_CONFIG.map((cfg) => ({
    ...cfg,
    experience: t(`tech.items.${cfg.id}.experience`),
    level: t(`tech.items.${cfg.id}.level`),
    description: t(`tech.items.${cfg.id}.description`),
  }));

  return (
    <section className="tech-stack">
      <div className="tech-stack__header">
        <p className="tech-stack__label">{t('tech.label')}</p>
        <h2 className="tech-stack__title">{t('tech.title')}</h2>
      </div>

      <div className="tech-stack__grid">
        {techStack.map((tech) => (
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
