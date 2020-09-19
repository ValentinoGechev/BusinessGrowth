$(function () {
    var navbar = $(".desktop-nav");

    $(document).scroll(function () {        
        navbar.toggleClass('scrolled', $(this).scrollTop() > navbar.height());
    });

    $(navbar).hover(function () {        
        if (window.scrollY === 0) 
            navbar.removeClass('hovered');                    
        else
            navbar.toggleClass('hovered');
    });


    // Add active class to the active section
    const options = {
        threshold: 0.8,
      };
      
      const addActiveClass = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            //console.log(entry.target);
            let currentActive = document.querySelector(".desktop-nav a.active");
      
            if (currentActive) {
              currentActive.classList.remove("active");
            }
      
            let newActive = document.querySelector(
              `.desktop-nav a[href="#${entry.target.getAttribute("id")}"]`
            );
      
            newActive.classList.add("active");
          }
        });
      };
      
      const observer = new IntersectionObserver(addActiveClass, options);
      
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section) => {
        observer.observe(section);
      });
    // End - Add active class to the active section
});