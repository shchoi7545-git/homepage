import { Heart, Home, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">가족 소개</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            우리는 서로를 아끼고 사랑하는 따뜻한 가족입니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="text-rose-500" size={32} />
            </div>
            <h3 className="text-xl text-center mb-4">사랑</h3>
            <p className="text-gray-600 text-center">
              서로를 존중하고 사랑하는 마음으로 매일을 함께합니다
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Home className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl text-center mb-4">가정</h3>
            <p className="text-gray-600 text-center">
              따뜻한 보금자리에서 즐거운 추억을 만들어갑니다
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl text-center mb-4">함께</h3>
            <p className="text-gray-600 text-center">
              언제나 서로 곁에서 힘이 되어주는 우리 가족입니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
