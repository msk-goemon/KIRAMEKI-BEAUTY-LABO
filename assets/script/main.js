$(document).ready(function(){
    $('.customer__voices').slick({
        infinite: true,   // 無限にスクロール
        slidesToShow: 1,  // 一度に表示するスライド数
        slidesToScroll: 1, // 一度にスクロールするスライド数
        dots: true,       // ナビゲーションドットを表示
        arrows: false,
        responsive: [     // レスポンシブ設定
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '34px'
                }
            }
        ]
    });
});
