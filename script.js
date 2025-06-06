function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let favorite = document.getElementById("favorite").value;

  if (name === "" || email === "" || favorite === "") {
    alert("Please fill out all fields.");
  } else {
    alert("Thank you, " + name + "! You have successfully joined the Coffee Club ☕");
  }
}