export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  modality: 'Remoto' | 'Presencial' | 'Híbrido';
  current?: boolean;
  bullets: string[];
  tags: string[];
}

export interface ExperienceCardProps {
  item: ExperienceItem;
  isLast?: boolean;
}
