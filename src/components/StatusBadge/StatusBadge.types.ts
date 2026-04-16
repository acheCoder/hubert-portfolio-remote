export type StatusBadgeVariant = 'available' | 'busy' | 'unavailable';

export interface StatusBadgeProps {
  label: string;
  variant?: StatusBadgeVariant;
}
