(function() {
    let btn = document.querySelector('.nav-toggle');
    let nav = document.querySelector('.header__nav');

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });

    btn.addEventListener('click', function() {
        nav.classList.toggle('active');
    })

    window.addEventListener('scroll', function() {
        let scroll = window.scrollY;
        let head = document.querySelector('.header');
        if(scroll >= 800) {
            head.classList.add('fixed');
        } else {
            head.classList.remove('fixed');
        }
    })


}())