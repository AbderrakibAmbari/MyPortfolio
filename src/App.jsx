import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Footer from './components/Footer';
function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Skills />
      <Stats />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;