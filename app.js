let swiper;
let swiper2;
let lastWidth = window.innerWidth;

function initSwipers() {
    if (swiper && typeof swiper.destroy === "function") {
        swiper.destroy(true, true);
    }
    if (swiper2 && typeof swiper2.destroy === "function") {
        swiper2.destroy(true, true);
    }

    swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: "#swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#navigation-next",
            prevEl: "#navigation-prev",
        },

        breakpoints: {
            375: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 17,
            },
            1090: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
            1350: {
                slidesPerView: 5,
                spaceBetween: 17,
            },
        },
    });

    swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: "#swiper-pagination2",
            clickable: true,
        },
        navigation: {
            nextEl: "#navigation-next2",
            prevEl: "#navigation-prev2",
        },
        breakpoints: {
            600: {
                slidesPerView: 3,
                spaceBetween: 17,
            },
            1090: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
            1350: {
                slidesPerView: 5,
                spaceBetween: 17,
            },
        },
    });
}

document.addEventListener("DOMContentLoaded", initSwipers);

function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

function handleResize() {
    let currentWidth = window.innerWidth;
    if (
        (lastWidth < 700 && currentWidth >= 370) ||
        (lastWidth < 700 && currentWidth >= 700) ||
        (lastWidth < 1090 && currentWidth >= 1090) ||
        (lastWidth < 1350 && currentWidth >= 1350) ||
        (lastWidth >= 1350 && currentWidth < 1350) ||
        (lastWidth >= 1090 && currentWidth < 1090) ||
        (lastWidth >= 700 && currentWidth < 700)
    ) {
        initSwipers();
    }
    lastWidth = currentWidth;
}

window.addEventListener("resize", debounce(handleResize, 200));

function search() {
    const searchInput = document.getElementById("searchInput").value;
    const resultMessage = document.getElementById("searchResult");
    if (searchInput.trim() !== "") {
        resultMessage.textContent = `Você buscou por: '${searchInput}'`;

        setTimeout(() => {
            resultMessage.textContent = "";
        }, 3000);
    } else {
        resultMessage.textContent = "";
    }
}
function handleKeyDown(event) {
    if (event.key === "Enter") {
        search();
    }
}

function search2() {
    const searchInput2 = document.getElementById("searchInput2").value;
    const resultMessage2 = document.getElementById("searchResult2");

    if (searchInput2.trim() !== "") {
        console.log("teste2");

        resultMessage2.textContent = `Você buscou por: '${searchInput2}'`;

        setTimeout(() => {
            resultMessage2.textContent = "";
        }, 3000);
    } else {
        resultMessage2.textContent = "";
    }
}

function handleKeyDown2(event) {
    if (event.key === "Enter") {
        search2();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("footer li");

    sections.forEach((section) => {
        const button = section.querySelector("button");

        if (button) {
            button.addEventListener("click", function () {
                section.classList.toggle("openFooter");
            });
        }
    });
});

document.getElementById("menuRes").addEventListener("click", function () {
    const menuCategories = document.getElementById("modalCategorias");

    if (menuCategories) {
        menuCategories.classList.toggle("hidden");
    } else {
        console.error("Elemento modalCategorias não encontrado!");
    }
});
