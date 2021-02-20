const selectButton = document.querySelector("#upload");
const uploadButton = document.querySelector(".upload");

function displayFileName(name) {
    const fileName = document.querySelector(".file").querySelector("p");
    fileName.innerText = name;
}

function displayImage(event) {
    const content = document.querySelector(".content");
    const preview = document.querySelector(".preview");

    const img = document.createElement("img");
    img.src = event.target.result;
    preview.appendChild(img);

    // show image and sidebar
    content.classList.remove("hidden");
}

function loadImage() {
    const reader = new FileReader();
    reader.readAsDataURL(selectButton.files[0]);
    reader.onloadend = displayImage;
    displayFileName(selectButton.files[0].name);
}

function selectFile() {
    selectButton.click();
}

selectButton.addEventListener("change", loadImage);
uploadButton.addEventListener("click", selectFile);
