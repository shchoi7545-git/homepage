# DOWOONET 홈페이지 (www.dowoo.net)

도우넷(DOWOONET) 회사/서비스 포털. 예전 상호 "도우/Dowoo"는 특허청 확인 결과 상호로 쓸 수 없어
"도우넷/DOWOONET"으로 변경함(2026-09-28) — 도메인(`dowoo.net`)은 그대로 유지. 빌드 도구가 필요 없는 정적
사이트(HTML/CSS/JS)이며 이 저장소(`shchoi7545-git/homepage`)를 GitHub Pages로 배포한다.
**이 저장소가 홈페이지의 유일한 원본이다** — 예전에 smartfarm 저장소의 `web/homepage`, `web/homepage2`에서
고친 뒤 복사하던 방식은 2026-10-08 폐지하고, 이제 여기서 직접 수정한다.

농산물 시세 서비스 자체는 `agrimetric.dowoo.net`(smartfarm 저장소 `web/AgriMetric-NoLogin`, 로그인 없는 웹)에서
제공하고, 이 사이트는 회사·서비스 소개와 고객지원 역할을 한다.

## 운영 서비스: 농산물경매
- 정식 서비스명은 **농산물경매**(Android/iOS 앱 표시 이름과 동일). 예전 이름 "AgriMetric"은 화면 문구에 쓰지 않는다.
- 단, 아래는 이름과 별개라 바꾸지 않는다: 고객지원 앵커 `#agrimetric`(스토어 Support URL
  `https://dowoo.net/support#agrimetric`가 가리킴 — 바꾸면 스토어 링크가 깨짐), 서비스 도메인
  `agrimetric.dowoo.net`, 아이콘 파일 `assets/agrimetric-icon.png`, 서비스 섹션 앵커 `/services/#agrimetric`.
- 플랫폼: Android(Google Play), iOS(App Store `id6812147320`), Web(agrimetric.dowoo.net) 모두 운영 중.
- 경매 시작 알림은 **Android 앱 전용**(iOS 앱·웹 미지원). 웹은 로그인/회원가입 없음(즐겨찾기는 브라우저에 저장).

## 페이지
| 경로 | 내용 |
|---|---|
| `/` | 히어로, 서비스 카드(농산물경매 운영 중 / 다음 아이디어), 가치, 로드맵, 문의 CTA |
| `/company/` | 회사 소개, 일하는 방식, 회사 개요 |
| `/services/` | 농산물경매 상세 — 스토어 링크, 시세동향 3종(출하량/최고가/관심품종) 상세 소개, 기본 기능 |
| `/support/` | 고객지원(스토어 Support URL). 앱별 앵커 섹션 구조(아래 "고객지원 페이지" 참고) |
| `/privacy/` | 개인정보처리방침 — `_build.py`가 만들지 않는 직접 작성 파일(`privacy/index.html`을 직접 수정) |
| `/404.html` | 없는 페이지 |
| `/app-ads.txt` | AdMob 광고 인증 파일 — 지우거나 옮기지 말 것 |

## 구조와 수정 방법
- `_src/base.html` — 공통 머리말/꼬리말(메뉴, 푸터). 메뉴나 푸터를 바꿀 때는 여기만 수정.
- `_src/pages/*.html` — 각 페이지 본문(맨 위 `title/desc/path/nav` 메타 + `---` + 본문).
- `python3 _build.py` — 위 파일을 조립해 배포용 `index.html`, `company/index.html` … 과 `sitemap.xml`, `robots.txt` 를 생성.
  **`_src` 를 고친 뒤에는 반드시 다시 실행**하고, 생성된 파일도 함께 커밋한다. 새 페이지는 `_src/pages/`에
  파일을 만들고 메뉴는 `base.html`에 추가. (`/privacy/`는 덮어쓰지 않도록 스크립트가 막아 둠.)
- `assets/` — `style.css`, `site.js`, 아이콘/OG 이미지. 색상은 `style.css` 상단 `:root` 변수로 관리.
- `_` 로 시작하는 파일/폴더는 GitHub Pages(Jekyll)가 배포에서 제외하므로 `_src`, `_build.py` 는 공개되지 않는다.

## 고객지원 페이지 (`/support/`)
Play Store/App Store의 "Support URL"에 넣는 페이지. `dowoo.net/privacy`가 앱별로 나뉘지 않고 회사
도메인 하나로 통합돼 있는 것과 같은 이유로, `/support/`도 앱마다 별도 페이지를 만들지 않고 이 페이지
안에 앱별 섹션(앵커)을 추가하는 방식으로 확장한다(2026-09-28 확정).

새 앱이 출시되면:
1. `_src/pages/support.html`의 `.app-picker`에 그 앱으로 가는 `<a href="#앱id">` 하나 추가.
2. 같은 파일 하단에 `<article class="support-app" id="앱id">...</article>` 섹션 하나를 농산물경매
   섹션과 같은 구조(아이콘/스토어 배지/FAQ/문의)로 추가.
3. 스토어 Support URL 칸에는 `https://dowoo.net/support#앱id`를 넣는다.

## 로컬 미리보기
```bash
python3 _build.py
python3 -m http.server 4000    # http://localhost:4000
```

## 배포
`main` 브랜치에 푸시하면 GitHub Pages 기본 배포("pages build and deployment")가 1분 안팎으로 반영한다.
별도 Actions 워크플로는 없다(예전 `.github/workflows/static.yml`은 없는 `npm run build`를 실행해 푸시마다
실패만 하고 실제 배포와 무관해서 2026-10-08 삭제). `CNAME`은 지우지 말 것.

## 나중에 채울 것
- 푸터/회사 개요의 사업자 정보(대표자, 사업자등록번호, 주소, 대표 전화) — 정해지면 `base.html` 푸터와 `company.html` 개요에 추가.
- 유튜브 가이드 영상 링크(있으면 고객지원 FAQ 위나 아래에 섹션 추가).
- 홈 화면 문구(가치 3개, 로드맵 등)는 초안이므로 실제 방향에 맞게 수정.
