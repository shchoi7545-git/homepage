import { User } from 'lucide-react';

const members = [
  {
    name: '아빠',
    role: '가장',
    description: '든든한 우리 가족의 기둥',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: '엄마',
    role: '주부',
    description: '따뜻한 사랑으로 가족을 보살피는',
    color: 'from-rose-400 to-rose-600',
  },
  {
    name: '첫째',
    role: '학생',
    description: '활발하고 책임감 있는 큰 아이',
    color: 'from-green-400 to-green-600',
  },
  {
    name: '둘째',
    role: '학생',
    description: '밝고 사랑스러운 막내',
    color: 'from-purple-400 to-purple-600',
  },
];

export function FamilyMembers() {
  return (
    <section id="members" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">가족 구성원</h2>
          <p className="text-gray-600 text-lg">
            우리 가족을 소개합니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <User className="text-white" size={40} />
                </div>
                <h3 className="text-xl text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-rose-500 text-center text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
