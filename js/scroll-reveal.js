// Simple scroll‑reveal utility
// Adds the "active" class when .reveal elements enter the viewport

export function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  function onScroll() {
	const winH = window.innerHeight;
	reveals.forEach(el => {
	  const top = el.getBoundingClientRect().top;
	  const revealPoint = 150;
	  if (top < winH - revealPoint) {
		el.classList.add('active');
	  } else {
		el.classList.remove('active');
	  }
	});
  }
  document.addEventListener('scroll', onScroll);
  // Trigger once on load
  onScroll();
}
