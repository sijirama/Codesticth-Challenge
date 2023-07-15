/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                myprimary: '#8E4D2D',
                mysecondary: '#0a0a0a',
                mytertiary: '#5e5e5e'
            },
            fontFamily: {
                Abril: ['Abril Fatface', 'cursive'],
                Lexend: ['Lexend', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif']
            }
        },
        plugins: []
    }
}
