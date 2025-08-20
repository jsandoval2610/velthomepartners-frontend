/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand:  'var(--twc-brand)',
        accent: 'var(--twc-accent)',
        ink:    'var(--twc-ink)',
        muted:  'var(--twc-muted)',
        bg:     'var(--twc-bg)',
        card:   'var(--twc-card)',
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 8px 24px rgba(0,0,0,.08)' },
    },
  },
  plugins: [],
}
