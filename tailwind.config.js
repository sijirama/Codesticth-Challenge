/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                myprimary: '#8E4D2D'
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
