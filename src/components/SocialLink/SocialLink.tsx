import './SocialLink.scss';
import type { SocialLinkProps } from './SocialLink.types';

const SocialLink = ({ href, label, icon, target = '_blank' }: SocialLinkProps) => {
  return (
    <a
      className="social-link"
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <span className="social-link__icon">{icon}</span>
      {label}
    </a>
  );
};

export default SocialLink;
