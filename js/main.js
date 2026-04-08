const elements = document.querySelectorAll('.fade-up');

if (elements.length) {
   const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
         if (!entry.isIntersecting) return;

         entry.target.classList.add('visible');
         currentObserver.unobserve(entry.target);
      });
   }, {
      threshold: 0.14,
      rootMargin: '0px 0px -6% 0px'
   });

   elements.forEach((element) => observer.observe(element));
}