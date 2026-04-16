import './Avatar.scss';
import type { AvatarProps } from './Avatar.types';

const Avatar = ({ src, alt, size = 120, withGlow = false }: AvatarProps) => {
  return (
    <div className={`avatar${withGlow ? ' avatar--glow' : ''}`}>
      <img className="avatar__img" src={src} alt={alt} width={size} height={size} />
    </div>
  );
};

export default Avatar;
