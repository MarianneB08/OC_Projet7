import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Layout from './components/Layout/Layout';
import Router from './Router';

// ********** STYLES ********** //

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    width: 100%;
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: #FF6060;
    cursor: pointer;
  }

  a:visited {
    color: #FF6060;
  }

  li {
    list-style-type: none;
  }
`

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;