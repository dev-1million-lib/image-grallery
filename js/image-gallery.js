var image_gallery = (function () {

    var init = function() {
        choreographerGrid();
        choreographerAlbum();
    }
    
    function choreographerGrid() {
        
        var arrayLength = getArtistsData.length;

        var imageGridTag = '';

        for (var i = 0; i < arrayLength; i++){
            
            var artistsDataName = getArtistsData[i].name;
            
            var artistsDataProfile = getArtistsData[i].profile;

            var tag = '<div class="choreographer-grid">' +
                            '<div class="image-grid" style="background-image: url('+artistsDataProfile+');">' +
                                '<div class="artist-name text-center">' +
                                    '<span>' + 
                                        '<a href="#">' +
                                            artistsDataName +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
                        
            imageGridTag = imageGridTag + tag;
        }
        
        $("#choreographer-grid-wrapper").html(imageGridTag);

    }

    function choreographerAlbum() {

        $(".artist-name").on("click", function () {
            $("#album-overlay").show();
            $("body").css("overflow", "hidden");
        })

        $(".overlay-close-btn").on("click", function () {
            $("#album-overlay").hide();
            $("body").css("overflow", "scroll");
        })
    }
    
        

    var getArtistsData = [
        {
            "name" : "Ara Cho",
            "profile" : "../img/agency_ara.jpg"
        },
        {
            "name" : "Austin Pak",
            "profile" : "../img/agency_austin.jpg"
        },
        {
            "name" : "Enoh",
            "profile" : "../img/agency_eunho.jpg"
        },
        {
            "name" : "Hyojin Choi",
            "profile" : "../img/agency_hyojin.jpg"
        },
        {
            "name" : "Isabelle",
            "profile" : "../img/agency_isabelle.jpg"
        },
        {
            "name" : "Jin Lee",
            "profile" : "../img/agency_jinlee.jpg"
        },
        {
            "name" : "Jinwoo Yoon",
            "profile" : "../img/agency_jinwoo.jpg"
        },
        {
            "name" : "Jun Liu",
            "profile" : "../img/agency_jun-liu.jpg"
        },
        {
            "name" : "Junsun Yoo",
            "profile" : "../img/agency_junsun.jpg"
        },
        {
            "name" : "Koosung Jung",
            "profile" : "../img/agency_koosung.jpg"
        },
        {
            "name" : "Lia Kim",
            "profile" : "../img/agency_lia.jpg"
        },
        {
            "name" : "May J Lee",
            "profile" : "../img/agency_mayj.jpg"
        },
        {
            "name" : "Mina Myoung",
            "profile" : "../img/agency_mina.jpg"
        },
        {
            "name" : "Minny Park",
            "profile" : "../img/agency_minyoung.jpg"
        },
        {
            "name" : "Shawn",
            "profile" : "../img/agency_shawn.jpg"
        },
        {
            "name" : "Tina Boo",
            "profile" : "../img/agency_tina.jpg"
        },
        {
            "name" : "Yoojung Lee",
            "profile" : "../img/agency_yoojung.jpg"
        },
        {
            "name" : "Youjin Kim",
            "profile" : "../img/agency_youjin.jpg"
        }
    ]

    return{
        init : init,
        getArtistsData : getArtistsData
    }
})();