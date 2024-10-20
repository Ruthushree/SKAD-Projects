
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
 
  const talkButton = document.querySelector('.btn');
  talkButton.addEventListener('click', () => {
    alert("Let's Talk! Feel free to reach out.");
  });
  
  
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = '⬆️ Scroll to Top';
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.backgroundColor = '#f9cd3a';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.cursor = 'pointer';
  scrollToTopButton.style.display = 'none'; 
  
  document.body.appendChild(scrollToTopButton);
  
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  
  const video = document.querySelector('video');
  if (video) {
    video.addEventListener('canplay', function () {
      this.play();
    });
  }
  
  
  document.querySelectorAll('.service-img').forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease-in-out';
    });
  
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
  