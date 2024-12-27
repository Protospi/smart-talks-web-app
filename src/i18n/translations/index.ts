import { enUS } from './en-US';
import { ptBR } from './pt-BR';
import { esES } from './es-ES';

export const messages = {
  en: enUS,
  pt: ptBR,
  es: esES,
} as const;

export type SupportedLocales = keyof typeof messages;