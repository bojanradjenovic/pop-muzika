let slideIndex = 0;
    showSlides1();
    showSlides2();
    function showSlides1() {
      let i;
      let slides = document.getElementsByClassName("mySlides1");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides1, 2500); // Change image every 2 seconds
    }
    function showSlides2() {
      let i;
      let slides = document.getElementsByClassName("mySlides2");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides2, 2500); // Change image every 2 seconds
    }
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
      var dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownMenu.style.display === 'flex') {
        dropdownMenu.style.display = 'none';
      } else {
        dropdownMenu.style.display = 'flex';
      }
    });