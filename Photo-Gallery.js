const images = [
      { url:"img1.jpg" },
      { url:"img2.jpg" },
      { url:"img3.jpg" },
    ];
 
    let current = 0;
    let img = document.getElementById('galleryImg');
    let dotsContainer = document.getElementById('dotsContainer');
    let interval = null;
 
    function createDots() {
      dotsContainer.innerHTML = "";
      images.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => { current = i; showSlide(); });
        dotsContainer.appendChild(dot);
      });
    }
 
    function showSlide() {
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = images[current].url;
        img.style.opacity = 1;
        const dots = document.querySelectorAll('.dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }, 200);
    }
 
    function nextSlide() {
      current = (current + 1) % images.length;
      showSlide();
    }
 
    function prevSlide() {
      current = (current - 1 + images.length) % images.length;
      showSlide();
    }
 
    // ✅ Auto-rotation change
    document.getElementById("autoRotate").addEventListener("change", function() {
      clearInterval(interval);
      const speed = parseInt(this.value);
      if (speed > 0) {
        interval = setInterval(nextSlide, speed);
      }
    });
 
    // Initialize
    createDots();
    showSlide();