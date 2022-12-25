function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".formmsg");
  messageElement.textContent = message;
  messageElement.classList.remove("formmsgsuccess", "formmsgerror");
  messageElement.classList.add(`formmsg${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("forminputerror");
  inputElement.parentElement.querySelector(".forminputerrormsg").textContent =
    message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("forminputerror");
  inputElement.parentElement.querySelector(".forminputerrormsg").textContent =
    "";
}

function testPass(inputElement) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!#\$\%&\^\@\*\(\).*)/.test(
    inputElement.value
  );
}

const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createaccount");
document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form_hidden");
  createAccountForm.classList.remove("form_hidden");
});

document.querySelector("#linkLogin").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form_hidden");
  createAccountForm.classList.add("form_hidden");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //space for AJAX login apparently
  setFormMessage(loginForm, "error", "Invalid username/password.");
});

let password;
// console.log(password);

document.getElementById("createPassword").addEventListener("input", (e) => {
  password = e.target.value;
});

document.querySelectorAll(".form_input").forEach((inputElement) => {
  inputElement.addEventListener("blur", (e) => {
    if (
      e.target.id === "createUsername" &&
      e.target.value.length > 0 &&
      e.target.value.length < 8
    ) {
      setInputError(
        inputElement,
        "Username must be at least 8 characters long."
      );
    }
  });

  inputElement.addEventListener("blur", (e) => {
    if (
      e.target.id === "createPassword" &&
      e.target.value.length > 0 &&
      e.target.value.length < 8
    ) {
      setInputError(
        inputElement,
        "Password must be at least 8 characters long."
      );
    }
    if (e.target.id === "createPassword" && !testPass(e.target)) {
      setInputError(
        inputElement,
        "Password must have uppercase characters, lowercase characters, special characters and numbers."
      );
    }
    if (
      e.target.id === "createPassword" &&
      e.target.value.length > 8 &&
      testPass(e.target)
    ) {
      password = e.target.value;
      console.log(password);
    }
  });

  inputElement.addEventListener("blur", (e) => {
    if (e.target.id === "confirmPassword" && e.target.value !== password) {
      console.log(e.target.value);
      setInputError(inputElement, "Passwords must be the same.");
    }
  });

  inputElement.addEventListener("input", (e) => {
    clearInputError(inputElement);
  });
});
