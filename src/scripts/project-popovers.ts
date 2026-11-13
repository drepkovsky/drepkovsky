for (const mention of document.querySelectorAll<HTMLElement>("[data-project-mention]")) {
  const trigger = mention.querySelector<HTMLButtonElement>("[data-project-trigger]");
  const popover = mention.querySelector<HTMLElement>("[popover]");
  if (!trigger || !popover || typeof popover.showPopover !== "function") continue;

  let closeTimer: ReturnType<typeof setTimeout>;

  function position() {
    if (!trigger || !popover || !popover.matches(":popover-open")) return;
    const anchor = trigger.getBoundingClientRect();
    const gap = 8;
    const gutter = 16;
    const left = Math.max(gutter, Math.min(anchor.left, window.innerWidth - popover.offsetWidth - gutter));
    const below = anchor.bottom + gap;
    const top = below + popover.offsetHeight <= window.innerHeight - gutter
      ? below
      : Math.max(gutter, anchor.top - popover.offsetHeight - gap);
    popover.style.translate = "none";
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
  }

  function open() {
    clearTimeout(closeTimer);
    if (!popover?.matches(":popover-open")) popover?.showPopover();
    position();
  }

  trigger.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) open();
  });
  trigger.addEventListener("focus", () => {
    if (trigger.matches(":focus-visible")) open();
  });
  mention.addEventListener("mouseenter", () => clearTimeout(closeTimer));
  mention.addEventListener("mouseleave", () => {
    if (window.matchMedia("(hover: hover)").matches) {
      closeTimer = setTimeout(() => {
        if (!mention.contains(document.activeElement)) popover.hidePopover();
      }, 180);
    }
  });
  popover.addEventListener("toggle", () => {
    trigger.setAttribute("aria-expanded", String(popover.matches(":popover-open")));
    position();
  });
  window.addEventListener("resize", position);
  window.addEventListener("scroll", position, { passive: true, capture: true });
}
