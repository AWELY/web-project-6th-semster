document.getElementById("submitBtn").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default anchor behavior

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Hardcoded credentials
  const correctEmail = "abcd@gmail.com";
  const correctPassword = "123456";

  if (email === correctEmail && password === correctPassword) {
    // Redirect to success page
    window.location.href = "homePage.html";
  } else {
    // Show error message
    errorMessage.style.display = "block";
    // Hide error message after 3 seconds
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }
});
