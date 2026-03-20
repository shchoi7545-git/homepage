import { Heart, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-rose-500" fill="currentColor" />
              <span className="text-xl">우리 가족</span>
            </div>
            <p className="text-gray-400">
              사랑과 행복이 가득한 우리 가족의 소중한 공간입니다
            </p>
          </div>

          <div>
            <h3 className="text-lg mb-4">바로가기</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                가족 소개
              </button>
              <button
                onClick={() => document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                가족 구성원
              </button>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                추억 갤러리
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4">연락처</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={20} />
                <span>family@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={20} />
                <span>010-1234-5678</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 우리 가족. Made with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
