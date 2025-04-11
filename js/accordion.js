// Accessible accordion: one panel open at a time
export function initAccordion(rootSelector = '[data-accordion]') {
  const roots = document.querySelectorAll(rootSelector);
  roots.forEach(root => {
	const buttons = root.querySelectorAll('button[aria-controls]');
	buttons.forEach(btn => {
	  const contentId = btn.getAttribute('aria-controls');
	  const panel = root.querySelector(`#${contentId}`);
	  if (!panel) return;

	  panel.style.overflow = 'hidden';
	  panel.style.height = '0px';
	  panel.style.transition = 'height 300ms ease';

	  btn.addEventListener('click', () => {
		const isOpen = btn.getAttribute('aria-expanded') === 'true';
		// Close others
		buttons.forEach(other => {
		  const otherId = other.getAttribute('aria-controls');
		  const otherPanel = root.querySelector(`#${otherId}`);
		  other.setAttribute('aria-expanded', 'false');
		  otherPanel.style.height = '0px';
		});

		if (!isOpen) {
		  btn.setAttribute('aria-expanded', 'true');
		  panel.style.display = 'block';
		  panel.style.height = panel.scrollHeight + 'px';
		} else {
		  btn.setAttribute('aria-expanded', 'false');
		  panel.style.height = '0px';
		}
	  });
	});
  });
}
