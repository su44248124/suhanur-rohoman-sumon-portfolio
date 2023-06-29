import { animated, useSpring } from '@react-spring/web'
import Navbar from './pages/navbar/Navbar';
import Banner from './pages/banner/Banner';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

const App = () => {
  const springProps = useSpring({
    opacity: 2,
    from: { opacity: 0 },
    config: { duration: 5000 },
  });

  return (
    <animated.div style={springProps}>
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Skills />
    </animated.div>
  );
};

export default App;