var image_gallery = (function () {

    var init = function() {
        choreographerGrid();
        choreographerNameHover();
        overlayBody();
        albumOverlayFor();
    }
    
    // 강사님들 이미지가 나오는 그리드 함수 입니다.
    function choreographerGrid() {
        var arrayLength = getArtistsData.length;
        var tag = '';

        for (var i = 0; i < arrayLength; i++){           
            var artistsDataName = getArtistsData[i].name;         
            var artistsDataProfile = getArtistsData[i].profile;

            tag +=  '<div class="om-choreographer-grid">' +
                        '<div class="om-choreographer-image-grid" style="background-image: url('+artistsDataProfile+');">' +
                            '<div class="text-center">' +
                                '<span class="om-choreographer-image-grid-artist-name">' + 
                                    '<a href="#">' +
                                        artistsDataName +
                                    '</a>' +
                                '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
        $("#om-artists-grid-choreographer-wrapper").html(tag);
    }

    //강사님 사진 hover 했을때 이름 보여주고 숨기는 기능
    function choreographerNameHover() {
        var colorCode = [
            ["#ffffff", "#141414"],
            ["#141414", "#ffffff"]
        ]

        $(".om-choreographer-image-grid").mouseenter(function () {
            var colorCodeRandom = $(colorCode).get(Math.floor(Math.random() *2));
            $(this).find(".om-choreographer-image-grid-artist-name a").css("color", colorCodeRandom[1]);
            $(this).find(".om-choreographer-image-grid-artist-name a").css("opacity", 1);
            $(this).css("background-color", colorCodeRandom[0]);
            $(this).addClass("om-bg-none");
        });
        
        $(".om-choreographer-image-grid").mouseleave(function () {
            $(this).find(".om-choreographer-image-grid-artist-name a").css("opacity", 0);
            $(this).removeClass("om-bg-none");
        });
    }

    // overlay 열고 닫히는 기능들
    function overlayBody(){
        var overlay = $("#om-artist-grid-album-overlay");

        $(".om-choreographer-image-grid-artist-name").on("click", function () {
            overlay.show();
            $("body").css("overflow", "hidden");
        });

        $(".overlay-close-btn").on("click", function () {
            overlay.hide();
            $("body").css("overflow", "scroll");
        });
        
        // overlay에서 사진 외의 부분 클릭했을때 overlay 닫히는 기능
        overlay.on("click", function (a) {
            if (!$(".om-choreographer-image-grid-artist-name").is(a.target) 
                && !overlay.has(a.target).length == 0
                && !$(".om-artist-grid-album-overlay-prev img").is(a.target)
                && !$(".om-artist-grid-album-overlay-next img").is(a.target)) {
                overlay.hide();
                $("body").css("overflow", "scroll");
            }
        });
    }

    // 앨범 사진 갯수 만큼 돌리는 기능
    function albumOverlayFor(){
        var totalAlbumImgLength = getArtistsAlbum.length; 
        var currentAlbumPhoto ='';

        for (var i = 0; i  < totalAlbumImgLength; i++){

            currentAlbumPhoto += '<li class="album-overlay-img-item" style="background-image: url('+getArtistsAlbum[i]+');"></li>';
        }
        $("ul.album-overlay-img-wrap").html(currentAlbumPhoto); 
    }

    // 왼쪽 previous 사진 보기
    function albumOverlayPrevBtn(){
        $("li.album-overlay-img-item:last-child").prependTo(".album-overlay-img-wrap");
    }

    // 오른쪽 next 사진 보기
    function albumOverlayNextBtn(){
        $("li.album-overlay-img-item:first-child").appendTo(".album-overlay-img-wrap");
    }
    
    //Dummy Data
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
    
    var getArtistsAlbum = [
        // {
        //     "photo" : "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_01.jpg"
        // },
        // {
        //     "photo" : "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_02.jpg"
        // },
        // {
        //     "photo" : "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_03.jpg"
        // },
        // {
        //     "photo" : "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_04.jpg"
        // },
        // {
        //     "photo" : "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_05.jpg"
        // }
        
         "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_01.jpg",
        "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_02.jpg",
       "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_03.jpg",
       "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_04.jpg",
       "https://s3.ap-northeast-2.amazonaws.com/one-m/choreographer-resources/template_a/Ara+Cho/crop/ara_05.jpg"
    ]

    return{
        init : init,
        albumOverlayPrevBtn : albumOverlayPrevBtn,
        albumOverlayNextBtn : albumOverlayNextBtn
    }
})();