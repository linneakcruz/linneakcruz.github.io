var illustrations, logos, photo, design, video, showall;



$('document').ready(function () {

    //    $('.enter_link').click(function () {
    //
    //        $(this).parent('#splashscreen').fadeOut(500);
    //    });

    illustrations = $('div.projectarray section.illustrations');
    photo = $('div.projectarray section.photo');
    design = $('div.projectarray section.design');
    video = $('div.projectarray section.video');
    logos = $('div.projectarray section.logos');
    showall = $('div.projectarray section');

    $('#illustrations').click(function () {

        illustrations.show();
        photo.hide();
        design.hide();
        video.hide();
	logos.hide();
    })

    $('#photo').click(function () {

        illustrations.hide();
        photo.show();
        design.hide();
        video.hide();
	logos.hide();
    })

    $('#design').click(function () {

        illustrations.hide();
        photo.hide();
        design.show();
	logos.hide();
        video.hide();
    })
	
    $('#logos').click(function () {
	logos.show();
        illustrations.hide();
        photo.hide();
        design.hide();
        video.hide();
    })

    $('#video').click(function () {

        illustrations.hide();
        photo.hide();
        design.hide();
        video.show();
	logos.hide();
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
