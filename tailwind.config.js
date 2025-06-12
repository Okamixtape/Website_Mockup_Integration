/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Optimisation des fonts avec variables CSS
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      
      // Material Design 3 Color Tokens
      colors: {
        // Primary colors
        primary: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
        'primary-container': 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
        'on-primary-container': 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
        
        // Secondary colors
        secondary: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
        'secondary-container': 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
        
        // Surface colors
        surface: 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
        'on-surface': 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
        'surface-variant': 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
        'surface-container': 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
        'surface-container-low': 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
        'surface-container-high': 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
        
        // Outline
        outline: 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
        'outline-variant': 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        
        // Error colors
        error: 'rgb(var(--md-sys-color-error) / <alpha-value>)',
        'on-error': 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
        'error-container': 'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
        'on-error-container': 'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)',
      },
      
      // Typography optimisée
      fontSize: {
        'display-large': ['3.5rem', { lineHeight: '4rem', fontWeight: '400' }],
        'display-medium': ['2.8rem', { lineHeight: '3.25rem', fontWeight: '400' }],
        'display-small': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '400' }],
        'headline-large': ['2rem', { lineHeight: '2.5rem', fontWeight: '400' }],
        'headline-medium': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '400' }],
        'headline-small': ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }],
        'title-large': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'title-medium': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        'title-small': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'body-large': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'body-medium': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'body-small': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }],
        'label-large': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'label-medium': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        'label-small': ['0.6875rem', { lineHeight: '1rem', fontWeight: '500' }],
      },
      
      // Spacing basé sur Material Design
      spacing: {
        '0.5': '0.125rem', // 2px
        '1.5': '0.375rem', // 6px
        '2.5': '0.625rem', // 10px
        '3.5': '0.875rem', // 14px
        '4.5': '1.125rem', // 18px
        '5.5': '1.375rem', // 22px
        '6.5': '1.625rem', // 26px
        '7.5': '1.875rem', // 30px
      },
      
      // Élévations Material Design
      boxShadow: {
        'elevation-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        'elevation-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        'elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
        'elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
        'elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
      },
      
      // Animations optimisées
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
