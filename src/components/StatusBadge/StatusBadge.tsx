import './StatusBadge.scss';
import type { StatusBadgeProps } from './StatusBadge.types';

const StatusBadge = ({ label, variant = 'available' }: StatusBadgeProps) => {
  return (
    <span className={`status-badge status-badge--${variant}`}>
      <span className="status-badge__dot" />
      {label}
    </span>
  );
};

export default StatusBadge;
