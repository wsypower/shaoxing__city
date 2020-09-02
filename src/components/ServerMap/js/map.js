//http://api.map.baidu.com/direction?coord_type=bd09ll&origin=latlng:32.205682,118.424356|name:我的位置&destination=latlng:32.218682,118.422356|name:22&mode=driving&region=安徽滁州&output=html&src=webapp.ahcznj.axfw
import axios from 'axios';
var map;
var curMapType = '';
var selectIcon;
var positionIcon = new BMap.Icon(require('../image/position.png'), new BMap.Size(44, 34));
var positionOverlay = new BMap.Marker(new BMap.Point(1, 1), {
  icon: positionIcon,
});
var selectIcon;
var markOverlay;
var overlays = [];
var pois = [];
var preOverlay;
var isInit = true;
var markIcon;
var curMarkPos;

export function initBdMap(type) {
  return new Promise((resolve, reject) => {
    map = null;
    map = new BMap.Map('map');
    map.centerAndZoom(new BMap.Point(120.592835, 30.003487), 18);
    map.enableScrollWheelZoom(true);
    curMapType = type;
    if (curMapType == 'wc') {
      markIcon = new BMap.Icon(require('../image/green-wc.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/red-wc.png'), new BMap.Size(46, 62));
    } else if (curMapType == 'gov') {
      markIcon = new BMap.Icon(require('../image/green-gov.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/red-gov.png'), new BMap.Size(46, 62));
    } else if (curMapType == '3') {
      markIcon = new BMap.Icon(require('../image/jdwx.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/jdwx-select.png'), new BMap.Size(46, 62));
    } else if (curMapType == '1') {
      markIcon = new BMap.Icon(require('../image/gdst.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/gdst-select.png'), new BMap.Size(46, 62));
    } else if (curMapType == '2') {
      markIcon = new BMap.Icon(require('../image/ksfw.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/ksfw-select.png'), new BMap.Size(46, 62));
    } else if (curMapType == '4') {
      markIcon = new BMap.Icon(require('../image/bjqx.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/bjqx-select.png'), new BMap.Size(46, 62));
    } else if (curMapType == '5') {
      markIcon = new BMap.Icon(require('../image/bjfw.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/bjfw-select.png'), new BMap.Size(46, 62));
    } else if (curMapType == '6') {
      markIcon = new BMap.Icon(require('../image/zsfw.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/zsfw-select.png'), new BMap.Size(46, 62));
    } else if (curMapType == 'bike') {
      markIcon = new BMap.Icon(require('../image/green-zxc.png'), new BMap.Size(46, 62));
      selectIcon = new BMap.Icon(require('../image/green-zxc1.png'), new BMap.Size(46, 62));
    }

    resolve(map);
    // return map;
  });
}

function loadBike() {
  return axios.get(mapApi);
}

export function getCurrentPosition(x, y) {
  if (positionOverlay) {
    map.removeOverlay(positionOverlay);
  }
  var point = new BMap.Point(x, y);
  //if (isInit) {
  //  map.centerAndZoom(point, 16);
  //  map.setCenter(point);
  // isInit = false;
  //} else {
  map.setCenter(point);
  //map.centerAndZoom('北京', 17);
  //}
  positionOverlay = new BMap.Marker(point, {
    icon: positionIcon,
  });
  map.addOverlay(positionOverlay);

  if (
    curMapType == 'jdwx' ||
    curMapType == 'gdst' ||
    curMapType == 'ksfw' ||
    curMapType == 'bjqx' ||
    curMapType == 'bjfw' ||
    curMapType == 'zsfw' ||
    curMapType == 'bike'
  ) {
    loadBike().then(result => {
      var res = result.data.msg;
      res = JSON.parse(res);
      res.station.forEach(d => {
        // var d = res.station[i]
        var bd09 = coordtransform.gcj02tobd09(d.lng, d.lat);
        var point = new BMap.Point(bd09[0], bd09[1]);
        var overlay = new BMap.Marker(point, {
          icon: markIcon,
        });
        overlay.addEventListener('click', function () {
          if (preOverlay) {
            map.closeInfoWindow();
            preOverlay.setIcon(markIcon);
            preOverlay.setTop(false);
          }
          this.setIcon(selectIcon);
          this.setTop(true);
          preOverlay = this;
          var opts = {
            width: 220,
            height: 90,
            title: d.name,
          };
          var infoWindow = new BMap.InfoWindow(
            '总数：' + d.capacity + '，可租：' + d.availBike + '<br>地址：' + d.address +
            '<br><button id="bikeNavBtn">导航</button>',
            opts,
          );
          curMarkPos = point;
          map.openInfoWindow(infoWindow, point);
          setTimeout(() => {
            document.getElementById('bikeNavBtn').onclick = function () {
              bikeNav();
            }
          }, 100);

        });
        overlay.id = d.uid;
        map.addOverlay(overlay);
        overlays.push(overlay);
        // map.setZoom(17);
      });
    });
  } else {
    loadMapData();
  }
}

