# 우리 가족 홈페이지

사랑과 행복이 가득한 가족 홈페이지 샘플입니다.

## 📁 프로젝트 구조

```
/src/app/
├── App.tsx                          # 메인 애플리케이션 파일
└── components/
    ├── Header.tsx                   # 상단 네비게이션 메뉴
    ├── Hero.tsx                     # 메인 히어로 섹션
    ├── About.tsx                    # 가족 소개 섹션
    ├── FamilyMembers.tsx           # 가족 구성원 소개
    ├── Gallery.tsx                  # 추억 갤러리
    ├── Timeline.tsx                 # 가족 활동 타임라인
    └── Footer.tsx                   # 푸터
```

## 🎨 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 스크롤 네비게이션
- ✅ 가족 구성원 프로필 카드
- ✅ 인터랙티브 이미지 갤러리
- ✅ 타임라인 형식의 활동 기록
- ✅ 모바일 햄버거 메뉴

## 🛠️ 커스터마이징 가이드

### 1. 가족 구성원 수정 (`/src/app/components/FamilyMembers.tsx`)

```javascript
const members = [
  {
    name: '여기에 이름',
    role: '역할',
    description: '설명',
    color: 'from-blue-400 to-blue-600', // 원하는 색상
  },
  // 구성원 추가/삭제 가능
];
```

### 2. 갤러리 사진 변경 (`/src/app/components/Gallery.tsx`)

```javascript
const galleryImages = [
  {
    url: '여기에 이미지 URL',
    title: '사진 제목',
    description: '사진 설명',
  },
  // 사진 추가/삭제 가능
];
```

### 3. 가족 활동 수정 (`/src/app/components/Timeline.tsx`)

```javascript
const activities = [
  {
    date: '2026년 3월',
    title: '활동 제목',
    description: '활동 설명',
    icon: MapPin, // Calendar, Star, MapPin 중 선택
    color: 'bg-pink-500', // 원하는 색상
  },
  // 활동 추가/삭제 가능
];
```

### 4. 색상 테마 변경

현재 로즈/핑크 테마를 사용 중입니다. 다른 색상으로 변경하려면:
- `rose-500` → `blue-500` (파란색)
- `rose-500` → `green-500` (초록색)
- `rose-500` → `purple-500` (보라색)

각 컴포넌트 파일에서 `rose` 또는 `pink`를 검색하여 원하는 색상으로 변경하세요.

### 5. 메인 사진 변경 (`/src/app/components/Hero.tsx`)

```javascript
<ImageWithFallback
  src="여기에 메인 사진 URL"
  alt="가족 사진"
  className="w-full h-full object-cover"
/>
```

### 6. 연락처 정보 변경 (`/src/app/components/Footer.tsx`)

```javascript
<span>family@example.com</span>  // 이메일 수정
<span>010-1234-5678</span>       // 전화번호 수정
```

## 📝 각 파일 설명

### App.tsx
- 모든 컴포넌트를 통합하는 메인 파일
- 페이지 레이아웃 구성

### Header.tsx
- 상단 고정 네비게이션 바
- 모바일 반응형 햄버거 메뉴
- 섹션별 스크롤 이동 기능

### Hero.tsx
- 첫 화면 대형 배너
- 메인 가족 사진과 환영 메시지
- "더 알아보기" 버튼

### About.tsx
- 가족의 가치관과 철학 소개
- 3개의 카드 (사랑, 가정, 함께)

### FamilyMembers.tsx
- 가족 구성원 프로필 카드
- 각 구성원의 이름, 역할, 설명

### Gallery.tsx
- 6개의 가족 사진 그리드
- 호버 시 사진 제목과 설명 표시
- 이미지 확대 효과

### Timeline.tsx
- 시간순으로 정렬된 가족 활동
- 아이콘과 색상으로 구분
- 반응형 레이아웃

### Footer.tsx
- 페이지 하단 정보
- 바로가기 링크
- 연락처 정보

## 🎯 빠른 수정 팁

1. **가족 이름만 바꾸기**: `FamilyMembers.tsx`의 `members` 배열만 수정
2. **사진만 바꾸기**: `Gallery.tsx`의 `galleryImages` 배열과 `Hero.tsx`의 이미지 URL만 수정
3. **색상만 바꾸기**: 각 파일에서 `rose`, `pink` 검색 후 일괄 변경
4. **섹션 추가/삭제**: `App.tsx`에서 원하는 컴포넌트 추가/제거

## 💡 추가 개선 아이디어

- 방명록 기능 추가
- 가족 달력/일정 관리
- 사진 업로드 기능
- 다크 모드
- 가족 블로그 섹션
- 동영상 갤러리

## 📦 사용된 기술

- React 18.3.1
- TypeScript
- Tailwind CSS v4
- Lucide React (아이콘)
- Vite (빌드 도구)

## 🚀 시작하기

모든 코드는 이미 `/src/app/` 폴더에 준비되어 있습니다. 
위의 커스터마이징 가이드를 참고하여 원하는 대로 수정하세요!

---

**Made with ❤️ for your family**
