document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.social-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                }
            });
        });
    });
});
