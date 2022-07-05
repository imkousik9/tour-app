import Head from 'next/head';

import Footer from '../Footer';
import NavBar from '../NavBar';

function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
