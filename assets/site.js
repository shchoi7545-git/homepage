(function () {
  var header = document.getElementById("siteHeader");
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        document.body.classList.remove("menu-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 스크롤 등장 효과 (JS 가 없거나 미지원이면 그대로 보임)
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  // 히어로 키워드 순환
  var words = document.querySelectorAll(".rot-word");
  if (words.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var i = 0;
    setInterval(function () {
      words[i].classList.remove("is-on");
      i = (i + 1) % words.length;
      words[i].classList.add("is-on");
    }, 2600);
  }
})();
