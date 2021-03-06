import Layout from '../components/main-layout';

const HomePage = () => {
  return (
    <Layout>
      <h1>
        I'VE BEEN WRITING APPLICATIONS, BUILDING WEBSITES AND CODING STUFF SINCE
        CATCHING THE BUG BACK IN THE LATE NINETIES. CURRENTLY I BUILD ON A{' '}
        <a href="https://nodejs.org/en/about/" target="_blank">
          NODE
        </a>{' '}
        /{' '}
        <a href="https://expressjs.com/" target="_blank">
          EXPRESS
        </a>{' '}
        SERVER WITH A{' '}
        <a href="https://reactjs.org/" target="_blank">
          REACT
        </a>{' '}
        OR{' '}
        <a href="https://vuejs.org/" target="_blank">
          VUE
        </a>{' '}
        FRAMEWORK UP FRONT. BUT I'M ALWAYS ON THE LOOK OUT FOR NEW THINGS TO TRY
        OUT.
      </h1>
      <style jsx>{`
        h1 {
          color: rgba(229, 247, 241, 0.8) !important;
        }
        h1 a {
          color: rgba(229, 247, 241, 0.8) !important;
          text-decoration: none;
          border-bottom: 2px solid rgba(229, 247, 241, 0.8);
        }
        h1 a:hover {
          color: rgba(229, 247, 241, 1) !important;
          cursor: pointer;
        }
        @media only screen and (max-width: 575px) {
          h1 {
            font-size: 1.6rem !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
