// Intersection Observer'ı başlatın
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Element görünür hale getirilir
    } else {
      entry.target.classList.remove("show"); // Element gizlenir
    }
  });
});

// 'memo' sınıfına sahip tüm elementleri seçin ve gözlemleyin
const hiddenElements = document.querySelectorAll(".memo");
hiddenElements.forEach((el) => observer.observe(el));

