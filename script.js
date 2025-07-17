document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector(".scroll-container");
    let isPaused = false;
    let scrollSpeed = 0.25;

    function automaticScroll() {
        if (isPaused == false) {
            scrollContainer.scrollLeft += scrollSpeed;

            if(scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollContainer.scrollLeft = 0;
            }
        }

        requestAnimationFrame(automaticScroll);
    }

    automaticScroll();

    scrollContainer.addEventListener("mouseenter", () => {
        isPaused = true;
    });

    scrollContainer.addEventListener("mouseleave", () => {
        isPaused = false;
    });
});