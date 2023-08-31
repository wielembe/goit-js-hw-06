const validation = document.querySelector(`#validation-input`);
const inputLength = validation.getAttribute("data-length");

validation.addEventListener("blur", () => {
    if (inputLength <= validation.value.length) {
        validation.classList.add("valid");
        validation.classList.remove("invalid");
    } else {
        validation.classList.remove("valid");
        validation.classList.add("invalid");
    }
});
