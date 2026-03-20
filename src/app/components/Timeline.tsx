import { Calendar, MapPin, Star } from 'lucide-react';

const activities = [
  {
    date: '2026년 3월',
    title: '봄 나들이',
    description: '벚꽃이 만개한 공원에서 즐거운 시간을 보냈습니다',
    icon: MapPin,
    color: 'bg-pink-500',
  },
  {
    date: '2026년 2월',
    title: '설날 가족 모임',
    description: '온 가족이 모여 떡국을 먹고 윷놀이를 했습니다',
    icon: Star,
    color: 'bg-red-500',
  },
  {
    date: '2026년 1월',
    title: '새해 첫 여행',
    description: '강원도 스키장에서 신나는 겨울 스포츠를 즐겼습니다',
    icon: Calendar,
    color: 'bg-blue-500',
  },
  {
    date: '2025년 12월',
    title: '크리스마스',
    description: '집에서 트리를 장식하고 선물을 교환했습니다',
    icon: Star,
    color: 'bg-green-500',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">가족 활동</h2>
          <p className="text-gray-600 text-lg">
            함께한 특별한 순간들
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {activities.map((activity, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Icon */}
                <div className={`${activity.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg`}>
                  <activity.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-rose-500 text-sm mb-2">
                    {activity.date}
                  </div>
                  <h3 className="text-2xl mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
