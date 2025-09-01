// Handle form submission with custom validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  
  if (!name || !email) {
    alert("Please fill in both name and email.");
    return;
  }

  document.getElementById("output").innerText = `Thank you, name! We'll contact you at{email}.`;
    this.reset();

});

// Toggle visibility of messagedocument.getElementById("toggleBtn").addEventListener("click", function() 
{
  const msg = document.getElementById("message");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
};
document.getElementById("toggleBtn").addEventListener("click", function() {
  const msg = document.getElementById("message");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
}); 


