import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function runLighthouseAudit() {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu']
  })

  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
    settings: {
      // Simulate mobile device for performance testing
      formFactor: 'mobile',
      throttling: {
        rttMs: 150,
        throughputKbps: 1638.4,
        cpuSlowdownMultiplier: 4
      },
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        disabled: false,
      }
    }
  }

  try {
    console.log('🚀 Lancement de l\'audit Lighthouse...')
    console.log('📍 URL: http://localhost:3000')
    const runnerResult = await lighthouse('http://localhost:3000', options)

    // Save raw results
    const resultsDir = path.join(__dirname, '../lighthouse-reports')
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true })
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const reportPath = path.join(resultsDir, `lighthouse-${timestamp}.json`)
    fs.writeFileSync(reportPath, runnerResult.report)

    // Extract key metrics
    const { lhr } = runnerResult

    // Extraction des métriques principales avec vérifications de sécurité
    const metrics = {
      fcp: lhr.audits['first-contentful-paint']?.numericValue || 0,
      lcp: lhr.audits['largest-contentful-paint']?.numericValue || 0,
      cls: lhr.audits['cumulative-layout-shift']?.numericValue || 0,
      tti: lhr.audits['interactive']?.numericValue || 0,
      speed: lhr.audits['speed-index']?.numericValue || 0,
      totalBlockingTime: lhr.audits['total-blocking-time']?.numericValue || 0
    }

    // Extraction des scores avec vérifications de sécurité
    const scores = {
      performance: Math.round((lhr.categories.performance?.score || 0) * 100),
      accessibility: Math.round((lhr.categories.accessibility?.score || 0) * 100),
      bestPractices: Math.round((lhr.categories['best-practices']?.score || 0) * 100),
      seo: Math.round((lhr.categories.seo?.score || 0) * 100)
    }

    // Generate markdown report
    const markdownReport = generateMarkdownReport(scores, metrics, timestamp)
    const markdownPath = path.join(resultsDir, `lighthouse-report-${timestamp.slice(0, 10)}.md`)
    fs.writeFileSync(markdownPath, markdownReport)

    console.log('\n📊 SCORES LIGHTHOUSE')
    console.log('=====================')
    console.log(`🎯 Performance: ${scores.performance}/100`)
    console.log(`♿ Accessibilité: ${scores.accessibility}/100`)
    console.log(`✅ Bonnes pratiques: ${scores.bestPractices}/100`)
    console.log(`🔍 SEO: ${scores.seo}/100`)
    
    console.log('\n⚡ MÉTRIQUES CORE WEB VITALS')
    console.log('============================')
    console.log(`🎨 First Contentful Paint: ${Math.round(metrics.fcp)}ms`)
    console.log(`🏔️ Largest Contentful Paint: ${Math.round(metrics.lcp)}ms`)
    console.log(`📏 Cumulative Layout Shift: ${metrics.cls.toFixed(3)}`)
    console.log(`⚡ Time to Interactive: ${Math.round(metrics.tti)}ms`)
    console.log(`🏃 Speed Index: ${Math.round(metrics.speed)}ms`)
    console.log(`⏱️ Total Blocking Time: ${Math.round(metrics.totalBlockingTime)}ms`)
    console.log(`\n📁 Rapport complet: ${reportPath}`)
    console.log(`📝 Rapport markdown: ${markdownPath}`)

  } catch (error) {
    console.error('❌ Erreur lors de l\'audit:', error)
  } finally {
    await chrome.kill()
  }
}

function generateMarkdownReport(scores, metrics, timestamp) {
  return `# Audit Lighthouse Reservia M3

**Date:** ${new Date(timestamp.replace(/-/g, ':')).toLocaleString()}
**URL:** http://localhost:3000

## 📊 Scores Globaux

| Catégorie | Score |
|-----------|-------|
| 🎯 Performance | ${scores.performance}/100 |
| ♿ Accessibilité | ${scores.accessibility}/100 |
| ✅ Bonnes pratiques | ${scores.bestPractices}/100 |
| 🔍 SEO | ${scores.seo}/100 |

## ⚡ Core Web Vitals

| Métrique | Valeur | Statut |
|----------|--------|--------|
| **First Contentful Paint (FCP)** | ${Math.round(metrics.fcp)}ms | ${metrics.fcp < 1800 ? '✅ Bon' : metrics.fcp < 3000 ? '⚠️ À améliorer' : '❌ Lent'} |
| **Largest Contentful Paint (LCP)** | ${Math.round(metrics.lcp)}ms | ${metrics.lcp < 2500 ? '✅ Bon' : metrics.lcp < 4000 ? '⚠️ À améliorer' : '❌ Lent'} |
| **Cumulative Layout Shift (CLS)** | ${metrics.cls.toFixed(3)} | ${metrics.cls < 0.1 ? '✅ Bon' : metrics.cls < 0.25 ? '⚠️ À améliorer' : '❌ Mauvais'} |
| **Time to Interactive (TTI)** | ${Math.round(metrics.tti)}ms | ${metrics.tti < 3800 ? '✅ Bon' : metrics.tti < 7300 ? '⚠️ À améliorer' : '❌ Lent'} |
| **Speed Index** | ${Math.round(metrics.speed)} | ${metrics.speed < 3400 ? '✅ Bon' : metrics.speed < 5800 ? '⚠️ À améliorer' : '❌ Lent'} |
| **Total Blocking Time** | ${Math.round(metrics.totalBlockingTime)}ms | ${metrics.totalBlockingTime < 200 ? '✅ Bon' : metrics.totalBlockingTime < 600 ? '⚠️ À améliorer' : '❌ Lent'} |

## 🎯 Recommandations d'Optimisation

### Performance
- ✅ Next.js Image optimization configuré
- ✅ Dynamic imports implémentés  
- ✅ Lazy loading des sections
- ✅ Code splitting automatique

### Prochaines Étapes
- [ ] Optimiser les fonts avec next/font
- [ ] Implémenter le Service Worker
- [ ] Optimiser les animations Framer Motion
- [ ] Minimiser les bundle JavaScript

## 📈 Évolution

Cette baseline servira de référence pour mesurer les améliorations futures.
`
}

// Execute if called directly
runLighthouseAudit()
