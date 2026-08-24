const whatsappNumber = "923144447201";
const defaultMessage =
  "Assalam-o-Alaikum, I would like to book an appointment at Bloom Beauty Salon.";

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  const serviceTitle =
    link.closest(".service-card")?.querySelector("h3")?.textContent?.trim() ||
    link.querySelector("h3")?.textContent?.trim();

  const message = serviceTitle
    ? `Assalam-o-Alaikum, I would like details about ${serviceTitle} at Bloom Beauty Salon.`
    : defaultMessage;

  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noreferrer";
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

function closeMenu() {
  menuButton?.classList.remove("active");
  navigation?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const willOpen = !navigation?.classList.contains("open");

  menuButton.classList.toggle("active", willOpen);
  navigation?.classList.toggle("open", willOpen);
  menuButton.setAttribute("aria-expanded", String(willOpen));
  document.body.classList.toggle("menu-open", willOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMenu();
  }
});

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
