const textInput = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

textInput.addEventListener("input", (name) => {
    output.textContent = name.currentTarget.value;

    if (name.currentTarget.value === "") {
        output.textContent = "Anonymus";
    }
});
