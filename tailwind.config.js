/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeInLeft: 'fadeInLeft 0.5s ease-in-out',
        fadeInRight: 'fadeInRight 0.5s ease-in-out',
        fadeInTop: 'fadeInTop 0.5s ease-in-out',
        fadeInBottom: 'fadeInBottom 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            transform: 'translate(-30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        },
        fadeInRight: {
          '0%': {
            transform: 'translate(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        },
        fadeInTop: {
          '0%': {
            transform: 'translate(0, 30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        },
        fadeInBottom: {
          '0%': {
            transform: 'translate(0, -30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      customLight: {
        "primary": "#08081b",
        "secondary": "#09aef2",
        "accent": "#ff8de1",
        "neutral": "#ffd400",
        "base-100": "#fff",
        "info": "#fff",
        "success": "#18723a",
        "warning": "#fcac4f",    
        "error": "#e9354d",
        },
    },{
      customDark: {
        "primary": "#fff",
        "secondary": "#09aef2",
        "accent": "#ff8de1",
        "neutral": "#ffd400",
        "base-100": "#08081b",
        "info": "#588edf",
        "success": "#18723a",
        "warning": "#fcac4f",    
        "error": "#e9354d",
        },
    },{
      cake: {
        "primary": "#33272a",
        "secondary": "#ffc6c7",
        "accent": "#8bd3dd",
        // "neutral": "#c3f0ca",
        "neutral": "#81df90",
        "base-100": "#fffffe",
        "info": "#588edf",
        "success": "#18723a",
        "warning": "#fcac4f",    
        "error": "#e9354d",
        },
    },{
      customGreen: {
        "primary": "#001e1d",
        "secondary": "#abd1c6",
        "accent": "#e16162",
        "neutral": "#f9bc60",
        "base-100": "#004643",
        "info": "#588edf",
        "success": "#18723a",
        "warning": "#fcac4f",    
        "error": "#e9354d",
        },
    }],
    darkTheme: 'customDark',
  },
}
