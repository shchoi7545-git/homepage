import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1758874960466-fb0a3e0007bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb29raW5nJTIwdG9nZXRoZXIlMjBraXRjaGVufGVufDF8fHx8MTc3MzkyMzQxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '함께하는 요리 시간',
    description: '주말 아침 팬케이크 만들기',
  },
  {
    url: 'https://images.unsplash.com/photo-1616465470189-573a865a63ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoaWtpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzc0MDEzODQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '자연 속 하이킹',
    description: '산책로를 걸으며 즐거운 시간',
  },
  {
    url: 'https://images.unsplash.com/photo-1755003842792-9d2b7ad08862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaWNuaWMlMjBwYXJrfGVufDF8fHx8MTc3Mzk5MTU5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '공원 소풍',
    description: '햇살 좋은 날 공원에서',
  },
  {
    url: 'https://images.unsplash.com/photo-1591849995584-262878b2d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBiZWFjaCUyMHZhY2F0aW9ufGVufDF8fHx8MTc3NDAxMzg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '여름 바다 여행',
    description: '시원한 바닷가에서의 추억',
  },
  {
    url: 'https://images.unsplash.com/photo-1772380405894-51b9728ecb88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBnYW1lJTIwbmlnaHQlMjBmdW58ZW58MXx8fHwxNzc0MDEzODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '보드게임의 밤',
    description: '온 가족이 함께하는 게임 시간',
  },
  {
    url: 'https://images.unsplash.com/photo-1624448445915-97154f5e688c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzk1ODYwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: '가족 사진',
    description: '특별한 날의 기념 촬영',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">추억 갤러리</h2>
          <p className="text-gray-600 text-lg">
            함께한 소중한 순간들
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
