import type { Config } from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        blackSoftColor: 'var(--black-soft-color)',
        primaryBackground: 'var(--primary-background-color)',
        blackSoft: 'var(--black-color)',
        secondaryBackground: 'var(--shiny-yellow-leaf-gold-foil-texture-2)',
        blackSoft30: {
          DEFAULT: 'var(--black-soft-color)',
          light: 'var(--black-soft-color)',
          dark: 'var(--black-soft-color)',
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
        'custom-lg': '1130px',
        'custom-md': { max: '1130px' },
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        cormorantGaramond: ['Cormorant-Garamond', 'serif'],
      },
      borderColor: {
        primaryBackground: 'var(--primary-background-color)',
        blackSoft: 'var(--black-color)',
        blackSoft30: 'var(--black-soft-color)',
      },
      backgroundColor: {
        primaryBackground: 'var(--primary-background-color)',
        blackSoft: 'var(--black-color)',
        secondaryBackground: 'var(--shiny-yellow-leaf-gold-foil-texture-2)',
        blackSoft30: 'var(--black-soft-color)',
      },
      textColor: {
        white: 'var(--white-color)',
        primaryColor: 'var(--primary-background-color)',
        blackSoft: 'var(--black-soft-color)',
      },
      fill: {
        primaryColor: 'var(--primary-background-color)',
      },
      variants: {
        extend: {
          translate: ['group-hover'],
        },
      }
    }
  },
  plugins: [],
} satisfies Config;
