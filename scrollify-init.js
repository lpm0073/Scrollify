/*==================================================================
 * Written by: mcdaniel
 * Date:  July 2017
 *
 * Usage: for scrollify plugin.
 *        https://github.com/lukehaas/Scrollify
 *==================================================================*/
( function( $, window, undefined ) {

  console.log('$.scrollify init');
  var lastScreenTop = 0;

  $.scrollify({
     section: ".section-scrollify",
     interstitialSection : "interstitialSection",
     offset: 0,
     setHeights: false,
     before: function(i,panels) {
      var ref = panels[i].attr("data-section-name");

      if(ref==="esg-ratings") {
        console.log('entered esg-ratings');
      }
      if(ref==="impact") {
        console.log('entered impact');
      }
      if(ref==="strategy") {
        console.log('entered strategy');
      }

    }
  });

  // we initially want scrollify disabled so that the user is not
  // bounced directly to the first scrollify panel.
  $.scrollify.disable();


  $(document).on('scroll', function(e){
       // limit execution to every 20th pixel scrolled
       var screenTop = $(document).scrollTop();  // this is the current vertical scroll pixel position. 0 is top of screen
       if (screenTop % 20 != 0) return 0;


       // Disable scrollify behavior on small devices
       if ($( window ).width() < 991) {  // the value 991 comes from bootstrap responsive design guide and refers to "average" mobile phones
          console.log('small device detected.');
          if (!$.scrollify.isDisabled()) {
            console.log('scrollify disabled for small device screen.');
            $.scrollify.disable();
          }
          return 0;
       }

       // if we made it this far and we're not in either the 1st or 3rd panel then there is nothing to do.
       var section_name = $.scrollify.current().context.id;  // this is the HTML ID attribute 
       if (section_name==="panel2") return 0;

       /* =========== Enable / Disable evaluations begin here ===========  */
       var panel1 = $('#panel1').offset().top;
       var panel3 = $('#panel3').offset().top;
       var padding = 750;

       if (screenTop > lastScreenTop) {
       // we are scrolling down towards the footer

         if ($.scrollify.isDisabled()) {
             if ((screenTop > panel1 - padding) && (section_name!="panel3")) {
               $.scrollify.enable();
               $.scrollify.update();
               console.log('test 1 (scrolling down): enabled scrollify() screenTop = ', screenTop, ' panel1 = ', panel1);
             }
           } else {
             // scrollify is currently enabled
             if (section_name==="panel3") {
               $.scrollify.disable();
               console.log('test 2 (scrolling down): disabled scrollify() screenTop = ', screenTop, ' panel3 = ', panel3);
               }
             }

       } else {
         //we are scrolling up towards the header
         if ($.scrollify.isDisabled() && (section_name==="panel3")) {
            if ((screenTop > panel1) && (screenTop < panel3 + padding)) {
              $.scrollify.enable();
              $.scrollify.update();
              console.log('test 3 (scrolling up): enabled scrollify() screenTop = ', screenTop, ' panel1 = ', panel1, ' panel3 = ', panel3);
            }
          } else {
            // scrollify is enabled
            if (section_name==="panel1" && !$.scrollify.isDisabled()) {
              $.scrollify.disable();
              console.log('test 4 (scrolling up): disabled scrollify() screenTop = ', screenTop, ' panel1 = ', panel1, ' panel3 = ', panel3);
              }
            }
         }

      lastScreenTop = screenTop;

  });

}( jQuery, window ));
