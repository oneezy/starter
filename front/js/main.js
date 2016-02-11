$( document ).ready(function(){


    // Materialize
    $('.navigation .tabs').tabs();

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    $("a[data-activates='mobile-demo']").click(function() {
        setTimeout(function() {
            $(".logo-icon").toggleClass("active");
        }, 25); 
    });


    // Owl Carousel
    var owl = $("#owl-example");

        owl.owlCarousel({
            singleItem         : true,
            addClassActive     : true,
            pagination         : false,
            startDragging      : true
    });


        // Custom Next
        $(".next").click(function(){
            owl.trigger('owl.next');
        });

        // Custon links
        $('.owl-company').click(function(){
            owl.trigger('owl.goTo', 0);
        });

        $('.owl-services').click(function(){
            owl.trigger('owl.goTo', 1);
        });

        $('.owl-inventory').click(function(){
            owl.trigger('owl.goTo', 2);
        });

        $('.owl-contact').click(function(){
            owl.trigger('owl.goTo', 3);
        });

});
