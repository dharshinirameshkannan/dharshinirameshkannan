document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const course = document.getElementById("course").value.trim();

  if (name === "" || email === "" || course === "") {
    document.getElementById("message").textContent = "Please fill in all fields.";
    document.getElementById("message").style.color = "red";
  } else {
    document.getElementById("message").textContent =
      `Thank you, ${name}! You've registered for the ${course} course.`;
    document.getElementById("message").style.color = "green";

    // Optional: Clear the form
    document.getElementById("registrationForm").reset();
  }
});
