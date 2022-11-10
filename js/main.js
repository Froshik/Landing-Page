function startcount() {   
   $('.counter').each(function() {
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },{
            duration: 5000,
            easing: 'swing',
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        })
    })
}

startcount();

// $(window).scroll(function(){
//     var offset = $('#intro').offset(),
//         offsetwb = $('#main').offset();
//     if ($(this).scrollTop() > offset.top && $(this).scrollTop() < offsetwb.top) {
//       console.log('meme');
//     }
//   });

// for (var i=0; i < 10; i++) {
//     console.log(i)
//}