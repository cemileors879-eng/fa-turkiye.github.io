/* Dependency-free perspective rendering: no remote model or tracking requests. */
(() => {
  'use strict';
  const canvas = document.getElementById('dna-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const stage = document.getElementById('dna-stage');
  const play = document.getElementById('dna-play');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let angle = 0.4, running = !reduced.matches, visible = false;
  let frame = 0, last = 0, width = 0, height = 0, drag = null;
  const project = (t, side) => {
    const phase = t * Math.PI * 4 + angle + side * Math.PI;
    const x = Math.cos(phase) * 70;
    const z = Math.sin(phase) * 70;
    const y = (t - 0.5) * 248;
    const scale = 650 / (650 - z);
    return { x: width / 2 + (x + y * 0.20) * scale, y: height / 2 + y * scale, z, scale };
  };
  function draw() {
    ctx.clearRect(0, 0, width, height);
    const objects = [];
    for (let i = 0; i < 33; i++) {
      const a = project(i / 32, 0), b = project(i / 32, 1);
      objects.push({ type: 'rung', a, b, z: (a.z + b.z) / 2 });
      for (let side = 0; side < 2; side++) {
        const p = side ? b : a;
        if (i < 32) {
          const next = project((i + 1) / 32, side);
          objects.push({ type: 'rail', a: p, b: next, z: (p.z + next.z) / 2, side });
        }
        objects.push({ type: 'bead', a: p, z: p.z, side });
      }
    }
    objects.sort((a, b) => a.z - b.z);
    ctx.lineCap = 'round';
    for (const o of objects) {
      ctx.globalAlpha = 0.48 + (o.z + 70) / 140 * 0.52;
      if (o.type === 'bead') {
        const r = 5 * o.a.scale;
        const g = ctx.createRadialGradient(o.a.x - r / 3, o.a.y - r / 3, 0, o.a.x, o.a.y, r);
        g.addColorStop(0, '#edfff9'); g.addColorStop(0.4, o.side ? '#b59aff' : '#75efdf'); g.addColorStop(1, o.side ? '#624798' : '#268d8a');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(o.a.x, o.a.y, r, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.strokeStyle = o.type === 'rail' ? (o.side ? '#b59aff' : '#75efdf') : '#8fabc8';
        ctx.lineWidth = o.type === 'rail' ? 5 * o.a.scale : 2.4;
        ctx.beginPath(); ctx.moveTo(o.a.x, o.a.y); ctx.lineTo(o.b.x, o.b.y); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }
  function tick(now) {
    frame = 0;
    if (!running || !visible || document.hidden) { last = 0; return; }
    if (now - last >= 32) {
      angle += last ? Math.min(now - last, 64) * 0.00024 : 0;
      last = now; draw();
    }
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame); frame = 0; last = 0;
    play.textContent = running ? 'Durdur' : 'Döndür';
    play.setAttribute('aria-pressed', String(running));
    if (running && visible && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function resize() {
    const r = stage.getBoundingClientRect(), ratio = Math.min(devicePixelRatio || 1, 2);
    width = r.width; height = r.height;
    canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0); draw();
  }
  play.addEventListener('click', () => { running = !running; sync(); });
  document.querySelectorAll('[data-dna-turn]').forEach(button => button.addEventListener('click', () => {
    running = false; angle += Number(button.dataset.dnaTurn) * Math.PI / 8; sync(); draw();
  }));
  stage.addEventListener('pointerdown', e => {
    if (!e.isPrimary || e.button !== 0) return;
    running = false; sync(); drag = { id: e.pointerId, x: e.clientX }; stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', e => {
    if (!drag || drag.id !== e.pointerId) return;
    angle += (e.clientX - drag.x) * 0.012; drag.x = e.clientX; draw();
  });
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(type => stage.addEventListener(type, () => { drag = null; }));
  reduced.addEventListener('change', () => { if (reduced.matches) { running = false; sync(); } });
  document.addEventListener('visibilitychange', sync);
  stage.addEventListener('focusin', e => { if (e.target.matches(':focus-visible')) { running = false; sync(); } });
  document.getElementById('dna-controls').addEventListener('focusin', e => { if (e.target.matches(':focus-visible')) { running = false; sync(); } });
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(stage);
  else visible = true;
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(stage);
  else addEventListener('resize', resize);
  canvas.hidden = false; stage.querySelector('.dna-fallback').hidden = true;
  // SVG has no native hidden presentation in older browsers.
  stage.querySelector('.dna-fallback').style.display = 'none';
  document.getElementById('dna-controls').hidden = false;
  resize(); sync();
})();
