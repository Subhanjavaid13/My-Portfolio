document.addEventListener("DOMContentLoaded", () => {
  
  window.scrollTo(0, 0);

 
  const sections = document.querySelectorAll("section:not(#home)");
  const options = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  
  document.querySelectorAll(".navbar a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  let darkMode = true;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    darkMode = !darkMode;
    if (darkMode) {
      themeToggle.classList.replace("bx-sun", "bx-moon");
    } else {
      themeToggle.classList.replace("bx-moon", "bx-sun");
    }
  });


  document.getElementById("projects-link")?.addEventListener("click", () => {
    window.open("https://github.com/YourGithubUsername", "_blank");
  });


  document.getElementById("contact-link")?.addEventListener("click", () => {
    window.open("mailto:subhanjavaid5616@gmail.com");
  });
});
