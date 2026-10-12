const colors = require('tailwindcss/colors');

const gray = {
    50: '#f4faf7',
    100: '#e4f0ea',
    200: '#c5dbd0',
    300: '#9cb9aa',
    400: '#759786',
    500: '#587966',
    600: '#405e4e',
    700: '#2d4639',
    800: '#1d3027',
    900: '#14231c',
};

const primary = {
    50: '#e9fbf4',
    100: '#cff6e7',
    200: '#a2ecd1',
    300: '#6edbb5',
    400: '#38c394',
    500: '#087a5b',
    600: '#06664d',
    700: '#07523f',
    800: '#084234',
    900: '#07372c',
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                header: ['"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif'],
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary,
                gray: gray,
                neutral: gray,
                cyan: colors.teal,
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.neutral.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
