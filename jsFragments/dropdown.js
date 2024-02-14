const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
   dropdown.addEventListener('click', function(e) {
      const current = e.target 
      const dropdownMenu = current.nextElementSibling
      let rect = dropdown.getBoundingClientRect();
      let windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if(rect.bottom + dropdown.offsetHeight > windowHeight) {
          dropdownMenu.classList.add('up');
      } else {
          dropdownMenu.classList.add('down');
      }
   });
})
