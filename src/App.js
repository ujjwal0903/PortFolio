import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/Tech Stack/TechStack";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <TechStack />
      </div>
    </>
  );
}

export default App;
