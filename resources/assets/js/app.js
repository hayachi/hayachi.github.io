//
//google map
//


//実行関数
function initialize(){

  const google = window.google;

  //緯度経度の変数
  const latLng = {
    lat: 35.706633,
    lng: 139.782243
  };

  //緯度経度を設定
  let map = new google.maps.Map(document.getElementById('js-map-taeget'), {
    center: latLng,
    zoom: 18
  });

  //スタイルの設定
  let styleOptions = new google.maps.StyledMapType([
    {
      'stylers': [
        { 'saturation': -100 },
        { 'visibility': 'simplified' },
        { 'lightness': 22 }
      ]
    }
  ],{name: 'Styled Map'});


  //マーカー用の画像
  const image = 'http://hayachi.github.io/images/pin.png';

  //マーカー
  let beachMarker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: image
  });

  //オプションの貼り付け
  map.mapTypes.set('js-map-taeget', styleOptions, beachMarker);

  //表示するマップ
  map.setMapTypeId('js-map-taeget');

}

initialize();