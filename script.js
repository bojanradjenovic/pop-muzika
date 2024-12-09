document.querySelector('.hamburger-menu').addEventListener('click', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === 'flex') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'flex';
    }
  });
  let slideIndex = 0;
  let slides = document.getElementsByClassName("mySlides");
      showSlides();
      function showSlides() {
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 2500); // Change image every 2.5 seconds
      }
    