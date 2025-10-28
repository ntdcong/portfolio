import { en } from './en';
import { vi } from './vi';
import { de } from './de';

export type TranslationType = typeof en;

export const translations: Record<string, TranslationType> = {
  en,
  vi,
  de
};
