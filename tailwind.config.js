/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.scdn.co/i/free/bubbles-dktp.svg')",
        'foot-pattern':"url('https://www.scdn.co/i/free/lets-play.svg')"
      },
    },
    plugins: [],
  }
}