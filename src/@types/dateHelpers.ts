import { DayOfWeek } from './rotina';

export const daysOrder: DayOfWeek[] = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
];

export const getDayName = (dayKey: DayOfWeek): string => {
  return dayKey;
};

export const getDayKeyForFirebase = (dayName: DayOfWeek): string => {
  const dayKeysMap: Record<DayOfWeek, string> = {
    'Segunda-feira': 'monday',
    'Terça-feira': 'tuesday',
    'Quarta-feira': 'wednesday',
    'Quinta-feira': 'thursday',
    'Sexta-feira': 'friday',
    'Sábado': 'saturday',
    'Domingo': 'sunday',
  };
  return dayKeysMap[dayName] || 'monday';
};

export const getCurrentDayPortuguese = (): DayOfWeek => {
  const date = new Date();
  const dayIndex = date.getDay();
  const adjustedIndex = (dayIndex === 0) ? 6 : dayIndex - 1;
  return daysOrder[adjustedIndex];
};