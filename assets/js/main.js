document.querySelectorAll(".pub").forEach((pub) => {
  const toggle = pub.querySelector(".bib-toggle");
  const panel = pub.querySelector(".bibtex");
  const copy = pub.querySelector(".copy-bib");
  if (!toggle || !panel) return;

  toggle.addEventListener("click", () => {
    const open = panel.hasAttribute("hidden");
    panel.toggleAttribute("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  copy?.addEventListener("click", async () => {
    const text = panel.querySelector("code")?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      copy.textContent = "Copied";
      setTimeout(() => {
        copy.textContent = "Copy";
      }, 1400);
    } catch {
      copy.textContent = "Select to copy";
    }
  });
});
