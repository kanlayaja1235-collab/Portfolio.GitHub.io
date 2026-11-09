
// รอให้หน้าเว็บโหลดเสร็จก่อน
document.addEventListener("DOMContentLoaded", function () {

  // 1. แสดงแอนิเมชันเมื่อเลื่อนมาถึงแต่ละส่วน
  const sections = document.querySelectorAll(
    ".container, .activity, .cert, .card"
  );

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  sections.forEach(function (section) {
    section.classList.add("hidden");
    observer.observe(section);
  });


  // 2. เลื่อนหน้าเว็บอย่างนุ่มนวลเมื่อกดเมนู
  const menuLinks = document.querySelectorAll(".nav-links a");

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  // 3. ปุ่มกลับขึ้นด้านบน
  const topButton = document.querySelector(".top-link");

  if (topButton) {
    topButton.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // 4. แสดงปีปัจจุบันใน Console
  console.log("Welcome to Anuwat Portfolio!");
});
