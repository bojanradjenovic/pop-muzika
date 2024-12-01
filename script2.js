document.querySelector('.hamburger-menu').addEventListener('click', function() {
  var dropdownMenu = document.querySelector('.dropdown-menu');
  if (dropdownMenu.style.display === 'flex') {
    dropdownMenu.style.display = 'none';
  } else {
    dropdownMenu.style.display = 'flex';
  }
});
let slideIndex1 = 0;
let slideIndex2 = 0;
let slides1 = document.getElementsByClassName("mySlides1");
let slides2 = document.getElementsByClassName("mySlides2");
    showSlides1();
    showSlides2();
    function showSlides1() {
      for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none";
      }
      slideIndex1++;
      if (slideIndex1 > slides1.length) {slideIndex1 = 1}
      slides1[slideIndex1-1].style.display = "block";
      setTimeout(showSlides1, 2500); // Change image every 2.5 seconds
    }
    function showSlides2() {
      for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
      }
      slideIndex2++;
      if (slideIndex2 > slides2.length) {slideIndex2 = 1}
      slides2[slideIndex2-1].style.display = "block";
      setTimeout(showSlides2, 2500); // Change image every 2.5 seconds
      }

