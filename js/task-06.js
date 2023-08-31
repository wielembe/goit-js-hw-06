const validation = document.querySelector("#validation-input");
const inputLength = validation.getAttribute("data-length");

validation.addEventListener("blur", () => {
    if (inputLength >= validation) {
        validation.classList.add("valid");
    } else {
        validation.classList.add("invalid");
    }
});
