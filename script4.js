document.addEventListener("DOMContentLoaded", function() {
  const sidebarHeaders = document.querySelectorAll('.accordion-header');
  sidebarHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
