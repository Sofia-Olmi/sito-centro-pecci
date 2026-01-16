// Dropdown header functionality for .voci-header with transition and fade between nav-* menus

document.addEventListener('DOMContentLoaded', function () {
  const vociHeader = document.querySelector('.voci-header');
  const header = document.querySelector('.header');
  const menuItems = document.querySelectorAll('.menu li[class*="nav-"]');
  const navLists = document.querySelectorAll('.voci-header ul[class^="nav-"]');

  // Collapse .voci-header by default
  if (vociHeader) {
    vociHeader.classList.remove('expanded');
    vociHeader.classList.add('collapsed');
  }
  if (header) {
    header.classList.remove('open');
    header.classList.add('closed');
  }

  // Show .voci-header and correct menu on menu item click
  menuItems.forEach(item => {
    item.addEventListener('click', function (e) {
      const navClass = Array.from(item.classList).find(cls => cls.startsWith('nav-'));
      if (!navClass || !vociHeader) return;

      // Expand header
      vociHeader.classList.add('expanded');
      vociHeader.classList.remove('collapsed');
      if (header) {
        header.classList.add('open');
        header.classList.remove('closed');
      }

      // Toggle .selected class on menu items
      menuItems.forEach(nav => nav.classList.remove('selected'));
      item.classList.add('selected');

      // Fade out currently visible menu
      const visibleUl = Array.from(navLists).find(ul => ul.classList.contains('d-flex') && !ul.classList.contains('d-none'));
      const targetUl = vociHeader.querySelector('ul.' + navClass);

      if (visibleUl && visibleUl !== targetUl) {
        visibleUl.classList.remove('fade-in');
        visibleUl.classList.add('fade-out');
        setTimeout(() => {
          visibleUl.classList.add('d-none');
          visibleUl.classList.remove('d-flex', 'fade-out');
          // Fade in the target menu after fade out
          if (targetUl) {
            targetUl.classList.remove('d-none');
            targetUl.classList.add('d-flex');
            targetUl.classList.remove('fade-in', 'fade-out');
            targetUl.style.opacity = '0';
            // Force reflow to trigger transition
            void targetUl.offsetWidth;
            targetUl.classList.add('fade-in');
            setTimeout(() => {
              targetUl.classList.remove('fade-in');
              targetUl.style.opacity = '';
            }, 150);
          }
        }, 150);
      } else if (targetUl && targetUl.classList.contains('d-none')) {
        // If no visible menu or switching to the same, just fade in
        targetUl.classList.remove('d-none');
        targetUl.classList.add('d-flex', 'fade-in');
        setTimeout(() => {
          targetUl.classList.remove('fade-in');
        }, 150);
      }

      // Hide all other nav-* ul (except the target)
      navLists.forEach(ul => {
        if (ul !== targetUl && (!visibleUl || ul !== visibleUl)) {
          ul.classList.add('d-none');
          ul.classList.remove('d-flex', 'fade-in', 'fade-out');
        }
      });

      // Prevent event bubbling to document
      e.stopPropagation();
    });
  });

  // Collapse .voci-header when clicking outside
  document.addEventListener('click', function (e) {
    if (vociHeader && !vociHeader.contains(e.target)) {
      vociHeader.classList.remove('expanded');
      vociHeader.classList.add('collapsed');
      if (header) {
        header.classList.add('closed');
        header.classList.remove('open');
      }
      // Hide all nav-* ul
      navLists.forEach(ul => {
        ul.classList.add('d-none');
        ul.classList.remove('d-flex', 'fade-in', 'fade-out');
      });
      // Remove .selected from all menu items
      menuItems.forEach(nav => nav.classList.remove('selected'));
    }
  });

  // Prevent collapse when clicking inside .voci-header
  if (vociHeader) {
    vociHeader.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  // Accordion functionality for mobile menu - close other items when one is opened
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    item.open = true; // Set all details to open for CSS animations
    const summary = item.querySelector('.accordion-summary');
    summary.addEventListener('click', function(e) {
      e.preventDefault();
      if (item.classList.contains('open')) {
        item.classList.remove('open');
      } else {
        // Close other open accordion items
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('open');
        });
        item.classList.add('open');
      }
    });
  });

  // Add .open class to .accordion when clicking .hamburger-icon
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const accordion = document.querySelector('.accordion');
  if (hamburgerIcon && accordion) {
    hamburgerIcon.addEventListener('click', function() {
      accordion.classList.add('open');
    });
  }

  // Remove .open class from .accordion when clicking outside .accordion-item elements (only if it has .open)
  if (accordion && hamburgerIcon) {
    document.addEventListener('click', function(e) {
      const accordionItems = document.querySelectorAll('.accordion-item');
      let clickedInsideItem = false;
      accordionItems.forEach(item => {
        if (item.contains(e.target)) {
          clickedInsideItem = true;
        }
      });
      // Do not remove if clicked on hamburger icon or inside accordion items
      if (!clickedInsideItem && !hamburgerIcon.contains(e.target) && accordion.classList.contains('open')) {
        accordion.classList.remove('open');
      }
    });
  }

  // Collapse .voci-header when scrolling down while expanded
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (vociHeader && vociHeader.classList.contains('expanded') && scrollTop > lastScrollTop) {
      // Scrolling down while expanded
      vociHeader.classList.remove('expanded');
      vociHeader.classList.add('collapsed');
      if (header) {
        header.classList.add('closed');
        header.classList.remove('open');
      }
      // Hide all nav-* ul
      navLists.forEach(ul => {
        ul.classList.add('d-none');
        ul.classList.remove('d-flex', 'fade-in', 'fade-out');
      });
      // Remove .selected from all menu items
      menuItems.forEach(nav => nav.classList.remove('selected'));
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});

// Lightbox per l'acquisto biglietti
const counters = {
            intero: 1,
            ridotto: 0,
            famiglie: 0
        };

        function openLightbox() {
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function updateCounter(type, change) {
            counters[type] = Math.max(0, counters[type] + change);
            document.getElementById('counter-' + type).textContent = counters[type];
        }

        function submitForm(e) {
            e.preventDefault();
            alert('Form inviato! Totale biglietti: ' + 
                  (counters.intero + counters.ridotto + counters.famiglie));
            closeLightbox();
        }

        // Chiudi con tasto ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // Imposta data minima a oggi
        const dateInput = document.querySelector('input[type="date"]');
        if (dateInput) {
            dateInput.min = new Date().toISOString().split('T')[0];
        }

        // Tooltip per icone info
        document.addEventListener('DOMContentLoaded', function() {
            const infoIcons = document.querySelectorAll('.info-icon');
            
            infoIcons.forEach(icon => {
                icon.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const tooltip = this.querySelector('.info-tooltip');
                    
                    // Chiudi tutti gli altri tooltip
                    document.querySelectorAll('.info-tooltip.active').forEach(t => {
                        if (t !== tooltip) t.classList.remove('active');
                    });
                    
                    // Toggle del tooltip corrente
                    tooltip.classList.toggle('active');
                });
            });
            
            // AGGIUNGI QUESTO: Previeni la chiusura quando si clicca sul tooltip stesso
            document.querySelectorAll('.info-tooltip').forEach(tooltip => {
                tooltip.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
            
            // Chiudi tooltip cliccando fuori
            document.addEventListener('click', function() {
                document.querySelectorAll('.info-tooltip.active').forEach(t => {
                    t.classList.remove('active');
                });
            });
        });
