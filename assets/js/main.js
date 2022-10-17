; (function ($) {
    "use strict";

    $(document).ready(function () {

        // второй слайдер
        $('.order-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: false,
            arrows: true,
            infinite: false,
            draggable: false,
            appendArrows: $('.arrows-order'),
            prevArrow: '<button type="button" class="btn_slide">Назад</button>',
            nextArrow: '<button type="button" class="btn_slide btn_slide_next">Далее</button>',
            responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1
                }
            }
            ]
        });

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
            $('.single-select').niceSelect();
        }

        /* --------------------------------------------------
            isotop filter 
        ---------------------------------------------------- */
        var $Container = $('.isotop-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.project-filter-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.isotop-filter-menu > button', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click','.isotop-filter-menu > button' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click','.search-bar-btn',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        // sidebar menu 
        $(document).on('click', '.sidebar-menu-close', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click', '#navigation-button', function (e) {
            e.preventDefault();
            sidebarMenu.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="ri-arrow-left-line"></i>';
        var rightArrow = '<i class="ri-arrow-right-line"></i>';

        /*------------------------------------------------
            banner-slider
        ------------------------------------------------*/
        // $('.banner-slider').owlCarousel({
        //     loop: false,
        //     margin: 10,
        //     nav: false,
        //     dots: false,
        //     smartSpeed: 1500,
        //     items: 1,
        //     navText: [leftArrow,rightArrow],
        // });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 1,
            loop: true,
            navText: [leftArrow,rightArrow],
        });

        /*------------------------------------------------
            testimonial-slider-2
        ------------------------------------------------*/
        $('.testimonial-slider-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            smartSpeed: 1500,
            items: 2,
            loop: true,
            navText: [leftArrow,rightArrow],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                992: {
                    items: 2
                },
            }
        });



        /*------------------------------------------------
            partner-slider
        ------------------------------------------------*/
        $('.partner-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                992: {
                    items: 3
                },
            }
        });

        /*------------------------------------------------
            partner-slider
        ------------------------------------------------*/
        $('.partner-slider-2').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                },
            }
        });

        /*------------------------------------------------
            shop-slider
        ------------------------------------------------*/
        $('.shop-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 4,
            navText: [leftArrow,rightArrow],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 4
                },
            }
        });

        /*------------------------------------------------
            intro-slider
        ------------------------------------------------*/
        $('.intro-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            items: 3,
            navText: [leftArrow,rightArrow],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });

        /*---------------------------------------
            Thumbnail Slider
        ---------------------------------------*/
        var productDetailSlider = $('.single-thumbnail-slider');
        var pThumbanilSlider = $('.product-thumbnail-carousel');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                speed: 1500,
                asNavFor: '.product-thumbnail-carousel'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-down"></i></div>',
            });
        }

        var productDetailSlider = $('.single-thumbnail-slider2');
        var pThumbanilSlider = $('.product-thumbnail-carousel2');

        if (productDetailSlider.length) {
            productDetailSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                asNavFor: '.product-thumbnail-carousel2'
            });
        }
        if (pThumbanilSlider.length) {
            pThumbanilSlider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.single-thumbnail-slider2',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                vertical: true,
                arrows:false,
                prevArrow: '<div class="slick-prev"><i class="fa fa-angle-double-up"></i></div>',
                nextArrow: '<div class="slick-next"><i class="fa fa-angle-double-down"></i></div>',
            });
        }

        /*---------------------------------------
            Quantity
        ---------------------------------------*/
        function wcqib_refresh_quantity_increments() {
            jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
                var c = jQuery(b);
                c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
            })
        }
        String.prototype.getDecimals || (String.prototype.getDecimals = function() {
            var a = this,
                b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
        }), jQuery(document).ready(function() {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("updated_wc_div", function() {
            wcqib_refresh_quantity_increments()
        }), jQuery(document).on("click", ".plus, .minus", function() {
            var a = jQuery(this).closest(".quantity").find(".qty"),
                b = parseFloat(a.val()),
                c = parseFloat(a.attr("max")),
                d = parseFloat(a.attr("min")),
                e = a.attr("step");
            b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
        });

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        // $('.video-play-btn').magnificPopup({
        //     type: 'iframe',
        //     removalDelay: 260,
        //     mainClass: 'mfp-zoom-in',
        // });
        // $.extend(true, $.magnificPopup.defaults, {
        //     iframe: {
        //         patterns: {
        //             youtube: {
        //                 index: 'youtube.com/',
        //                 id: 'v=',
        //                 src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
        //             }
        //         }
        //     }
        // });

        // $('.gallery-btn').magnificPopup({
        //     type: 'iframe',
        //     removalDelay: 260,
        //     mainClass: 'mfp-zoom-in',
        // });

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });


        /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });
    new WOW().init();

    function getting_data() {
        var fixed_offset = $('.navbar').height() + 100,
            car = $('.info-block-order .order-slider input[name="car"]:checked'),
            brand = $('.info-block-order .order-slider input[name="brand"]'),
            model = $('.info-block-order .order-slider input[name="model"]'),
            fromCity = $('.info-block-order .order-slider input[name="from"]'),
            toCity = $('.info-block-order .order-slider input[name="to"]'),
            date = $('.info-block-order .order-slider input[name="date"]'),
            nameForm = $('.info-block-order .order-slider input[name="name"]'),
            phoneForm = $('.info-block-order .order-slider input[name="phone"]'),
            checkPeople = $('.info-block-order .order-slider .checkbox-data input[type="checkbox"]').is(':checked'),
            objData = {car, brand, model, fromCity, toCity, date, nameForm, phoneForm, checkPeople, fixed_offset}
        return objData;
    }

    // клик на кнопку Далее
    $('.info-block-order .arrows-order').on('click', function() {
        var objData = getting_data();
        console.log(objData.fixed_offset)
        $('html, body').animate({scrollTop: $('.info-block-order').offset().top - objData.fixed_offset}, 1000);

        if (objData.car!== undefined&&objData.fromCity.val()!=''&&objData.toCity.val()!=''&&objData.date.val()!='') {
            $('.info-block-order .infoBlockOrderLast .info-block-main.d-none').removeClass('d-none')
            $('.info-block-order .infoBlockOrderLast .info-block-main .info span').html(`${objData.car.val()} ${objData.brand.val()} ${objData.model.val()} из г.${objData.fromCity.val()} в г.${objData.toCity.val()}. Желаемая дата отправки: ${objData.date.val()}`);
        } else {
            $('.info-block-order .infoBlockOrderLast .info-block-main').addClass('d-none')
        }
    });


    $('.info-block-order .order-slider .finish_order .sendForm button').on('click', function() {
        var objData = getting_data();
        
        objData.nameForm.val() == '' ? addError(objData.nameForm) : removeError(objData.nameForm)
        objData.phoneForm.val() == '' || objData.phoneForm.val().length != 17 ? addError(objData.phoneForm) : removeError(objData.phoneForm)
        if (objData.checkPeople === false) alert('Нет согласия на обработку персональных данных') 

        if (objData.nameForm.val()!='' && objData.phoneForm.val()!='' && objData.phoneForm.val().length==17 && objData.checkPeople===true) {
            var objContact = new Object()
            objContact = {
                data: {
                    'date': objData.date.val(),
                    'email': objData.nameForm.val(),
                    'from': objData.fromCity.val(),
                    'phone': objData.phoneForm.val(),
                    'to': objData.toCity.val(),
                    'transport_desc': objData.brand.val() + ' ' + objData.model.val(),
                    'transport_kind': objData.car.val()
                },
                "form_kind": "main"
            }
            // sendAjaxRequestModal(objContact);
            console.log('Отправлено')
        }
    })
    function addError(el) {
        el.addClass('errorForm');
    }
    function removeError(el) {
        el.removeClass('errorForm');
    }

    // проверки полей обратного звонка
    $(".callback #btnContactPhone").click(() => {
        if ($('.callback .phoneContact').val() == '' || $('.callback .phoneContact').val().length != 17) {
            $('.callback .phoneContact').addClass('errorForm');
            alert('Номер телефона не заполнен, либо заполнен неверно')
        } else {
            var objContact = {
                data: {
                    'phone': $('.phoneContact').val()
                },
                "form_kind": "navbar"
            }
            $('.callback .phoneContact').removeClass('errorForm');
            // sendAjaxRequestModal(objContact);
            alert('Отправлено')
        }
        return false;
    });
    
    // ajax формы
    // var csrfToken = $('[name=csrf_token]').val()
    // function sendAjaxRequestModal(objContact) {
    //     $.ajax({
    //         url: '/make_order/',
    //         type: 'POST',
    //         contentType: false,
    //         processData: false,
    //         data: JSON.stringify(objContact),
    //         dataType: 'json',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "X-CSRFToken": csrfToken
    //         },
    //         success: () => {
    //             window.location.replace("/order_success");
    //         }
    //     });
    // }

    // Просмотр изображения
	$(function(){
		$('.single-gallery-wrap .gallery-btn').click(function(event) {
            // $(event.target).prev()[0];
		var i_path = $(event.target).prev().attr('src');
		$('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
		$('#overlay, #magnify').fadeIn('fast');
		});
		
		$('body').on('click', '#close-popup, #overlay', function(event) {
		event.preventDefault();
		$('#overlay, #magnify').fadeOut('fast', function() {
			$('#close-popup, #magnify, #overlay').remove();
		});
		});
	});

    // mask for phone
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('#phone'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, true);
        input.addEventListener("keydown", mask, false)
        });
    });

})(jQuery);