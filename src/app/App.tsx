import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FamilyMembers } from './components/FamilyMembers';
import { Gallery } from './components/Gallery';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <FamilyMembers />
      <Gallery />
      <Timeline />
      <Footer />
    </div>
  );
}
