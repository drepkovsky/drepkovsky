const form = document.querySelector<HTMLFormElement>("#contact-form");
const fallback = document.querySelector<HTMLParagraphElement>("#email-fallback");

if (form && fallback) {
  const composer = form.closest("details");
  if (composer) composer.hidden = false;

  const messageField = form.querySelector<HTMLTextAreaElement>("textarea");
  const nameField = form.querySelector<HTMLInputElement>('[name="name"]');

  form.addEventListener("input", () => {
    nameField?.setCustomValidity("");
    messageField?.setCustomValidity("");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameField?.setCustomValidity(nameField.value.trim() ? "" : (form.dataset.nameError ?? "Enter your name."));
    messageField?.setCustomValidity(messageField.value.trim() ? "" : (form.dataset.messageError ?? "Write a message first."));
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    const recipient = form.dataset.recipient;
    if (!recipient || !name || !email || !message) return;

    const subject = `${form.dataset.subjectPrefix ?? "Message from"} ${name} · drepkovsky.com`;
    const body = `${message}\n\n${name}\n${email}`;
    const draft = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const link = fallback.querySelector<HTMLAnchorElement>("a");
    if (!link) return;

    link.href = draft;
    fallback.hidden = false;
    link.click();
  });
}
