import { animated, useSpring } from "@react-spring/web";
import Navbar from "./pages/navbar/Navbar";
import Banner from "./pages/banner/Banner";
import About from "./pages/about/About";
import Contactus from "./pages/contactus/Contactus";
import Footer from "./pages/footer/Footer";
import Skills from "./pages/skills/Skills";
import Project from "./pages/projects/Project";

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
      <Skills />
      <Project />
      <Contactus />
      <Footer />
    </animated.div>
  );
};

export default App;
