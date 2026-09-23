import "./style.css";

document.getElementById('mobile-menu')?.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        document.querySelector('[commandfor="mobile-menu"]')?.click();
    }
});