import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1700px',
      },
      colors: {
        transparent: 'transparent',
        black: '#2A2B2E',
        white: '#FFFFFF',
        text: '#7B8298',
        bg: '#f7f1ef',
        border: '#30222d',
      },
      textColor: {
        default: '#7B8298',
        basic: '#2A2B2E',
        primary: '#4E77F7',
        secondary: '#D39800',
        footerText: '#c8ad71',
      },
      boxShadow: {
        button: '0 0 10px -5px rgba(0, 0, 0, 1)',
        article: '0 4px 16px 0 rgba(18,17,23,.15)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
