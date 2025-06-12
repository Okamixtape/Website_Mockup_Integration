import { fr } from './fr'
import { en } from './en'
import { es } from './es'
import { de } from './de'
import { it } from './it'
import type { Locale } from '../config'

export type TranslationKeys = typeof fr

export const translations: Record<Locale, TranslationKeys> = {
  fr,
  en,
  es,
  de,
  it
}
