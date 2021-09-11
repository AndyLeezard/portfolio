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
            dark: "#1E1E1E",
            DEFAULT: "#222426",
          },
          vscode_green: {
            DEFAULT: "#4EC9B0",
          },
          vscode_mauve: {
            DEFAULT: "#C586C0"
          },
          vscode_string: {
            DEFAULT: "#CE8A6E"
          },
          vscode_var: {
            DEFAULT: "#9CDCF7"
          },
          vscode_comment: {
            DEFAULT: "#6A9955"
          },
          vscode_function: {
            DEFAULT: "#DCDCAA"
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
  