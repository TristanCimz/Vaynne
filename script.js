 <script>
    function validateLogin() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const message = document.getElementById('login-message');

      if (username === "Tristan Cimafranca" && password === "Cymatics1") {
        message.style.display = "block";
        message.style.backgroundColor = "#d4edda";
        message.style.color = "#155724";
        message.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "portfolio.html"; // change to your target page
        }, 2000);
        return false;
      } else {
        message.style.display = "block";
        message.style.backgroundColor = "#f8d7da";
        message.style.color = "#721c24";
        message.textContent = "Invalid username or password. Please try again.";
        return false;
      }
    }
  </script>