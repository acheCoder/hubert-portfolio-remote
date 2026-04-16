import './ExperienceSection.scss';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import type { ExperienceItem } from '../ExperienceCard/ExperienceCard.types';
import { useLanguage } from '@/app/context/LanguageContext';

const ExperienceSection = () => {
  const { t, tArray } = useLanguage();

  const EXPERIENCE: ExperienceItem[] = [
    {
      company: 'IZERTIS - Ciberseguridad CNI',
      role: t('experience.jobs.izertis-cni.role'),
      period: t('experience.jobs.izertis-cni.period'),
      modality: 'Remoto',
      current: true,
      bullets: tArray('experience.jobs.izertis-cni.bullets'),
      tags: ['React', 'TypeScript', 'SCSS', 'Microfrontends', 'Clean Architecture'],
    },
    {
      company: 'IZERTIS - IBM (Cliente: Telefónica)',
      role: t('experience.jobs.izertis-ibm.role'),
      period: t('experience.jobs.izertis-ibm.period'),
      modality: 'Remoto',
      bullets: tArray('experience.jobs.izertis-ibm.bullets'),
      tags: ['Angular 15', 'RxJS', 'Ngx-Translate', 'Bootstrap', 'Ngx-Bootstrap'],
    },
    {
      company: 'TECNOVA INGENIERÍA Y SISTEMAS S.A',
      role: t('experience.jobs.tecnova.role'),
      period: t('experience.jobs.tecnova.period'),
      modality: 'Presencial',
      bullets: tArray('experience.jobs.tecnova.bullets'),
      tags: ['Angular 8-18', 'Angular Material', 'NgApexCharts', 'Swagger', 'Toad Oracle'],
    },
  ];

  const EDUCATION = [
    {
      school: t('experience.education.edu1.school'),
      degree: t('experience.education.edu1.degree'),
      years: '2017 – 2019',
    },
    {
      school: t('experience.education.edu2.school'),
      degree: t('experience.education.edu2.degree'),
      years: '2015 – 2017',
    },
  ];

  const LANGUAGES = [
    { name: 'Español', level: t('experience.lang.spanish') },
    { name: 'Polaco', level: t('experience.lang.polish') },
    { name: 'Inglés', level: t('experience.lang.english') },
  ];

  return (
    <section className="experience" id="experiencia">
      <div className="experience__layout">
        <div className="experience__main">
          <div className="experience__header">
            <p className="experience__label">{t('experience.label')}</p>
            <h2 className="experience__title">{t('experience.title')}</h2>
          </div>

          <div className="experience__timeline">
            {EXPERIENCE.map((item, i) => (
              <ExperienceCard key={item.company} item={item} isLast={i === EXPERIENCE.length - 1} />
            ))}
          </div>
        </div>

        <aside className="experience__sidebar">
          <div className="experience__sidebar-section">
            <div className="experience__header">
              <p className="experience__label">{t('experience.edu.label')}</p>
              <h2 className="experience__title">{t('experience.edu.title')}</h2>
            </div>
            <div className="experience__edu-list">
              {EDUCATION.map((edu) => (
                <div className="experience__edu-item" key={edu.degree}>
                  <div className="experience__edu-title">{edu.school}</div>
                  <div className="experience__edu-sub">{edu.degree}</div>
                  <span className="experience__edu-year">{edu.years}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="experience__divider" />

          <div className="experience__sidebar-section">
            <div className="experience__header">
              <p className="experience__label">{t('experience.lang.label')}</p>
              <h2 className="experience__title">{t('experience.lang.title')}</h2>
            </div>
            <div className="experience__lang-list">
              {LANGUAGES.map((lang) => (
                <div className="experience__lang-item" key={lang.name}>
                  <span className="experience__lang-name">{lang.name}</span>
                  <span className="experience__lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ExperienceSection;