function bikeNav() {
  var curPos = positionOverlay.getPosition();
  window.open('http://api.map.baidu.com/direction?' +
    'origin=latlng:' + curPos.lat + ',' + curPos.lng +
    '|name:我的位置&destination=latlng:' + curMarkPos.lat + ',' + curMarkPos.lng +
    '|name:目的地&mode=walking&region=绍兴&output=html&src=webapp.shaoxing.csgj');
}

function loadMapData() {
  for (var i = overlays.length - 1; i >= 0; i--) {
    var o = overlays[i];
    map.removeOverlay(o);
  }
  overlays = [];
  preOverlay = null;
  var curPoint = positionOverlay.getPosition();
  var local = new BMap.LocalSearch(map, {
    onSearchComplete: function () {
      var res = local.getResults();
      pois = [];
      for (var i = res.getCurrentNumPois() - 1; i >= 0; i--) {
        pois.push(res.getPoi(i));
      }
      pois.forEach(function (d) {
        // var d = pois[i];
        var overlay = new BMap.Marker(d.point, {
          icon: markIcon,
        });
        var distance = parseFloat(map.getDistance(curPoint, d.point).toFixed(2));
        d.distance = distance;
        overlay.addEventListener('click', function () {
          if (preOverlay) {
            preOverlay.getLabel().setContent('');
            preOverlay.setIcon(markIcon);
            preOverlay.setTop(false);
          }
          var markerLabel = new BMap.Label(d.title, {
            offset: new BMap.Size(50, 13),
          });
          markerLabel.setStyle({
            textAlign: 'center',
            fontSize: '20px',
            color: 'black',
            border: 'black',
            backgroundColor: 'transparent',
            fontWeight: 'bold',
          });
          this.setLabel(markerLabel);
          var opts = {
            // width: 220,
            // height: 109,
            title: `<p style='font-size:16px;color:black;font-weight:bold;margin-bottom:5px'>${d.title}</p>`,
            // title: d.title,
          };
          var img = require("../image/icon.png")
          var infoWindow = new BMap.InfoWindow(
            '地址：' + d.address +
            `<div style='
                        border-top:1px solid #B2B6B9;
                        height:47px;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        margin-top:7px;
                        '
              >
                <div id="wcNavBtn" style='padding-top:6px;color:#6FAB47;background:url(${img}) no-repeat left center;background-size:18px;padding-left:20px;'>
                    <span>到这去</span>
                </div>
            </div>
            `,
            opts,
          );
          curMarkPos = d.point;
          map.openInfoWindow(infoWindow, d.point);
          setTimeout(() => {
            document.getElementById('wcNavBtn').onclick = function () {
              bikeNav();
            }
          }, 100);

          this.setIcon(selectIcon);
          this.setTop(true);
          preOverlay = this;
        });
        overlay.id = d.uid;
        map.addOverlay(overlay);
        overlays.push(overlay);
      })
    },
  });
  if (curMapType == 'wc') {
    local.searchNearby('公厕', curPoint, 3000);
  } else if (curMapType == 'gov') {
    local.searchNearby('政府机构', curPoint, 3000);
  } else if (curMapType == 'bike') {
    local.searchNearby('公共自行车', curPoint, 3000);
  }
}