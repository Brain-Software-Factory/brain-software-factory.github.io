(function () {
    "use strict";
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // nav + scroll-top
    var nav = document.getElementById("nav"), scrollTop = document.getElementById("scrollTop");
    function onScroll() { var y = window.scrollY; nav.classList.toggle("scrolled", y > 40); scrollTop.classList.toggle("show", y > 700); }
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    // mobile nav
    var toggle = document.getElementById("navToggle"), links = document.getElementById("navLinks");
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { links.classList.remove("open"); }); });

    // reveal
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { io.observe(el); });

    // duplicate marquee for seamless loop
    var mq = document.getElementById("marquee");
    if (mq) mq.innerHTML += mq.innerHTML;

    // hero floaters parallax
    var floaters = [].slice.call(document.querySelectorAll(".floater"));
    if (!reduce && floaters.length && window.matchMedia("(pointer:fine)").matches) {
      window.addEventListener("mousemove", function (e) {
        var cx = (e.clientX / window.innerWidth - 0.5), cy = (e.clientY / window.innerHeight - 0.5);
        floaters.forEach(function (f) {
          var d = parseFloat(f.getAttribute("data-depth")) || 4;
          var base = f.style.getPropertyValue("--r") || "";
          f.style.transform = "translate(" + (cx * d * 5) + "px," + (cy * d * 5) + "px) rotate(" + (f.classList.contains("floater-1") ? -9 : f.classList.contains("floater-2") ? 8 : 6) + "deg)";
        });
      });
    }

    // stepper -> visual swap (+ auto-advance)
    var steps = [].slice.call(document.querySelectorAll(".step"));
    var visuals = [].slice.call(document.querySelectorAll(".visual"));
    var current = 0, autoTimer = null;
    function setStep(i) {
      current = i;
      steps.forEach(function (s, k) { s.classList.toggle("active", k === i); });
      visuals.forEach(function (v) { v.classList.toggle("show", parseInt(v.getAttribute("data-vis"), 10) === i); });
    }
    steps.forEach(function (s, i) { s.addEventListener("click", function () { setStep(i); restartAuto(); }); });
    function restartAuto() { if (reduce) return; clearInterval(autoTimer); autoTimer = setInterval(function () { setStep((current + 1) % steps.length); }, 4200); }
    var modular = document.getElementById("plataforma");
    if (modular) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) restartAuto(); else clearInterval(autoTimer); });
      }, { threshold: 0.3 }).observe(modular);
    }

    // dashboard mock tilt
    var mock = document.getElementById("mock"), mockWrap = document.getElementById("mockWrap");
    if (mock && !reduce && window.matchMedia("(pointer:fine)").matches) {
      mockWrap.addEventListener("mousemove", function (e) {
        var r = mockWrap.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        mock.style.transform = "rotateX(" + (8 - py * 8) + "deg) rotateY(" + (-6 + px * 10) + "deg)";
      });
      mockWrap.addEventListener("mouseleave", function () { mock.style.transform = "rotateX(8deg) rotateY(-6deg)"; });
    }

    // FAQ
    document.querySelectorAll(".faq-item").forEach(function (item) {
      var q = item.querySelector(".faq-q"), a = item.querySelector(".faq-a");
      function set() { a.style.maxHeight = item.classList.contains("open") ? a.scrollHeight + "px" : "0px"; }
      if (item.classList.contains("open")) set();
      q.addEventListener("click", function () {
        var open = item.classList.contains("open");
        document.querySelectorAll(".faq-item.open").forEach(function (o) { o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = "0px"; });
        if (!open) { item.classList.add("open"); set(); }
      });
    });

    // pricing toggle
    var billToggle = document.getElementById("billToggle"), lblMonth = document.getElementById("lblMonth"), lblYear = document.getElementById("lblYear"), year = false;
    billToggle.addEventListener("click", function () {
      year = !year;
      billToggle.classList.toggle("year", year);
      lblMonth.classList.toggle("on", !year); lblYear.classList.toggle("on", year);
      document.querySelectorAll(".plan").forEach(function (plan) {
        var num = plan.querySelector(".num"), ann = plan.querySelector(".plan-annual");
        if (!num) return;
        num.style.opacity = "0";
        setTimeout(function () { num.textContent = year ? num.dataset.y : num.dataset.m; ann.textContent = year ? ann.dataset.annual : " "; num.style.opacity = "1"; }, 180);
      });
    });

    // ─── 3D neural network (canvas) ───
    var net = document.getElementById("neuralnet");
    if (net && !reduce) {
      var g = net.getContext("2d"), W = net.width, H = net.height, cx = W / 2, cy = H / 2, S = W * 0.30;
      var layers = [4, 6, 6, 4], lx = [-1.25, -0.45, 0.45, 1.25], nodes = [], edges = [];
      layers.forEach(function (cnt, li) {
        for (var k = 0; k < cnt; k++) {
          var y = (k - (cnt - 1) / 2) * (1.7 / Math.max(cnt - 1, 1));
          nodes.push({ x: lx[li], y: y, z: (k % 2 ? 0.4 : -0.4) });
        }
      });
      function range(li) { var s = 0; for (var i = 0; i < li; i++) s += layers[i]; return [s, s + layers[li]]; }
      for (var li = 0; li < layers.length - 1; li++) {
        var a = range(li), b = range(li + 1);
        for (var i = a[0]; i < a[1]; i++) for (var j = b[0]; j < b[1]; j++) edges.push([i, j]);
      }
      var pulses = [];
      for (var p = 0; p < 16; p++) pulses.push({ e: (p * 9) % edges.length, t: p / 16 });
      var ang = 0;
      function frame() {
        g.clearRect(0, 0, W, H); ang += 0.004;
        var sin = Math.sin(ang), cos = Math.cos(ang), pr = [];
        for (var i = 0; i < nodes.length; i++) {
          var n = nodes[i], xr = n.x * cos - n.z * sin, zr = n.x * sin + n.z * cos;
          pr.push({ sx: cx + xr * S, sy: cy + n.y * S, d: (zr + 1) / 2 });
        }
        for (var e = 0; e < edges.length; e++) {
          var A = pr[edges[e][0]], B = pr[edges[e][1]], d = (A.d + B.d) / 2;
          g.strokeStyle = "rgba(90,160,255," + (0.04 + d * 0.10) + ")"; g.lineWidth = 1;
          g.beginPath(); g.moveTo(A.sx, A.sy); g.lineTo(B.sx, B.sy); g.stroke();
        }
        for (var pi = 0; pi < pulses.length; pi++) {
          var ps = pulses[pi]; ps.t += 0.013;
          if (ps.t >= 1) { ps.t = 0; ps.e = (ps.e + 1 + pi * 3) % edges.length; }
          var ed = edges[ps.e], P0 = pr[ed[0]], P1 = pr[ed[1]];
          var x = P0.sx + (P1.sx - P0.sx) * ps.t, y = P0.sy + (P1.sy - P0.sy) * ps.t;
          g.beginPath(); g.arc(x, y, 5, 0, 6.283); g.fillStyle = "rgba(40,194,255,0.22)"; g.fill();
          g.beginPath(); g.arc(x, y, 2.2, 0, 6.283); g.fillStyle = "#28C2FF"; g.fill();
        }
        for (var i = 0; i < nodes.length; i++) {
          var Pn = pr[i];
          g.beginPath(); g.arc(Pn.sx, Pn.sy, 6 + Pn.d * 3, 0, 6.283);
          g.strokeStyle = "rgba(47,128,255," + (0.10 + Pn.d * 0.18) + ")"; g.lineWidth = 1.2; g.stroke();
          g.beginPath(); g.arc(Pn.sx, Pn.sy, 3 + Pn.d * 2.4, 0, 6.283);
          g.fillStyle = "rgba(120,180,255," + (0.4 + Pn.d * 0.55) + ")"; g.fill();
        }
        requestAnimationFrame(frame);
      }
      frame();
    }
  })();
