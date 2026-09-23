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

document.getElementById('mobile-menu')?.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        document.querySelector('[commandfor="mobile-menu"]')?.click();
    }
});