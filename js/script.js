var illustrations, logos, photo, design, video, mail, showall;

$('document').ready(function(){

illustrations = $('div.projectarray section.illustrations');
logos = $('div.projectarray section.logos');
design = $('div.projectarray section.design');
video = $('div.projectarray section.video');
mail = $('div.projectarray section.mail');
showall = $('div.projectarray section');

$('#illustrations').click(function() {
illustrations.show();
logos.hide();
design.hide();
video.hide();
mail.hide();

})

$('#logos').click(function() {
illustrations.hide();
logos.show();
design.hide();
video.hide();
mail.hide();

})

$('#design').click(function() {
illustrations.hide();
logos.hide();
design.show();
video.hide();
mail.hide();

})

$('#video').click(function() {
illustrations.hide();
logos.hide();
design.hide();
video.show();
mail.hide();

})

$('#mail').click(function() {
illustrations.hide();
logos.hide();
design.hide();
video.hide();
mail.show();

})

$('#showall').click(function () {

        showall.show();
    })

    $('.lightbox_trigger').click(function (e) {

        //prevent default action (hyperlink)
        e.preventDefault();

        //Get clicked link href
        var image_href = $(this).attr("href");
        var image_info = $(this).attr("alt")

        /* 	
        If the lightbox window HTML already exists in document, 
        change the img src to to match the href of whatever link was clicked
		
        If the lightbox window HTML doesn't exists, create it and insert it.
        (This will only happen the first time around)
        */

        if ($('#lightbox').length > 0) { // #lightbox exists

            //place href as img src value
            $('#content').html('<img src="' + image_href + '" />');
            $('div.imginfo').html(image_info);

            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
        } else { //#lightbox does not exist - create and insert (runs 1st time only)

            //create HTML markup for lightbox window
            var lightbox =
                '<div id="lightbox">' +
                '<p>&#10005;</p>' +
                '<div id="content">' + //insert clicked link's href into img src
                '<img src="' + image_href + '" />' +
                '</div>' +
                '<div class="imginfo">' +
                image_info + '</div>'
            '</div>';

            //insert lightbox HTML into page
            $('body').append(lightbox);
        }

        //Click anywhere on the page to get rid of lightbox window
        $('#lightbox').click(function () { //must use live, as the lightbox element is inserted into the DOM
            $('#lightbox').hide();
        });

    });
})
