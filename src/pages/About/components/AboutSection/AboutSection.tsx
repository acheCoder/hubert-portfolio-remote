import './AboutSection.scss';
import avatarImg from '@/assets/img/personal.jpg';
import { useLanguage } from '@/app/context/LanguageContext';

const AboutSection = () => {
  const { t, tList } = useLanguage();

  const values = tList<{ title: string; text: string }>('about.values.items');
  const hobbies = tList<{ icon: string; label: string }>('about.hobbies.items');

  return (
    <section className="about">
      <div className="about__hero">
        <div>
          <p className="about__label">{t('about.label')}</p>
          <h1
            className="about__name"
            dangerouslySetInnerHTML={{ __html: t('about.name') }}
          />
          <p
            className="about__intro"
            dangerouslySetInnerHTML={{ __html: t('about.intro') }}
          />
        </div>
        <img className="about__photo" src={avatarImg} alt="Hubert Chim" />
      </div>

      <div className="about__block">
        <p className="about__block-label">{t('about.motivation.label')}</p>
        <h2 className="about__block-title">{t('about.motivation.title')}</h2>
        <p className="about__block-text">{t('about.motivation.text')}</p>
      </div>

      <div className="about__block">
        <p className="about__block-label">{t('about.values.label')}</p>
        <h2 className="about__block-title">{t('about.values.title')}</h2>
        <div className="about__values">
          {values.map((v) => (
            <div className="about__value-card" key={v.title}>
              <div className="about__value-title">{v.title}</div>
              <p className="about__value-text">{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about__block">
        <p className="about__block-label">{t('about.hobbies.label')}</p>
        <h2 className="about__block-title">{t('about.hobbies.title')}</h2>
        <p className="about__block-text">{t('about.hobbies.text')}</p>
        <div className="about__hobbies">
          {hobbies.map((h) => (
            <span className="about__hobby" key={h.label}>
              {h.icon} {h.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
