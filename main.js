document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("section#contact form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            if (name && email && message) {
                alert("Форма успешно отправлена!");
                form.reset();
            } else {
                alert("Пожалуйста, заполните все поля.");
            }
        });
    }
});
