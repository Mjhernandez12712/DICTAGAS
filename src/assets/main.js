import "./style.css";

window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
history.scrollRestoration = 'manual';

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('is-hidden');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => {
        if (item.classList.contains('is-hidden')) {
            revealObserver.observe(item);
        }
    });
}

document.querySelectorAll('#mobile-menu a').forEach((link) => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');

        if (!href || !href.startsWith('#')) return;

        const targetId = href.substring(1);
        const target = document.getElementById(targetId);

        if (!target) return;

        event.preventDefault();

        const offset = 330; // ajuste del header
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top,
            behavior: 'smooth',
        });

        document.querySelector('[commandfor="mobile-menu"]')?.click();
    });
});