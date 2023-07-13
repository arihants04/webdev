let form = document.querySelector("#form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submitted");
    let term = form.elements.submit.value;
    console.dir(form)
})
