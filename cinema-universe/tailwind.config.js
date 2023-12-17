/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'merah-hati': '#130303',
        'merah-cerah': '#FF0016',
        // Tambahkan warna kustom lainnya sesuai kebutuhan Anda
      },
    },
  },
  plugins: [],
};
