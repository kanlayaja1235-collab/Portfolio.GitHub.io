<script>
  // เลื่อนหน้าเว็บอย่างนุ่มนวล
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // แสดงปุ่มกลับขึ้นด้านบน
  const topButton = document.createElement('button');
  topButton.innerHTML = '↑';
  topButton.className = 'back-to-top';
  topButton.setAttribute('aria-label', 'กลับขึ้นด้านบน');
  document.body.appendChild(topButton);

  window.addEventListener('scroll', () => {
    topButton.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  topButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // แสดงเนื้อหาเมื่อเลื่อนมาถึง
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.15
  });

  document.querySelectorAll('.card, section').forEach(item => {
    item.classList.add('hidden');
    observer.observe(item);
  });
</script>
