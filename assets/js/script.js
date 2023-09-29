const customDropdown = document.getElementById("customDropdown");
const customDropdownSelected = document.getElementById("customDropdownSelected");
const customDropdownOptions = document.getElementById("customDropdownOptions");

customDropdownSelected?.addEventListener('click', function () {
    customDropdownOptions.style.display = customDropdownOptions.style.display === 'block' ? 'none' : 'block';
});

customDropdownOptions?.addEventListener('click', function (event) {
    if (event.target.classList.contains("custom-dropdown-option")) {
        const selectedOption = event.target.textContent;
        customDropdownSelected.querySelector(".custom-dropdown-selected-text").textContent = selectedOption;
        customDropdownOptions.style.display = 'none';
    }
});

// Close dropdown if user clicks outside
document.addEventListener('click', function (event) {
    if (!customDropdown.contains(event.target)) {
        customDropdownOptions.style.display = 'none';
    }
});

const options11 = document.querySelectorAll(".custom-option");
const items = document.querySelectorAll(".item");

options11.forEach(option => {
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

const selectedText = document.querySelector('.custom-dropdown-selected-text');
const options = document.querySelectorAll('.custom-dropdown-option');

options.forEach(option => {
    option.addEventListener('click', () => {
        const selectedOptionText = option.textContent;
        selectedText.textContent = selectedOptionText;

        options.forEach(o => {
            o.classList.remove('selected');
        });
        option.classList.add('selected');
    });
});



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});



const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.section-two-card-container-card');
const resetFilterButtons = document.querySelectorAll('.reset-filter-btn');

const cardHeaders = document.querySelectorAll('.section-two-card-container-card-card-header');
let lastClickedCard = null;

let activeFilter = null;

filterButtons?.forEach(button => {
    button?.addEventListener('click', () => {
        const filter = button?.getAttribute('data-filter');
        document.querySelector('.active-filter-btn')?.classList?.remove('active-filter-btn');

        if (activeFilter === filter) {
            activeFilter = null;
        } else {
            activeFilter = filter;
            button?.classList?.add('active-filter-btn');
        }

        if (lastClickedCard) {
            lastClickedCard?.classList?.remove('show');
        }
        // Tüm kartları gizle
        cards.forEach(card => {
            card.classList?.add('hidden');
        });

        if (activeFilter) {
            document?.querySelectorAll(`.${activeFilter}`)?.forEach(card => {
                card?.classList?.remove('hidden');
            });
        } else {
            // Filtre uygulanmamışsa, tüm kartları göster
            cards?.forEach(card => {
                card?.classList?.remove('hidden');
            });
        }
    });
});


cards.forEach(card => {
    card?.addEventListener('click', () => {
        const isActive = card?.classList?.contains('show');

        cards?.forEach(c => {
            c?.classList?.remove('show');
        });

        if (!isActive) {
            card?.classList.add('show');
            cardHeaders?.forEach(header => {
                header?.classList.remove('active');
                header?.nextElementSibling?.classList?.remove('active');
                header?.querySelector('p')?.classList?.remove('active'); // Renk sıfırlama
            });

            card.querySelector('.section-two-card-container-card-card-header').classList.add('active');
            card.querySelector('.section-two-card-container-card-card-body').classList.add('active');
            card.querySelector('.section-two-card-container-card-card-header p').classList.add('active');

            lastClickedCard = card;
        } else {
            card?.classList.remove('show');
            lastClickedCard = null;
            card?.querySelector('.section-two-card-container-card-card-header').classList.remove('active');
            card?.querySelector('.section-two-card-container-card-card-body').classList.remove('active');
            card?.querySelector('.section-two-card-container-card-card-header p').classList.remove('active');

        }
    });
});


const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const arrowIcon = item.querySelector('.rotate-svg');

    header.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            // Tüm öğeleri kapat
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherArrowIcon = otherItem.querySelector('.rotate-svg');
                otherArrowIcon.classList.remove('rotate-down');
            });

            // Şu anki öğeyi aç
            item.classList.add('active');
            arrowIcon.classList.add('rotate-down');
        } else {
            // Şu anki öğeyi kapat
            item.classList.remove('active');
            arrowIcon.classList.remove('rotate-down');
        }
    });
});


// Scroll event listener ekleyin
window.addEventListener("scroll", () => {
    // Scroll değerini alın
    const scrollY = window.scrollY || window.pageYOffset;

    // Elementi seçin (örneğin, elementin class'ı "sticky-element" olsun)
    const element = document.querySelector("#scrl");

    // Belirli bir değerden (örneğin 10 piksel) büyük olduğunda sticky yapın
    if (scrollY > 10) {
        // "sticky" sınıfını ekleyin, "static" sınıfını kaldırın
        element.classList.add("sticky");
        element.classList.remove("static");
    } else {
        // Scroll değeri 10 pikselden küçükse "sticky" sınıfını kaldırın, "static" sınıfını ekleyin
        element.classList.remove("sticky");
        element.classList.add("static");
    }
});





