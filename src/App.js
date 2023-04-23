import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

// import { themeContext } from "./content";


function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    window.addEventListener("resize", resizeRatio);

    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, []);

  return  (
    // <div
    // className="App"
    // style={{
    //   background: darkMode ? "black" : "",
    //   color: darkMode ? "white" : "",
    // }}>
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Skills />
      <Certificate />
      <Hobbies />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
  // : (
  //   <em id="customMessage">Please Change the ratio to View!</em>
  // )
  
}

export default App;
