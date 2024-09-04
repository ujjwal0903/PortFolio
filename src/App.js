import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/Tech Stack/TechStack";
import ScrollToTop from 'react-scroll-to-top'
import { useTheme } from "./components/context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
      <ScrollToTop 
        smooth  
        color="#f29f67"
        style={{backgroundColor:'#1e1e2c', borderRadius:'60px'}}
        />
    </>
  );
}

export default App;
