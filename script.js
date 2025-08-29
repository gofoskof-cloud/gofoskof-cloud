        const overlay = document.getElementById('intro-overlay');
        overlay.addEventListener('click', () => {
            overlay.classList.add('hidden');
            // Включение музыки
            const audio = document.getElementById('background-audio');
            audio.volume = 0;
            audio.play();
            let volume = 0;
            const fadeIn = setInterval(() => {
                if (volume < 0.75) {
                    volume += 0.05;
                    audio.volume = volume;
                } else {
                    clearInterval(fadeIn);
                }
            }, 100);
        });

        // Анимация текста
        const typed = new Typed('#typed-text', {
            strings: ['самый пиздатый', 'один сват тебе или два другому', 'заход в мой тгк или докс'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|'
        });

        // 3D-эффект бокса для всей страницы
        const box = document.querySelector('.bio-box');
        document.addEventListener('mousemove', (e) => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const x = (e.clientX - windowWidth / 2) / 50; // Центр страницы по X
            const y = (e.clientY - windowHeight / 2) / 50; // Центр страницы по Y
            const rotateX = y; // Угол поворота по X
            const rotateY = -x; // Угол поворота по Y
            box.style.transform = `translate(-50%, -50%) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            box.style.transform = 'translate(-50%, -50%) perspective(1000px)';
        });