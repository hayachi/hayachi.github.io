//拡大比率の定数
var ZOOM = 15;

/*------------------------------------------------------

マップのプラグイン

--------------------------------------------------------*/

$.fn.modalMap = function() {
    // 位置を定義をする
    var latlng = new google.maps.LatLng(35.710301, 139.777073);

    //ベースマップのオプション定義
    var myOptions = {
    zoom: ZOOM,//拡大比率
    center: latlng,//表示枠内の中心点
    mapTypeControlOptions: { 
            mapTypeIds: ['mapstyle', google.maps.MapTypeId.ROADMAP] 
        }//表示タイプの指定
    };

    //アイコン設定
    var icon = new google.maps.MarkerImage('images/pin_lig.png',
    new google.maps.Size(52,90), //アイコンサイズ設定
    new google.maps.Point(0,0) //アイコン位置調整
    );

    //マップの描画　変わるところ
    var map = new google.maps.Map(document.getElementById('map_canvas_lig'), myOptions);

    //マップアイコンの設定
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: icon
    });

    //マップデザインの貼り付け
    var styleOptions = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a0d6d1"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f1f1f1"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];

    //マップスタイルの呼び出し
    var sampleType = new google.maps.StyledMapType(styleOptions);
    map.mapTypes.set('mapstyle', sampleType);
    map.setMapTypeId('mapstyle');
};