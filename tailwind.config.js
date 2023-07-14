/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                myprimary: '#060D08',
                mysecondary: '#1D2A10',
                mytertiary: '#595D2B',
                mycomplimentary: '#CD8A39',
                mydarkcomplimentary: '#A24502',

                mymainbg: '#fbf1c7',

                mythemegreen: '#003E29',

                myred: '#cc241d',
                mygrey: '#1d2021',
                myorange: '#fe8019',
                mypurple: '#d3869b',
                myaqua: '#8ec07c',
                mylightbrownbg: '#ebdbb2'
            },
            fontFamily: {
                Public: ['Public sans', 'sans-serif'],
                Lexend: ['Lexend', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif']
            }
        },
        plugins: []
    }
}
