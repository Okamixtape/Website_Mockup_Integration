'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n/context'

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-high text-on-surface py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.about}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.company}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.team}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.support}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help-center" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.help}
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.safety}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-on-surface-variant hover:text-primary transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-outline-variant pt-8 text-center text-on-surface-variant">
          <p> {currentYear} Reservia. {t.footer.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
}
