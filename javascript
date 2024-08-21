// スクロール時に要素をフェードインさせるスクリプト
document.addEventListener('scroll', function() {
    const fadeIns = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    fadeIns.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
