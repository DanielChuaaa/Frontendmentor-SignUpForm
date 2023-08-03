function errorHandlers() {
  var valid = true,
    error = "",
    field = "";

  field = document.getElementById("email");
  error = document.getElementById("cemail");

  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");

    error.innerHTML = "Valid email required";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  return valid;
}
