import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact"; // <-- Import Contact
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <section id="home">
        <Home />
      </section>
      <main className="w-full mx-auto p-4 space-y-16 max-w-5xl">
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
      </main>
      {/* Add Contact section as full width */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;