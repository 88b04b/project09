$(function () {

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        scrollTop > 0 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');
        scrollTop > 400 ? $('.to_top').addClass('active') : $('.to_top').removeClass('active');

        // $('.scroll_event').each(function () {
        //     if (scrollTop + $(window).innerHeight() - 200 > $(this).offset().top) {
        //         $(this).addClass('scrolled');
        //     }
        // });

        if (scrollTop > 700) {

            $('.count_num').each(function () { // .count-num에 각각 적용
                var $this = $(this),
                    countTo = $this.attr('data-count');
                // $this = 첫번째~세번째 .count-num
                // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)

                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                    // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
                    // 0에서 countNum이 된다
                },
                    {
                        duration: 800, // 애니메이션이 완료될때까지 걸리는 시간
                        easing: 'linear', // 애니메이션 효과 방식
                        step: function () { // 움직임 각 스텝별로 실행될 함수
                            $this.text(Math.floor(this.countNum));
                            // Math.floor -> this.countNum의 값을 정수로 만들어준다
                        },
                        complete: function () { // 움직임이 멈춘 후 실행될 함수
                            $this.text(this.countNum);
                            // this.countNum이 $this의 text값이 된다
                            //alert('finished');
                        }
                    });
            });

        }

        scrollTop > 800 ? $('.whale').addClass('animate') : $('.whale').removeClass('animate');

    });

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        speed: 1000,
        slideActiveClass: 'active',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.main_slide .pagination',
            clickable: true,
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
                return '<li class="' + className + '"><span class="left"></span><span class="right"></span><button tabindex="-1"></button></li>';
            },
        },
    });

    const responsiveSlide = new Swiper('.responsive_slide', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    $('.portfolio_list li').on('click', function () {
        let idx = $(this).index();
        $('.portfolio_list li').eq(idx).addClass('active').siblings().removeClass('active');
        $('.portfolio_img li').eq(idx).addClass('active').siblings().removeClass('active');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('.mobile_menu').on('click', function () {
        $(this).toggleClass('active');
        $('.header').toggleClass('mobile_open');
        $('body').toggleClass('body_fixed');
    });

});