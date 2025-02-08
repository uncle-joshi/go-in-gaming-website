import Contact from "./Components/Contact";
import DiscoverMoreGames from "./Components/DiscoverMoreGames";
import Features from "./Components/Features";
import Hero from "./Components/Hero"
import NavBar from "./Components/NavBar";
import Story from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <DiscoverMoreGames />
      <Features />
      <Story />
      <Contact />
    </main>
  );
}

export default App;
