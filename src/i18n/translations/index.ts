import { default as enUS } from './en-US';
import { default as ptBR } from './pt-BR';
import { default as esES } from './es-ES';

export type SupportedLocales = 'en' | 'pt' | 'es';

export const messages = {
  en: enUS,
  pt: ptBR,
  es: esES,
} as const;