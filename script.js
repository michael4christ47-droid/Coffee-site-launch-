document.addEventListener("DOMContentLoaded", () => {

    // ===== PARALLAX BEANS =====
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        const leftBeans = document.querySelector(".beans-left");
        const rightBeans = document.querySelector(".beans-right");

        if (leftBeans && rightBeans) {
            leftBeans.style.transform =
                `translateY(${scrollY * 0.08}px) rotate(-20deg)`;

            rightBeans.style.transform =
                `translateY(-${scrollY * 0.08}px) rotate(20deg)`;
        }
    });


    // ===== PRODUCT IMAGE PARALLAX =====
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 25;
            const rotateY = (x - centerX) / 25;

            const img = card.querySelector("img");
            if (img) {
                img.style.transform =
                    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            }
        });

        card.addEventListener("mouseleave", () => {
            const img = card.querySelector("img");
            if (img) {
                img.style.transform = "rotateX(0) rotateY(0) scale(1)";
            }
        });
    });

});
