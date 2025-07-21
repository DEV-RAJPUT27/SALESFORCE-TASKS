document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
 let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message");

  if (name === "" || email === "") {
    message.style.color = "red";
    message.innerText = "Please fill all the fields!";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.style.color = "red";
    message.innerText = "Enter a valid email address!";
    return;
  }

  message.style.color = "green";
  message.innerText = "Thank you " + name + "!\n You have subscribed successfully.";
  document.getElementById("subscribeForm").reset();
});
