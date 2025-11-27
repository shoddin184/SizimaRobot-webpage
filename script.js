// モバイルメニュートグル機能
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const globalNav = document.querySelector('.global-nav');

    mobileMenuToggle.addEventListener('click', function() {
        globalNav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // ナビゲーションリンクのスムーススクロール
    const navLinks = document.querySelectorAll('.global-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // モバイルメニューを閉じる
                if (window.innerWidth <= 768) {
                    globalNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // CTAボタンのクリックイベント
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', function() {
        const qualitySection = document.querySelector('#quality');
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = qualitySection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    // スクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // アニメーション対象要素
    const animatedElements = document.querySelectorAll('.robot-card, .section-title, .section-description');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ヘッダーのスクロール時の影
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });
});
