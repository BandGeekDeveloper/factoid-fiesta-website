/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['garden', 'dracula'],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    logs: true,
  },
};
