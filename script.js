document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Form Validation
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      const name = document.querySelector("input[type='text']").value.trim();
      const email = document.querySelector("input[type='email']").value.trim();
      const message = document.querySelector("textarea").value.trim();
      
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
      
      alert("Message sent successfully!");
      event.target.reset();
    });
  });
  