import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <HeroSection />
        {/* ⬇ placeholder for the upcoming three-logos component ⬇ */}
        <section className="h-[15vh] bg-base-dark"></section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;