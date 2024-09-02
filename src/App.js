import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import TechStack from "./pages/Tech Stack/TechStack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}

export default App;
