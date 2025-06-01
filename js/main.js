// // Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 2.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));

$(window).scroll(function(){
    if ( $(this).scrollTop() > 10) {
        $('.header').addClass("fixed")
    } else {
        $('.header').removeClass("fixed")
    }
});
$('.header__navbar li a, .header__logo, .services__btn').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if (target && $(target).length) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    }
});

var rellax = new Rellax('.rellax');
        
var ids = ['scene','scene2','scene3','scene4'];
ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
        new Parallax(element);
    }
});