var image_gallery = (function () {

    var init = function() {
        choregorapherGrid();  // 변수에 함수를 저장하여 함수를 정의 함. 익명 함수. common.js으로 빼고 페이지 뜨면 바로 실행시킴
    }
    
    function choregorapherGrid(){  // choreographerGrid 이라는 함수를 만듦

        var dataChoreographerGrid;
        var arrayLength = getArtistsData.length; // 총 강사 인원 (사진)이 몇명(개) 인지 그 숫자를 변수 arrayLength 안에 담음

        var tag='';  //지역 변수. 문자열을 담을(은) 변수 tag
        console.log(tag);
        for (var i = 0; i < arrayLength; i++) {  //for 반복문
            var tempGetArtistsData = getArtistsData[i];  // 변수 temp(일시적으로, 한번 쓰고 버릴)GetArtistsData 안에 getArtistsData index 값 저장

            var getArtistsDataName = getArtistsData[i].name;  // getArtistsData에 해당하는 인덱스 값의 이름을 변수 getArtistsDataName에 저장
            
            var getArtistsDataPicture = getArtistsData[i].picture; // getArtistsData에 해당하는 인덱스 값의 사진을 변수 getArtistsDataPicture에 저장. 사진의 경로를 저장하므로 문자열
            
            var tempTag = '<div class="choreographer-grid">' +  // 지역변수 tempTag 안에 append 시킬 .choreograrpher-grid 레이아웃을 문자열로 저장. 
                            '<div class="image-grid" style="background-image: url('+getArtistsDataPicture+');">' +  //사진 경로를 html에다가 css 방법으로 넣어줌
                                '<div class="artist-name text-center">' +
                                    '<span>' +
                                        '<a href="#">' +
                                            getArtistsDataName +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>';

            tag = tag + tempTag;  // 변수 tag는 변수 
                       
        } 
        $("#choreographer-grid-wrapper").html(tag);
    } 

    var getArtistsData = [
        {
            "name" : "Ara Cho",
            "picture" : "../img/agency_ara.jpg"
        },
        {
            "name" : "Austin Pak",
            "picture" : "../img/agency_austin.jpg"
        },
        {
            "name" : "Enoh",
            "picture" : "../img/agency_eunho.jpg"
        },
        {
            "name" : "Hyojin Choi",
            "picture" : "../img/agency_hyojin.jpg"
        },
        {
            "name" : "Isabelle",
            "picture" : "../img/agency_isabelle.jpg"
        },
        {
            "name" : "Jin Lee",
            "picture" : "../img/agency_jinlee.jpg"
        },
        {
            "name" : "Jinwoo Yoon",
            "picture" : "../img/agency_jinwoo.jpg"
        },
        {
            "name" : "Jun Liu",
            "picture" : "../img/agency_jun-liu.jpg"
        },
        {
            "name" : "Junsun Yoo",
            "picture" : "../img/agency_junsun.jpg"
        },
        {
            "name" : "Koosung Jung",
            "picture" : "../img/agency_koosung.jpg"
        },
        {
            "name" : "Lia Kim",
            "picture" : "../img/agency_lia.jpg"
        },
        {
            "name" : "May J Lee",
            "picture" : "../img/agency_mayj.jpg"
        },
        {
            "name" : "Mina Myoung",
            "picture" : "../img/agency_mina.jpg"
        },
        {
            "name" : "Minny Park",
            "picture" : "../img/agency_minyoung.jpg"
        },
        {
            "name" : "Shawn",
            "picture" : "../img/agency_shawn.jpg"
        },
        {
            "name" : "Tina Boo",
            "picture" : "../img/agency_tina.jpg"
        },
        {
            "name" : "Yoojung Lee",
            "picture" : "../img/agency_yoojung.jpg"
        },
        {
            "name" : "Youjin Kim",
            "picture" : "../img/agency_youjin.jpg"
        }
    ]

    return{
        init : init,
        getArtistsData : getArtistsData
    }
})();