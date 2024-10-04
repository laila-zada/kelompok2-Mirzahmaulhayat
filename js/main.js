window.addEventListener('load', () => {
    let  galeryContainer = select('.galery-container');
    if (galeryContainer) {
      let galeryIsotope = new Isotope(galeryContainer, {
        itemSelector: '.galery-wrap',
        layoutMode: 'fitRows'
      });

      let galeryFilters = select('#galery-flters li', true);

      on('click', '#galery-flters li', function(e) {
        e.preventDefault();
        galeryFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

       galeryIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        galeryIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const galeryLightbox = GLightbox({
    selector: '.galery-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.galery-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });