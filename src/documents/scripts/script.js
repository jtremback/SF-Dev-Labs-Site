//GOOGLE ANALYTICS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40760324-1', 'jehantremback.com');
ga('send', 'pageview');



// //TOPBAR AFFIX
// var targetFromTop = $("#affix").offset().top; 
// $(document).on("scroll", function() {
//   if (Modernizr.mq('only all and (min-width: 767px)')) {
//     var documentScroll = $(document).scrollTop();
//     if (targetFromTop < (documentScroll)) {
//       $("#affix").addClass('-affixed')
//     } else {
//       $("#affix").removeClass('-affixed')
//     }
//   }
// })



//IMAGE ZOOM AND PAN
var zoomNpan = function(zoom) {
  zoom.append('<div class="toggle"><i class="icon-zoom-in z_in"></i><i class="icon-zoom-out z_out"></i></div>'),
  toggle = zoom.find('.toggle'),
  z_in = zoom.find('.z_in'),
  z_out = zoom.find('.z_out'),
  img = zoom.find('img');

  z_in.on('click', function(e) {
    //Set zoom el height to avoid collapse
    var small_height = img.height();

    zoom.height(small_height);
    zoom.addClass('zoomed');
    $.pep.toggleAll(true);

    //Restore abs pos
    img.css('position', 'absolute').pep();
  });

  z_out.on('click', function(e) {
    zoom.removeClass('zoomed');
    //Remove abs pos
    img.css('position', 'static');
    $.pep.toggleAll(false);
  });
}



//INITIALIZE
var init = function() {
  console.log("hello");
  zoomNpan($(".js-zoom"))
  $(document).foundation();
}();
