import Head from 'next/head';
import Header from './header';
import Footer from './footer';

const Layout = props => {
  return (
    <div className="main-layout">
      <Head>
        <title>smnmtchll — portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="smnmtchll portfolio" />
        <meta property="og:description" content="A portfolio site." />
        <meta
          property="og:image"
          content="https://smnmtchll-portfolio.now.sh/img/smnmtchll.png"
        />
        <meta property="og:url" content="http://smnmtchll.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="smnmtchll portfolio" />
        <meta name="twitter:image:alt" content="Photography by Jack Hoyle" />
      </Head>
      <Header />
      <div className="main-content">{props.children}</div>
      <div className="cloud">
        <img src="/img/layout/cloud.png"></img>
      </div>
      <Footer />
      <style jsx>{`
        .cloud img {
          position: fixed;
          right: -2000px;
          top: 0;
          animation-name: cloud;
          animation-duration: 30s;
          animation-delay: 1s;
          animation-iteration-count: infinite;
          opacity: 0;
          z-index: -1;
        }
        @keyframes cloud {
          0% {
            right: -2000px;
            opacity: 0.8;
          }
          50% {
            opacity: 0.6;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            right: 0px;
            opacity: 0;
          }
        }
        .main-content {
          margin: 100px auto 0 auto;
          padding: 0 0 40px 0;
          width: 90%;
          max-width: 900px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
