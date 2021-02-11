(function() {
    let btn = document.querySelector(".nav__toggle");
    let nav = document.querySelector(".header__nav");
    let link = document.querySelectorAll(".header__link");
    let header = document.querySelector(".header");
    let unav = document.querySelector(".header__user-nav");

    

    

    btn.addEventListener('click', function() {
        if(!nav.classList.contains('active')) {
            nav.classList.add('active');
            header.classList.add('active');
            link.forEach(function(item) {
                item.classList.add('active');
            })
        } else {
            nav.classList.remove('active');
            header.classList.remove('active');
            for(let btnItem of link) {
                btnItem.classList.remove('active');
            }
        }
    })

    window.addEventListener("scroll", function() {
        let scroll = window.scrollY;
        if(scroll >= 850) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
    
}())