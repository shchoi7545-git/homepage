import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="text-rose-500" fill="currentColor" />
            <span className="font-semibold text-xl">우리 가족</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-500 transition-colors">
              홈
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-rose-500 transition-colors">
              가족 소개
            </button>
            <button onClick={() => scrollToSection('members')} className="text-gray-700 hover:text-rose-500 transition-colors">
              가족 구성원
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-500 transition-colors">
              추억 갤러리
            </button>
            <button onClick={() => scrollToSection('timeline')} className="text-gray-700 hover:text-rose-500 transition-colors">
              가족 활동
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-rose-500 transition-colors">
              홈
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-rose-500 transition-colors">
              가족 소개
            </button>
            <button onClick={() => scrollToSection('members')} className="block w-full text-left py-2 text-gray-700 hover:text-rose-500 transition-colors">
              가족 구성원
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-rose-500 transition-colors">
              추억 갤러리
            </button>
            <button onClick={() => scrollToSection('timeline')} className="block w-full text-left py-2 text-gray-700 hover:text-rose-500 transition-colors">
              가족 활동
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
