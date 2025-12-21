// Script to toggle .nav-* ul under .voci-header when clicking .nav-* li under .menu

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.menu li[class*="nav-"]');
  const navLists = document.querySelectorAll('.voci-header ul[class^="nav-"]');

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      // Get the nav-* class (e.g., nav-1, nav-2, ...)
      const navClass = Array.from(item.classList).find(cls => cls.startsWith('nav-'));
      if (!navClass) return;

      navLists.forEach(ul => {
        ul.classList.add('d-none');
        ul.classList.remove('d-flex');
      });

      const targetUl = document.querySelector('.voci-header ul.' + navClass);
      if (targetUl) {
        // Hide all and remove d-flex from all, then show only the target
        targetUl.classList.remove('d-none');
        targetUl.classList.add('d-flex');
      }
    });
  });
});
