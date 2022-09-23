// Получение сегодняшнего дня
function dateContact() {
  var d = new Date();
  var n = d.getDay();
  var time = $('.address-time-form .info-block .block .time .info-time');
  if (n==1) {
    time.eq(0).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==2) {
    time.eq(1).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==3) {
    time.eq(2).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==4) {
    time.eq(3).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==5) {
    time.eq(4).css({'font-weight':'900', 'color': '#444444'});
  } else if (n==6) {
    time.eq(5).css({'font-weight':'900', 'color': '#444444'});
  } else {
    time.eq(6).css({'font-weight':'900', 'color': '#444444'});
  } 
}
dateContact();

// первый слайдер
$('.first-slider-main').slick({
  appendArrows: $('.first-slider-main'),
  prevArrow: '<button type="button" class="btn_second_slider btn_sec_prev"></button>',
  nextArrow: '<button type="button" class="btn_second_slider btn_sec_next"></button>'
});

// второй слайдер
$('.second-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  appendArrows: $('.second_slider_arrow'),
  prevArrow: '<button type="button" class="btn_second"></button>',
  nextArrow: '<button type="button" class="btn_second"></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});    

// отступ слева у навигации слайдера
$( window ).resize(function() {
  mlSlider();
  headerBefore();
});
function mlSlider() {
  var cnt = $('.container').width() + 30;
  var cntMl = ($(window).width() - cnt) / 2 + 15;
  $('.slick-arrow').css('margin-left', cntMl);
}

// движение :before в зависимости от ширины li в header
function headerBefore() {
  $('.header__container .nav_main .nav_main_ul_li').each(function(){
    var sumLi = $(this).find('li').length
    $('.header__container .nav_main .nav_main_ul_li li ul').each(function(){
        var sumOther = $(this).find('li').length;
        sumLi -= sumOther;
        var sumWidth = 0;
        for (var i=0; i<sumLi; i++) {
          var sumLiBlock = $(".header__container .nav_soc .nav_main > ul li").not(".header__container .nav_soc .nav_main ul li ul li").eq(i).width()
          sumWidth += sumLiBlock;
          // console.log(sumWidth);
          if (sumWidth > 606) {
            // console.log(sumWidth);
            $('.header__container .whiteLine').removeClass('down');
          } else {
            $('.header__container .whiteLine').addClass('down');
          }
        }
    });
});
}
mlSlider();
headerBefore();

// слежение за объектом
let observer = new MutationObserver(mutationRecords => {
  headerBefore();
});
var config = { childList: true, subtree: true, characterDataOldValue: true };
observer.observe(elemW_1, config);
observer.observe(elemW_2, config);
observer.observe(elemW_3, config);
observer.observe(elemW_4, config);
observer.observe(elemW_5, config);
observer.observe(elemW_6, config);

// аккордион (форма)
if ($(".accordion-form form").length > 0) {
  $('.accordion-form form #collapse1 .accordion-body label').click(function () {
    $('.accordion-form form #collapse1 .accordion-body label').addClass('hidden');
    $(this).addClass('active');
    $('.accordion-form form #collapse1 .accordion-body .edit').removeClass('hidden');
  });

  $('.accordion-form form #collapse1 .accordion-body .edit').click(function () {
    $('.accordion-form form #collapse1 .accordion-body label').removeClass('hidden active');
    $('.accordion-form form #collapse1 .accordion-body .edit').addClass('hidden');
  });
}

// маска для телефона
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

// получение данных из формы (открытие формы)
if ($(".accordion-form form").length > 0) {
let t1 = 0;
document.querySelector(".accordion-form form").addEventListener( "click" , function() {
  let car = $('input[name="car"]:checked').val()
  let brand = $('input[name="brand"]').val()
  let model = $('input[name="model"]').val()
  let city1 = $('input[name="city1"]').val()
  let city2 = $('input[name="city2"]').val()
  let date = $('input[name="date"]').val()
  if (car === undefined) {
    car = '';
  }
  if (car!='' && city1!='' && city2!='' && date!='') {
    $('.accordion-form form .info-block .info-block-main .info span').html(`${car} ${brand} ${model} из ${city1} в ${city2}. Желаемая дата отправки: ${date}`);
  }
  $('.accordion-form form #collapse1 .accordion-body input').click(() => {
    collapse2();
  })
  $('.accordion #collapse2 .next-btn .btn-suc').click(function() {
    let brand2 = $('input[name="brand"]').val();
    let model = $('input[name="model"]').val();
    if (brand2!='' || model!='') {
      collapse3();
    }
  });
  $('.accordion #collapse2 .next-btn .btn-next').click(function() {
      $('input[name="brand"]').prop('required', false);
      $('input[name="model"]').prop('required', false);
    collapse3();
  });
  $('.accordion #collapse3 .next-btn .btn-suc').click(function() {
    let city1_2 = $('input[name="city1"]').val();
    let city2_2 = $('input[name="city2"]').val();
    let date_2 = $('input[name="date"]').val();
    if (city1_2!='' || city2_2!='' || date_2!='') {
      collapse4();
    }
  });
  function collapse2() {
    $('.accordion-form form .accordion .accordion-item:nth-child(2)').removeClass('notHidden');
    const collapseElem = document.querySelector('#collapse2');
    const collapse = new bootstrap.Collapse(collapseElem, {toggle: false});
    collapse.toggle();
  }
  function collapse3() {
    $('.accordion-form form .accordion .accordion-item:nth-child(3)').removeClass('notHidden');
    const collapseElem2 = document.querySelector('#collapse3');
    const collapse2 = new bootstrap.Collapse(collapseElem2, {toggle: false});
    collapse2.toggle();
    $('.accordion #collapse2 .next-btn').remove();
  }
  function collapse4() {
    $('.accordion-form form .accordion .accordion-item:nth-child(4)').removeClass('notHidden');
    const collapseElem3 = document.querySelector('#collapse4');
    const collapse3 = new bootstrap.Collapse(collapseElem3, {toggle: false});
    collapse3.toggle();
    $('.accordion #collapse3 .next-btn').remove();
  }
});
}

// счетчик чисел
if ($(".counter .info-block").length > 0) {
  var s=0;
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $('.counter .info-block').offset().top) {
      // $('#fastRightStart').addClass('active');
      // console.log(1);
      if (s==0) {
        calcCount();
      }
    }
  });
  function calcCount() {
    for (var i = 0; i < $('.counter .info-block .block .number-counter span').length; i++) {
        var end = $('.counter .info-block .block .number-counter span').eq(i).text();
        countStart(end, i);
    }
    s=1;
  }
  function countStart(end, i) {
    var start = 0;
    var interval = setInterval(function () {
        $('.counter .info-block .block .number-counter span').eq(i).text(++start);
        if (start == end) {
            clearInterval(interval);
        }
    }, 30);
  }
}

// Просмотр изображения
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
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

// Открытие шапки
var headerOpenBlock = document.querySelector('.header__container header .logo__nav .logo-btnMenu .btn-menu');
// $('.header__container header .logo__nav .logo-btnMenu .btn-menu');

headerOpenBlock.addEventListener('click', function () {
  if ($('.header__container nav').hasClass('allHeader')) {
      $('.header__container nav').removeClass('allHeader');
  } else {
    $('.header__container nav').addClass('allHeader');
  }
});
