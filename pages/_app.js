import { ThemeProvider } from '../context/ThemeContext';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      {/* Layout will handle applying the font variables and theme class to the body */}
      <Layout fontVariables={`${inter.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;