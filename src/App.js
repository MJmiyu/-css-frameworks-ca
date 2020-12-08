import { useState, useMemo } from 'react';
import Navigation from './components/Navigation';
import styled from 'styled-components';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import { HOME, NEWS, CONTACT } from './pages/pages';

const App = () => {
  const [page, setPage] = useState(HOME);

  const pageContent = useMemo(() => {
    switch (page) {
      case NEWS:
        return <News />;

      case CONTACT:
        return <Contact />;

      case HOME:
      default:
        return <Home />;
    }
  }, [page]);

  return (
    <Background>
      <Navigation page={page} onSetPage={setPage} />
      {pageContent}
      <Footer />
    </Background>
  );
};

const Background = styled.div`
  background: #efefef;
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  #yay & * {
    box-sizing: border-box;
  }
`;

export default App;
