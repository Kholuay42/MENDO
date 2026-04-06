// Warten, bis das gesamte HTML-Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {

    // === 1. Interaktivität für Buttons ===
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const href = button.getAttribute('href');

            // Nur blockieren, wenn der Link genau "#" ist (also ein Platzhalter)
            // oder wenn es KEIN Anker-Link ist (kein # am Anfang)
            if (href === '#' || !href.startsWith('#')) {
                 event.preventDefault();
                 alert('Vielen Dank für Ihr Interesse! Hier könnte ein Kontaktformular erscheinen.');
            }
            
            // Wenn href="#services" ist, passiert hier gar nichts, 
            // und der Browser führt das normale Scrollen aus.
        });
    });
/*    // === 1. Interaktivität für Buttons ===
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!button.getAttribute('href').startsWith('#') || button.getAttribute('href').length > 1) {
                 event.preventDefault();
            }
            if (!button.getAttribute('href').startsWith('#')) {
                alert('Vielen Dank für Ihr Interesse! Hier könnte ein Kontaktformular erscheinen.');
            }
        });
    });
*/
    // === 2. "Fade-in" Effekt beim Scrollen ===
    const sectionsToFade = document.querySelectorAll('.fade-in');

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15 // 15% des Elements muss sichtbar sein
        });

        sectionsToFade.forEach(section => {
            sectionObserver.observe(section);
        });
    } else {
        // Fallback für alte Browser
        sectionsToFade.forEach(section => {
            section.classList.add('visible');
        });
    }

    // === Hamburger Menü Funktion ===
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    if (burger) {
        burger.addEventListener('click', () => {
            // Menü rein/raus schieben
            nav.classList.toggle('nav-active');
            // Burger Animation
            burger.classList.toggle('toggle');
        });

        // Menü schließen, wenn man einen Link klickt
        navLinksAll.forEach((link) => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }
});