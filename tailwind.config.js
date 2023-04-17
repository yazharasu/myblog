/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.ts',
    './src/pages/**/*.tsx',
    './src/pages/*.ts',
    './src/pages/*.tsx',
    './src/Components/*.ts',
    './src/Components/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
