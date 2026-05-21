document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.footer p').forEach(function (el) {
        if (el.textContent.includes('©')) {
            el.textContent = el.textContent.replace(/©\s*\d{4}/, '© ' + currentYear);
        }
    });

    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Mesajınız başarıyla alındı. Teşekkürler!');
            form.reset();
        });
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navMenu.classList.toggle('active');
        });
    }

    const audioButton = document.querySelector('.sound-btn');
    const bgAudio = document.getElementById('bg-audio');
    let musicPlaying = false;

    window.toggleSound = function () {
        if (!bgAudio) {
            return;
        }

        if (musicPlaying) {
            bgAudio.pause();
            musicPlaying = false;
            if (audioButton) {
                audioButton.textContent = '🔊 Ses';
            }
        } else {
            bgAudio.play().catch(() => {
                // Otomatik çalma engellendiğinde kullanıcı etkileşimi bekleyin
            });
            musicPlaying = true;
            if (audioButton) {
                audioButton.textContent = '🔇 Sessiz';
            }
        }
    };

    if (audioButton) {
        audioButton.style.cursor = 'pointer';
    }
});
