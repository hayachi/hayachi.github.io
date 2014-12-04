//マッププラグイン引数の設定
var POINT ={
	lig:{
        id: 'map_canvas_lig',//マップの描画
        pin: 'images/pins_lig.png',//アイコンの画像
        lat: 35.710312,// 位置を定義をする
        lng: 139.777079// 位置を定義をする

    },
    lamp:{
    	id: 'map_canvas_lamp',
    	pin: 'images/pins_lamp.png',
    	lat: 36.825442,
    	lng: 138.204649
    }
};
//拡大比率の定数
var ZOOM = 15;

/*------------------------------------------------------

マップのプラグイン

--------------------------------------------------------*/

$.fn.modalMap = function(id, pin, lat, lng) {
    // 位置を定義をする
    var latlng = new google.maps.LatLng(lat, lng);

    //ベースマップのオプション定義
    var myOptions = {
        zoom: ZOOM,//拡大比率
        center: latlng,//表示枠内の中心点
        mapTypeControlOptions: { 
        	mapTypeIds: ['mapstyle', google.maps.MapTypeId.ROADMAP] 
        }//表示タイプの指定
    };

    //アイコン設定
    var icon = new google.maps.MarkerImage(pin,
    new google.maps.Size(52,90), //アイコンサイズ設定
    new google.maps.Point(0,0) //アイコン位置調整
    );

    //マップの描画
    var map = new google.maps.Map(document.getElementById(id), myOptions);

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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
    		"color": "#000000"
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
