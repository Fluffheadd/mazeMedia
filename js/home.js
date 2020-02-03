$(document).ready(function() {
    // Show Active Class on Scroll
    var controller = new ScrollMagic.Controller();
    for(var i = 1; i < 5; i++) {
        var height = $('#bucket-' + i).height();
        new ScrollMagic.Scene({ triggerElement: '#bucket-' + i, duration: height })
            .setClassToggle('#bucket-' + i, 'active')
            .addTo(controller);
    }
});
