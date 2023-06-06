$(document).ready(function () {

  // Below slider trigger use for text-with-reviews and instagram section.
    $('.text_review_slider_wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow:'<div><svg class="slick-prev slick-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.19861 11.824C0.620644 11.4267 0.620645 10.5733 1.19861 10.176L14.4335 1.07699C15.097 0.620831 16 1.09585 16 1.90103V20.099C16 20.9041 15.097 21.3792 14.4335 20.923L1.19861 11.824Z" fill="#111111"/></svg></div>',
      nextArrow:'<div><svg class="slick-next slick-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8014 10.176C15.3794 10.5733 15.3794 11.4267 14.8014 11.824L1.56653 20.923C0.903025 21.3792 -1.8275e-06 20.9041 -1.75711e-06 20.099L-1.66193e-07 1.90103C-9.58024e-08 1.09585 0.903027 0.62083 1.56653 1.07699L14.8014 10.176Z" fill="#111111"/></svg></div>'
  });

      $('.image_review_slider_wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow:'<div><svg class="slick-prev slick-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.19861 11.824C0.620644 11.4267 0.620645 10.5733 1.19861 10.176L14.4335 1.07699C15.097 0.620831 16 1.09585 16 1.90103V20.099C16 20.9041 15.097 21.3792 14.4335 20.923L1.19861 11.824Z" fill="#111111"/></svg></div>',
      nextArrow:'<div><svg class="slick-next slick-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8014 10.176C15.3794 10.5733 15.3794 11.4267 14.8014 11.824L1.56653 20.923C0.903025 21.3792 -1.8275e-06 20.9041 -1.75711e-06 20.099L-1.66193e-07 1.90103C-9.58024e-08 1.09585 0.903027 0.62083 1.56653 1.07699L14.8014 10.176Z" fill="#111111"/></svg></div>'
  });
  
  $('.our_features .our_features_cta').click(function (e){
    e.preventDefault();
    $(this).addClass('hide');
    $(this).parents('.our_features_content').find('.text__description').removeClass('hide');
  });

  $('.our_features .our_features_close_cta').click(function (e){
    e.preventDefault();
    $(this).closest('.text__description').addClass('hide');
    $(this).parents('.our_features_content').find('.our_features_cta').removeClass('hide');
  });

  $('.homepage_strip_bar .strip_bar_text').click(function() {
    $(this).closest('.homepage_strip_bar_inner').find('.strip_bar_content_wrapper').slideToggle();
    $(this).find('.down_arrow').toggleClass('open');
  });

      $('.homepage_strip_bar .homepage_strip_bar_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
      });

   $('.homepage_strip_bar .homepage_strip_bar_slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.homepage_strip_bar .strip_bar_content_wrapper').slideUp();
    $('.homepage_strip_bar .strip_bar_text .down_arrow').removeClass('open');
  });

  var window_width = $(window).width();
  if(window_width < 993){
    $('#cart-icon-bubble--desktop .header--cart_count').removeClass('cart-count');
    $('#cart-icon-bubble--desktop .header--cart_subtotal').removeClass('cart-subtotal');
    $('#cart-icon-bubble--mobile .header--cart_count').addClass('cart-count');
    $('#cart-icon-bubble--mobile .header--cart_subtotal').addClass('cart-subtotal');
  }else{
    $('#cart-icon-bubble--mobile .header--cart_count').removeClass('cart-count');
    $('#cart-icon-bubble--mobile .header--cart_subtotal').removeClass('cart-subtotal');
    $('#cart-icon-bubble--desktop .header--cart_count').addClass('cart-count');
    $('#cart-icon-bubble--desktop .header--cart_subtotal').addClass('cart-subtotal');
  }

    var cart_subtotal = $('.rebuy-cart__flyout-subtotal-amount').html();
    jQuery.getJSON('/cart.js', function() {
    }).done(function(cart) {
    $('.header__icons .header--cart_count').html(cart.item_count);
    $('.header__icons .header--cart_subtotal').html(cart_subtotal);
    });

  $( window ).resize(function() {
   var window_width = $(window).width();
  if(window_width < 993){
    $('#cart-icon-bubble--desktop .header--cart_count').removeClass('cart-count');
    $('#cart-icon-bubble--desktop .header--cart_subtotal').removeClass('cart-subtotal');
    $('#cart-icon-bubble--mobile .header--cart_count').addClass('cart-count');
    $('#cart-icon-bubble--mobile .header--cart_subtotal').addClass('cart-subtotal');
  }else{
    $('#cart-icon-bubble--mobile .header--cart_count').removeClass('cart-count');
    $('#cart-icon-bubble--mobile .header--cart_subtotal').removeClass('cart-subtotal');
    $('#cart-icon-bubble--desktop .header--cart_count').addClass('cart-count');
    $('#cart-icon-bubble--desktop .header--cart_subtotal').addClass('cart-subtotal');
  }

    var cart_subtotal = $('.rebuy-cart__flyout-subtotal-amount').html();
    jQuery.getJSON('/cart.js', function() {
    }).done(function(cart) {
      $('.header__icons .header--cart_count').html(cart.item_count);
      $('.header__icons .header--cart_subtotal').html(cart_subtotal);
    });
});

