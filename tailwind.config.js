/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Material Design 3 Color System
      colors: {
        // Primary palette
        primary: {
          DEFAULT: 'var(--md-sys-color-primary)',
          50: 'var(--md-sys-color-primary-container)',
          100: 'var(--md-sys-color-on-primary)',
          200: 'var(--md-sys-color-on-primary-container)',
        },
        // Secondary palette
        secondary: {
          DEFAULT: 'var(--md-sys-color-secondary)',
          50: 'var(--md-sys-color-secondary-container)',
          100: 'var(--md-sys-color-on-secondary)',
          200: 'var(--md-sys-color-on-secondary-container)',
        },
        // Tertiary palette
        tertiary: {
          DEFAULT: 'var(--md-sys-color-tertiary)',
          50: 'var(--md-sys-color-tertiary-container)',
          100: 'var(--md-sys-color-on-tertiary)',
          200: 'var(--md-sys-color-on-tertiary-container)',
        },
        // Neutral palette
        surface: {
          DEFAULT: 'var(--md-sys-color-surface)',
          dim: 'var(--md-sys-color-surface-dim)',
          bright: 'var(--md-sys-color-surface-bright)',
          container: 'var(--md-sys-color-surface-container)',
          'container-low': 'var(--md-sys-color-surface-container-low)',
          'container-high': 'var(--md-sys-color-surface-container-high)',
          'container-highest': 'var(--md-sys-color-surface-container-highest)',
        },
        // Semantic colors
        error: {
          DEFAULT: 'var(--md-sys-color-error)',
          container: 'var(--md-sys-color-error-container)',
          50: 'var(--md-sys-color-on-error)',
          100: 'var(--md-sys-color-on-error-container)',
        },
        outline: {
          DEFAULT: 'var(--md-sys-color-outline)',
          variant: 'var(--md-sys-color-outline-variant)',
        },
      },
      
      // Material Design 3 Typography
      fontFamily: {
        'display': ['var(--md-sys-typescale-display-large-font)', 'Roboto', 'Arial', 'sans-serif'],
        'headline': ['var(--md-sys-typescale-headline-large-font)', 'Roboto', 'Arial', 'sans-serif'],
        'title': ['var(--md-sys-typescale-title-large-font)', 'Roboto', 'Arial', 'sans-serif'],
        'body': ['var(--md-sys-typescale-body-large-font)', 'Roboto', 'Arial', 'sans-serif'],
        'label': ['var(--md-sys-typescale-label-large-font)', 'Roboto', 'Arial', 'sans-serif'],
      },
      
      // Material Design 3 Spacing
      spacing: {
        'xs': 'var(--md-sys-spacing-4)',
        'sm': 'var(--md-sys-spacing-8)',
        'md': 'var(--md-sys-spacing-12)',
        'lg': 'var(--md-sys-spacing-16)',
        'xl': 'var(--md-sys-spacing-24)',
        '2xl': 'var(--md-sys-spacing-32)',
        '3xl': 'var(--md-sys-spacing-48)',
      },
      
      // Material Design 3 Elevation
      boxShadow: {
        'elevation-1': 'var(--md-sys-elevation-1)',
        'elevation-2': 'var(--md-sys-elevation-2)',
        'elevation-3': 'var(--md-sys-elevation-3)',
        'elevation-4': 'var(--md-sys-elevation-4)',
        'elevation-5': 'var(--md-sys-elevation-5)',
      },
      
      // Material Design 3 Border Radius
      borderRadius: {
        'none': '0',
        'xs': 'var(--md-sys-shape-corner-extra-small)',
        'sm': 'var(--md-sys-shape-corner-small)',
        'md': 'var(--md-sys-shape-corner-medium)',
        'lg': 'var(--md-sys-shape-corner-large)',
        'xl': 'var(--md-sys-shape-corner-extra-large)',
        'full': '9999px',
      },
      
      // Animation and Motion
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
