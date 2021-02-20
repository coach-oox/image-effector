const resetButton = document.querySelector(".reset");

const filters = [
    {
        name: "brightness",
        value: document.querySelector("#brightness").value,
    },
    {
        name: "contrast",
        value: document.querySelector("#contrast").value,
    },
    {
        name: "blur",
        value: document.querySelector("#blur").value,
    },
    {
        name: "grayscale",
        value: document.querySelector("#grayscale").value,
    },
    {
        name: "huerotate",
        value: document.querySelector("#huerotate").value,
    },
    {
        name: "invert",
        value: document.querySelector("#invert").value,
    },
    {
        name: "sepia",
        value: document.querySelector("#sepia").value,
    },
];

function resetFilter() {
    const img = document.querySelector("img");

    filters.forEach((filter) => {
        if (filter.name === "brightness" || filter.name === "contrast") {
            document.querySelector(`#${filter.name}`).value = 100;
            filter.value = "100";
        } else {
            document.querySelector(`#${filter.name}`).value = 0;
            filter.value = "0";
        }
    });

    img.style.filter = `brightness(100%) contrast(100%) blur(0px) grayscale(0%) hue-rotate(0deg) invert(0%) sepia(0%)`;
}

function applyFilter(event) {
    const img = document.querySelector("img");

    const name = event.target.name;
    const value = event.target.value;

    filters.forEach((filter) => {
        if (filter.name === name) {
            filter.value = value;
        }
    });

    img.style.filter = `brightness(${filters[0].value}%) contrast(${filters[1].value}%) blur(${filters[2].value}px) grayscale(${filters[3].value}%) hue-rotate(${filters[4].value}deg) invert(${filters[5].value}%) sepia(${filters[6].value}%)`;
}

function setEvent() {
    const inputs = document.querySelectorAll(".controls input");

    inputs.forEach((input) => {
        input.addEventListener("change", applyFilter);
    });
}

setEvent();

resetButton.addEventListener("click", resetFilter);