$('.autoship-collection .link-read-more').click(function (){
  var id = $(this).data('id');
  $(id).slideToggle().toggleClass('show');
  if($(id).hasClass('show')){
    $(this).text('Close');
  }else{
    $(this).text('Read more');
  }
});

$('.featured-collection-list .collection_filter_list input').change(function (e){
  e.preventDefault();
  var show_full_list = true;

  $(this).parents('.collection_filter_list_wrap').find('input').each(function() {
   if($(this).is(":checked")){
     var get_id = $(this).data('id');
     $('#' + get_id).css("display","block");
     show_full_list = false;
      console.log('#' + get_id);
   }else{
      var get_id = $(this).data('id');
     $('#' + get_id).css("display","none");
               console.log('hide--#' + get_id);
   }
});

  if(show_full_list == true){
    $('.featured-collection-list .featured_collection_list').css("display","block");
  }
  
});

  $('.mob_filter_products_list').click(function (e){
     e.preventDefault();
    $(this).find('.mob_collection_filter_list_wrap').slideToggle();
    $(this).find('.arrow').toggleClass('active_arrow');
  });

   $('.mob_filter_products_list .mob_collection_filter_list_wrap').click(function (e){
     e.stopPropagation();
   });

        $('.side_by_side_reviews_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow:'<svg class="slick-prev slick-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.19861 11.824C0.620644 11.4267 0.620645 10.5733 1.19861 10.176L14.4335 1.07699C15.097 0.620831 16 1.09585 16 1.90103V20.099C16 20.9041 15.097 21.3792 14.4335 20.923L1.19861 11.824Z" fill="#111111"/></svg>',
      nextArrow:'<svg class="slick-next slick-arrow" width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.8014 10.176C15.3794 10.5733 15.3794 11.4267 14.8014 11.824L1.56653 20.923C0.903025 21.3792 -1.8275e-06 20.9041 -1.75711e-06 20.099L-1.66193e-07 1.90103C-9.58024e-08 1.09585 0.903027 0.62083 1.56653 1.07699L14.8014 10.176Z" fill="#111111"/></svg>'
  });

$('.side_by_side_reviews .link-read-more').click(function (){
  $(this).parents('.reviews_slide').find('.reviews_slide_inner').toggleClass('content_hide');
  $(this).parents('.reviews_slide').find('.read-more-gradient-wrapper').toggleClass('content_hide');
  
  if($(this).parents('.reviews_slide').find('.reviews_slide_inner').hasClass('content_hide')){
    $(this).text('Read more');
  }else{
    $(this).text('Close');
  }
});

$('.product_description_tab .product_description_tablist .tab').click(function(){
  $(this).parent('.product_description_tablist').find('.tab').removeClass('desc_tab_active');
  $(this).addClass('desc_tab_active');
  var tab_id = $(this).attr('id');
  $('.product_description_tab_content .tab_content').removeClass('desc_tab_active');
  $('.product_description_tab_content .' + tab_id).addClass('desc_tab_active');
});  
  
});