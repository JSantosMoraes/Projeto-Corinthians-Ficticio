const imagens = document.querySelectorAll('.outrosheader');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const img = entry.target;

        if (entry.isIntersecting) {
            img.classList.remove("hide");
            img.classList.add("show");
        } else {
            img.classList.remove("show");
            img.classList.add("hide");
        }
    });
}, { threshold: 0.5 });

imagens.forEach(img => observer.observe(img));

const escudo = document.getElementById('escudo')