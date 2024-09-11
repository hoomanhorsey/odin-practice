addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const formEmail = form.email;

  formEmail.addEventListener("blur", () => {
    console.log("blur event");
    const errorMsgEmail = document.getElementById("errorMsgEmail");

    if (!form.email.checkValidity()) {
      console.log("invalid");
      console.log(errorMsgEmail);

      errorMsgEmail.style.color = "red";
      errorMsgEmail.innerHTML = "&#x2718";
    } else {
      errorMsgEmail.innerHTML = "&#x2714";
      errorMsgEmail.style.color = "green";

      console.log("wee");
    }
  });

  const formCountry = form.country;
  formCountry.addEventListener("blur", (event) => {
    const errorMsgCountry = document.getElementById("errorMsgCountry");

    const userCountry = event.target.value;
    const acceptableCountries = ["Australia", "New Zealand", "USA"];

    if (!acceptableCountries.includes(userCountry)) {
      errorMsgCountry.style.color = "red";
      errorMsgCountry.innerHTML = "&#x2718";
    } else {
      errorMsgCountry.innerHTML = "&#x2714";
      errorMsgCountry.style.color = "green";
    }
  });

  const formPostcode = form.postcode;
  formPostcode.addEventListener("blur", (event) => {
    console.log(event.target.value);
    formPostcode.setCustomValidity("");

    const errorMsgPostcode = document.getElementById("errorMsgPostcode");
    if (
      formPostcode.validity.rangeOverflow ||
      formPostcode.validity.rangeUnderflow ||
      !formPostcode.checkValidity()
    ) {
      formPostcode.setCustomValidity("I am expecting a four digit postcode");
      formPostcode.reportValidity();
      errorMsgPostcode.style.color = "red";
      errorMsgPostcode.innerHTML = "&#x2718";
    } else {
      errorMsgPostcode.style.color = "green";
      errorMsgPostcode.innerHTML = "&#x2714";
      formPostcode.setCustomValidity("");
    }
  });

  const formPassword = form.password;
  const formPasswordConfirm = form.passwordConfirm;

  formPasswordConfirm.addEventListener("input", (event) => {
    const errorMsgPasswwordConfirm = document.getElementById(
      "errorMsgPasswordConfirm"
    );
    if (formPassword.value === formPasswordConfirm.value) {
      console.log(formPasswordConfirm);

      errorMsgPasswwordConfirm.innerHTML = "&#x2714";
      errorMsgPasswwordConfirm.style.color = "green";
    } else {
      errorMsgPasswwordConfirm.innerHTML = "&#x2718";
      errorMsgPasswwordConfirm.style.color = "red";
    }
  });
});
