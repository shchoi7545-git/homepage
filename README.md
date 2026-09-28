# DOWOONET 홈페이지 (www.dowoo.net)

도우넷(DOWOONET) 회사/서비스 포털. 예전 상호 "도우/Dowoo"는 특허청 확인 결과 상호로 쓸 수 없어
"도우넷/DOWOONET"으로 변경함(2026-09-28) — 도메인(`dowoo.net`)은 그대로 유지. 빌드 도구가 필요 없는 정적 사이트(HTML/CSS/JS)이며 GitHub Pages(`shchoi7545-git` 공개 저장소)로
배포한다. 우아한형제들 회사 사이트 같은 "회사 + 서비스 포트폴리오" 구조를 참고했고, 화면과 문구는 새로 만들었다.
농산물 시세 서비스 자체는 `agrimetric.dowoo.net`(web/AgriMetric)에서 보여주고, 이 사이트는 회사 소개 역할만 한다.

## 페이지
| 경로 | 내용 |
|---|---|
| `/` | 히어로(키워드 순환), 서비스 카드 3개(AgriMetric 운영 중 / 우리아파트온라인 준비 중 / 다음 아이디어), 가치, 로드맵, 문의 CTA |
| `/company/` | 회사 소개, 일하는 방식, 회사 개요 |
| `/services/` | AgriMetric 상세, 우리아파트온라인 소개 |
| `/support/` | 고객지원(스토어 Support URL). 앱별로 `#agrimetric` 같은 앵커 섹션을 두는 구조 — 새 앱이 나오면 이 페이지에 섹션 하나 추가(아래 "고객지원 페이지" 참고). 기존 `/contact/`(문의 전용 페이지)는 이 페이지로 통합돼 사라짐 |
| `/privacy/` | **기존 개인정보처리방침 페이지 — 이 폴더에는 없고 공개 저장소에 이미 있음. 덮어쓰지 말 것** |
| `/404.html` | 없는 페이지 |

## 구조와 수정 방법
- `_src/base.html` — 공통 머리말/꼬리말(메뉴, 푸터). 메뉴나 푸터를 바꿀 때는 여기만 수정.
- `_src/pages/*.html` — 각 페이지 본문(맨 위 `title/desc/path/nav` 메타 + `---` + 본문).
- `python3 _build.py` — 위 파일을 조립해 배포용 `index.html`, `company/index.html` … 과 `sitemap.xml`, `robots.txt` 를 생성.
  **`_src` 를 고친 뒤에는 반드시 다시 실행**해야 한다. 새 페이지는 `_src/pages/` 에 파일을 만들고 메뉴는 `base.html` 에 추가.
- `assets/` — `style.css`, `site.js`, 아이콘/OG 이미지. 색상은 `style.css` 상단 `:root` 변수로 관리.
- `_` 로 시작하는 파일/폴더는 GitHub Pages(Jekyll)가 배포에서 제외하므로 `_src`, `_build.py` 는 공개되지 않는다.

## 고객지원 페이지 (`/support/`)
Play Store/App Store의 "Support URL"에 넣는 페이지. `dowoo.net/privacy`가 앱별로 나뉘지 않고 회사
도메인 하나로 통합돼 있는 것과 같은 이유로, `/support/`도 앱마다 별도 페이지를 만들지 않고 이 페이지
안에 앱별 섹션(앵커)을 추가하는 방식으로 확장한다 — 웹 버전이 없는 앱(게임 등)도 스토어 Support URL이
반드시 필요하므로, 앱별 서브도메인에 붙이는 방식(`agrimetric.dowoo.net/support` 등)보다 이 쪽이
모든 미래 앱에 공통으로 적용된다(2026-09-28 확정).

새 앱이 출시되면:
1. `_src/pages/support.html`의 `.app-picker`에 그 앱으로 가는 `<a href="#앱id">` 하나 추가.
2. 같은 파일 하단에 `<article class="support-app" id="앱id">...</article>` 섹션 하나를 AgriMetric
   섹션과 같은 구조(아이콘/스토어 배지/FAQ/문의)로 추가.
3. 스토어 Support URL 칸에는 `https://dowoo.net/support#앱id`를 넣는다.

## 로컬 미리보기
```bash
cd web/homepage2
python3 _build.py
python3 -m http.server 4000    # http://localhost:4000
```

## 배포
`_src`, `_build.py`, `README.md` 를 포함해 폴더 전체를 공개 저장소 루트에 복사하되, 그 저장소의 `CNAME` 과 `privacy/` 는 그대로 둔다.
(`_build.py` 가 `/privacy/` 경로를 덮어쓰지 않도록 막아 둠.) 이전 홈페이지의 `index.html` 은 새 파일로 교체된다.

## 나중에 채울 것
- 푸터/회사 개요의 사업자 정보(대표자, 사업자등록번호, 주소, 대표 전화) — 정해지면 `base.html` 푸터와 `company.html` 개요에 추가.
- `/support/`의 AgriMetric iOS App Store 링크(현재 "링크 준비 중" 텍스트만 표시, 앱 심사 완료 후 실제
  URL로 교체 — `_src/pages/support.html`의 `store off` 배지). 유튜브 가이드 영상 링크(있으면 FAQ 위나
  아래에 섹션 추가). 우리아파트온라인 상세 기능/출시 일정.
- 개인정보처리방침 갱신: 기존 방침은 사업자가 "도우홈", "회원가입을 요구하지 않는다"고 적혀 있으나 AgriMetric 웹은 이메일·닉네임 회원가입을 받는다.
- 홈 화면 문구(가치 3개, 로드맵 등)는 초안이므로 실제 방향에 맞게 수정.
- 기존에 라이브였던 `dowoo.net/agrimetric` 페이지는 이 폴더가 실제 배포되면서 없어질 예정(사용자가
  agrimetric.dowoo.net 서브도메인으로 대체하기로 함, 2026-09-28) — 배포 시 그 경로도 함께 정리.
