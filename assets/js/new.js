const toggle2 = document.querySelector(".custom-select-toggle2");
const svgContainer2 = document.querySelector(".rotate-svg2");
const options2 = document.querySelector(".custom-options2");

let isOpen2 = false;

toggle2.addEventListener("click", () => {
    isOpen2 = !isOpen2;
    if (isOpen2) {
        svgContainer2.classList.add("open2");
    } else {
        svgContainer2.classList.remove("open2");
    }
});

options2.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".custom-option2")) {
        toggle2.textContent = e.target.textContent;
        isOpen2 = false;
        svgContainer2.classList.remove("open2");
    }
});

document.addEventListener("click", () => {
    isOpen2 = false;
    svgContainer2.classList.remove("open2");
});


const options = document.querySelectorAll(".custom-option");
const items = document.querySelectorAll(".item");

options.forEach(option => {
    option.addEventListener("click", () => {
        // Tüm ürünleri gizle
        items.forEach(item => {
            item.style.display = "none";
        });

        const filter = option.getAttribute("data-filter");
        if (filter === "all") {
            // "Hamısı" seçildiğinde tüm ürünleri göster
            items.forEach(item => {
                item.style.display = "block";
            });
        } else {
            // Seçilen kategoriye ait ürünleri göster
            items.forEach(item => {
                if (item.classList.contains(filter)) {
                    item.style.display = "block";
                }
            });
        }
    });
});