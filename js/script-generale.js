// Dropdown header functionality for .voci-header with transition

document.addEventListener('DOMContentLoaded', function () {
  const vociHeader = document.querySelector('.voci-header');
  const menuItems = document.querySelectorAll('.menu li[class*="nav-"]');
  const navLists = document.querySelectorAll('.voci-header ul[class^="nav-"]');

  // Collapse .voci-header by default
  if (vociHeader) {
    vociHeader.classList.remove('expanded');
    vociHeader.classList.add('collapsed');
  }

  // Show .voci-header and correct menu on menu item click
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      const navClass = Array.from(item.classList).find(cls => cls.startsWith('nav-'));
      if (!navClass || !vociHeader) return;

      // Expand header
      vociHeader.classList.add('expanded');
      vociHeader.classList.remove('collapsed');

      // Hide all nav-* ul
      navLists.forEach(ul => {
        ul.classList.add('d-none');
        ul.classList.remove('d-flex');
      });

      // Show the selected nav-* ul
      const targetUl = vociHeader.querySelector('ul.' + navClass);
      if (targetUl) {
        targetUl.classList.remove('d-none');
        targetUl.classList.add('d-flex');
      }

      // Prevent event bubbling to document
      e.stopPropagation();
    });
  });

  // Collapse .voci-header when clicking outside
  document.addEventListener('click', function (e) {
    if (vociHeader && !vociHeader.contains(e.target)) {
      vociHeader.classList.remove('expanded');
      vociHeader.classList.add('collapsed');
    }
  });

  // Prevent collapse when clicking inside .voci-header
  if (vociHeader) {
    vociHeader.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});
