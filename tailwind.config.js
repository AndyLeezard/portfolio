module.exports = {
    mode: "jit",
    purge: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
          testing: [
            'Consolas',
          ]
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      extend: {
        zIndex: {
          auto: 'auto',
          '-10': '-10',
        },
        minWidth: {
          8: '32px',
          12: '48px',
        },
        colors: {
          vscode_bg: {
            light: "#ffffff",
            DEFAULT: "#222426",
          },
          vscode_green: {
            light: "#60bf8f",
            DEFAULT: "#60bf8f",
          },
          vscode_mauve: {
            light: "#C586C0",
            dark: "#C586C0"
          },
          vscode_string: {
            light: "#CE9178",
            dark: "#CE8A6E"
          },
          vscode_var: {
            light: "#9CDCF7",
            dark: "#9CDCF7"
          },
          vscode_comment: {
            light: "#6A9955",
            dark: "#6A9955"
          },
          vscode_function: {
            light: "#DCDCAA",
            dark: "#DCDCAA"
          }
        }
      }
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'), // import tailwind forms
   ],
};
  