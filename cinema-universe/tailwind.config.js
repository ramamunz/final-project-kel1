/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        tinggiContentFiler: '1vh'
      },
      width: {
        filterDropdown: '800px',
      },
      colors: {
        'merah-hati': '#130303',
        'merah-cerah': '#FF0016',
        // Tambahkan warna kustom lainnya sesuai kebutuhan Anda
      },
    },
  },
  plugins: [],
};
