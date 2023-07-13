let form = document.querySelector("#form")
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let allimgs = document.body.querySelectorAll("img");
    allimgs.forEach(e => e.remove());
    let term = form.elements.query.value;
    console.log(term);
    let config = { params: { q: term } }
    let response = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    for (let x = 0; x < 10; x++) {
        if (response.data[x].show.image) {
            let img = document.createElement("img")
            let imgdata = response.data[x].show.image.medium;
            img.src = imgdata;
            document.body.append(img)
        }

    }
    form.elements.query.value = '';
    count++;
})