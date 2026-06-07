# 🚀 GitHub 업로드 및 실행 가이드

## 📦 GitHub에 올려야 할 파일 목록

```
your-repo/
├── index.html                    ✅ HTML 진입점
├── package.json                  ✅ 의존성 목록
├── vite.config.ts               ✅ Vite 설정
├── postcss.config.mjs           ✅ PostCSS 설정
├── .gitignore                   ✅ Git 무시 파일
├── README.md                    ✅ 프로젝트 설명
├── src/
│   ├── main.tsx                 ✅ React 진입점
│   ├── app/
│   │   ├── App.tsx             ✅ 메인 컴포넌트
│   │   └── components/          ✅ 모든 컴포넌트들
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── FamilyMembers.tsx
│   │       ├── Gallery.tsx
│   │       ├── Timeline.tsx
│   │       ├── Footer.tsx
│   │       └── figma/
│   │           └── ImageWithFallback.tsx
│   └── styles/
│       ├── index.css
│       ├── tailwind.css
│       ├── theme.css
│       └── fonts.css
└── (기타 UI 컴포넌트들)
```

## 🔧 로컬에서 실행하는 방법

### 1단계: 저장소 클론
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2단계: 의존성 설치
```bash
# npm 사용 시
npm install

# 또는 yarn 사용 시
yarn install

# 또는 pnpm 사용 시
pnpm install
```

### 3단계: 개발 서버 실행
```bash
# npm 사용 시
npm run dev

# 또는 yarn 사용 시
yarn dev

# 또는 pnpm 사용 시
pnpm dev
```

브라우저에서 `http://localhost:5173` 접속!

### 4단계: 빌드 (배포용)
```bash
# npm 사용 시
npm run build

# 또는 yarn 사용 시
yarn build

# 또는 pnpm 사용 시
pnpm build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 🌐 GitHub Pages로 배포하기

### 방법 1: GitHub Actions 사용 (자동 배포)

1. `.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. GitHub 저장소 Settings → Pages → Source를 "gh-pages" 브랜치로 설정

3. 코드를 푸시하면 자동으로 배포됩니다!

### 방법 2: 수동 배포

```bash
# 빌드
npm run build

# gh-pages 패키지 설치 (한 번만)
npm install -g gh-pages

# 배포
gh-pages -d dist
```

## 📝 package.json에 스크립트 추가

`package.json`의 `scripts` 섹션에 다음 추가:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## ⚠️ 주의사항

### node_modules 폴더는 올리지 마세요!
`.gitignore` 파일에 `node_modules`가 포함되어 있어야 합니다.

### 이미 올렸다면?
```bash
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

## 🔍 문제 해결

### "npm install 시 에러 발생"
```bash
# 캐시 삭제 후 재설치
npm cache clean --force
npm install
```

### "React is not defined"
→ `src/main.tsx` 파일이 제대로 있는지 확인

### "Cannot find module 'vite'"
```bash
npm install vite @vitejs/plugin-react --save-dev
```

### "페이지가 빈 화면만 나옴"
1. 브라우저 개발자 도구(F12) 콘솔 확인
2. `index.html`이 루트에 있는지 확인
3. `src/main.tsx`에서 `App` import 경로 확인

## 📱 Android 개발자를 위한 비교

| Android (Gradle) | Web (npm/vite) |
|-----------------|----------------|
| `build.gradle` | `package.json` |
| `./gradlew build` | `npm run build` |
| `./gradlew run` | `npm run dev` |
| `app/build/` | `dist/` |
| Android Studio | VS Code |

## 🎯 체크리스트

GitHub에 올리기 전 확인:

- [ ] `package.json` 있음
- [ ] `index.html` 있음
- [ ] `vite.config.ts` 있음
- [ ] `src/main.tsx` 있음
- [ ] `src/app/App.tsx` 있음
- [ ] `.gitignore`에 `node_modules` 포함
- [ ] README.md 작성

## 💡 다음 단계

1. ✅ GitHub에 푸시
2. ✅ 로컬에서 `npm install` → `npm run dev` 실행
3. ✅ GitHub Pages로 배포 (선택사항)
4. 🎉 완성!

---

궁금한 점이 있으면 GitHub Issues에 남겨주세요!
