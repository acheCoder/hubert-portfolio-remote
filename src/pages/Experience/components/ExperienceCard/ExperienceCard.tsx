import './ExperienceCard.scss';
import type { ExperienceCardProps } from './ExperienceCard.types';

const ExperienceCard = ({ item, isLast = false }: ExperienceCardProps) => {
  return (
    <div className="exp-card">
      <span className={`exp-card__dot${item.current ? ' exp-card__dot--active' : ''}`} />
      {!isLast && <span className="exp-card__line" />}

      <div className="exp-card__meta">
        <span className="exp-card__company">{item.company}</span>
        <span className="exp-card__badge">{item.modality}</span>
      </div>

      <div className="exp-card__role">{item.role}</div>
      <div className="exp-card__period">
        {item.period}
        {item.current && (
          <span className="exp-card__badge exp-card__badge--current">Actualidad</span>
        )}
      </div>

      <ul className="exp-card__bullets">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>

      <div className="exp-card__tags">
        {item.tags.map((tag, i) => (
          <span className="exp-card__tag" key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
