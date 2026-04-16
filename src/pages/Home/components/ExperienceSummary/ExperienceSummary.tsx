import { Link } from 'react-router-dom';
import './ExperienceSummary.scss';
import { useLanguage } from '@/app/context/LanguageContext';

const ExperienceSummary = () => {
  const { t } = useLanguage();

  const EXPERIENCE_SUMMARY = [
    {
      companyKey: 'izertis-cni',
      company: t('experienceSummary.companies.izertis-cni'),
      role: t('experience.jobs.izertis-cni.role'),
      period: t('experience.jobs.izertis-cni.period'),
      modality: t('experienceSummary.modality.remote'),
      current: true,
      tags: ['React 19', 'TypeScript', 'SCSS', 'Microfrontends', 'Clean Architecture'],
    },
    {
      companyKey: 'izertis-ibm',
      company: t('experienceSummary.companies.izertis-ibm'),
      role: t('experience.jobs.izertis-ibm.role'),
      period: t('experience.jobs.izertis-ibm.period'),
      modality: t('experienceSummary.modality.remote'),
      current: false,
      tags: ['Angular 15', 'TypeScript', 'RxJS', 'Bootstrap'],
    },
    {
      companyKey: 'tecnova',
      company: t('experienceSummary.companies.tecnova'),
      role: t('experience.jobs.tecnova.role'),
      period: t('experience.jobs.tecnova.period'),
      modality: t('experienceSummary.modality.onsite'),
      current: false,
      tags: ['Angular 8-18', 'JavaScript', 'TypeScript', 'Bootstrap', 'Oracle', 'jQuery'],
    },
  ];

  return (
    <section className="exp-summary">
      <div className="exp-summary__header">
        <div className="exp-summary__left">
          <p className="exp-summary__label">{t('experienceSummary.label')}</p>
          <h2 className="exp-summary__title">{t('experienceSummary.title')}</h2>
        </div>
        <Link to="/experiencia" className="exp-summary__cta">
          {t('experienceSummary.cta')}
        </Link>
      </div>

      <div className="exp-summary__list">
        {EXPERIENCE_SUMMARY.map((item) => (
          <div className="exp-summary__item" key={item.companyKey}>
            <div>
              <div className="exp-summary__company">{item.company}</div>
              <div className="exp-summary__role">{item.role}</div>
            </div>
            <div className="exp-summary__right">
              <span className="exp-summary__period">
                {item.period}
                {item.current && (
                  <span className="exp-summary__badge exp-summary__badge--current">{t('experienceSummary.current')}</span>
                )}
              </span>
              <span className="exp-summary__badge">{item.modality}</span>
            </div>
             <div className="exp-card__tags">
        {item.tags.map((tag, i) => (
          <span className="exp-card__tag" key={i}>{tag}</span>
        ))}
      </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSummary;
