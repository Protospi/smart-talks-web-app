import en from './en-US';
import es from './es-ES';
import pt from './pt-BR';

export type SupportedLocales = 'en' | 'es' | 'pt';

export { default as en } from './en-US';
export { default as es } from './es-ES';
export { default as pt } from './pt-BR';

export const messages = {
  en: en,
  es: es,
  pt: pt,
}; 