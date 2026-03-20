import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1624448445915-97154f5e688c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzk1ODYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="가족 사진"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl mb-6">
          우리 가족
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          사랑과 행복이 가득한 우리 가족을 소개합니다
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('about');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition-colors"
        >
          더 알아보기
        </button>
      </div>
    </section>
  );
}
