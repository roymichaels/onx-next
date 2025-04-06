import '../styles/globals.css';
import { ThemeProvider } from '../context/Providers';

export const metadata = {
  title: 'Your App',
  description: 'Powered by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
