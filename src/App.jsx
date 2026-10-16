import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import Proposals from './components/Proposals';
import Roadmap from './components/Roadmap';
import WorkDiagram from './components/WorkDiagram';
import Candidates from './components/Candidates';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles/global.css';
import './styles/components.css';
import './styles/responsive.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profile />
        <Timeline />
        <Proposals />
        <Roadmap />
        <WorkDiagram />
        <Candidates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
