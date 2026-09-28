#!/usr/bin/env python3
"""홈페이지 조립 스크립트: _src/base.html(공통 머리말/꼬리말) + _src/pages/*.html(본문) -> 배포용 HTML.

사용:  python3 _build.py
페이지 파일 맨 위에 메타 블록을 둔다 (--- 로 본문과 구분):
    title: 페이지 제목
    desc: 설명
    path: /company/          (배포 경로. / 는 index.html, 그 외는 <path>index.html)
    nav: company             (메뉴 활성 표시용, 없으면 생략)
새 페이지를 추가하려면 _src/pages/ 에 파일을 만들고 이 스크립트를 다시 실행한다.
(_ 로 시작하는 파일/폴더는 GitHub Pages(Jekyll)가 배포에서 제외한다.)
"""
import os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(ROOT, "_src")
NAVS = ["company", "services", "support"]
SITE = "https://www.dowoo.net"

base = open(os.path.join(SRC, "base.html"), encoding="utf-8").read()
pages = []
for name in sorted(os.listdir(os.path.join(SRC, "pages"))):
    if not name.endswith(".html"):
        continue
    raw = open(os.path.join(SRC, "pages", name), encoding="utf-8").read()
    head, _, body = raw.partition("\n---\n")
    meta = dict(re.findall(r"^(\w+):\s*(.+)$", head, re.M))
    for key in ("title", "desc", "path"):
        if key not in meta:
            sys.exit(f"{name}: 메타 '{key}' 가 없습니다")
    out = base.replace("{{content}}", body.strip("\n"))
    for key in ("title", "desc", "path"):
        out = out.replace("{{%s}}" % key, meta[key])
    for nav in NAVS:
        out = out.replace("{{nav_%s}}" % nav, "active" if meta.get("nav") == nav else "")
    target = os.path.join(ROOT, meta["path"].strip("/"), "index.html") if meta["path"] != "/" else os.path.join(ROOT, "index.html")
    if meta["path"] == "/privacy/":
        sys.exit("/privacy/ 는 기존 개인정보처리방침 페이지가 쓰는 경로라 덮어쓰지 않습니다")
    os.makedirs(os.path.dirname(target), exist_ok=True)
    open(target, "w", encoding="utf-8").write(out)
    pages.append(meta["path"])
    print("생성:", os.path.relpath(target, ROOT))

# 404 (GitHub Pages 가 자동으로 사용)
notfound = open(os.path.join(SRC, "404.html"), encoding="utf-8").read() if os.path.exists(os.path.join(SRC, "404.html")) else None
if notfound:
    raw = notfound
    head, _, body = raw.partition("\n---\n")
    meta = dict(re.findall(r"^(\w+):\s*(.+)$", head, re.M))
    out = base.replace("{{content}}", body.strip("\n"))
    for key in ("title", "desc", "path"):
        out = out.replace("{{%s}}" % key, meta[key])
    for nav in NAVS:
        out = out.replace("{{nav_%s}}" % nav, "")
    open(os.path.join(ROOT, "404.html"), "w", encoding="utf-8").write(out)
    print("생성: 404.html")

urls = "".join(f"  <url><loc>{SITE}{p}</loc></url>\n" for p in pages)
open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + urls + f"  <url><loc>{SITE}/privacy/</loc></url>\n</urlset>\n")
open(os.path.join(ROOT, "robots.txt"), "w", encoding="utf-8").write(f"User-agent: *\nAllow: /\nSitemap: {SITE}/sitemap.xml\n")
print("생성: sitemap.xml, robots.txt")
