/** @type {import('tailwindcss').Config} */
import { withUt } from 'uploadthing/tw';

export default withUt({
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ✅ App Router files
    './pages/**/*.{js,ts,jsx,tsx}', // ✅ If you use pages (optional)
    './components/**/*.{js,ts,jsx,tsx}', // ✅ Your shared components
    './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // ✅ ShadCN components
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms')],
});
