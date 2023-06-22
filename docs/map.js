/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


// // console.log('Test map')
//
// function initModal() {
//   const buttonMapPoint = document.querySelector('.-MapPagePoint')
//   const closeButton = document.querySelector('.-Cross')
//   const backgroundBlur = document.querySelector('.Q_BackgroundBlur')
//   const mapModalWindow = document.querySelector('.S_Modal')
//
//   buttonMapPoint.addEventListener('click', () => {
//     mapModalWindow.classList.add('visible')
//   })
//
//   closeButton.addEventListener('click', () => {
//     mapModalWindow.classList.remove('visible')
//   })
//
//   backgroundBlur.addEventListener('click', () => {
//     mapModalWindow.classList.remove('visible')
//   })
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   initModal()
// })

//
//
//

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVsZW4wOWRlcyIsImEiOiJjbDkxYjNnZnIwNm9nM3ZsaTZhNWgxZ2dhIn0.1624lJuGETwT-3NLXW4H6w';
var map = new mapboxgl.Map({
  container: 'map',
  // container ID
  style: 'mapbox://styles/helen09des/cliyv5o1i00ap01qqgruo599u',
  // style URL
  center: [40.933352, 55.751209],
  // starting position [lng, lat]
  zoom: 6.14 // starting zoom
});

var uelen = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Уэленская резьба по кости'
    },
    geometry: {
      coordinates: [-169.816428759645, 66.16106671086933],
      type: 'Point'
    }
  }]
};
var _iterator = _createForOfIteratorHelper(uelen.features),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var uelenPoint = _step.value;
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'Q_MapMarker uelen';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(uelenPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/uelen-bone-carving.html\">".concat(uelenPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var abash = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Абашевская игрушка'
    },
    geometry: {
      coordinates: [43.349051565654634, 53.9315184157615],
      type: 'Point'
    }
  }]
};
var _iterator2 = _createForOfIteratorHelper(abash.features),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var abashPoint = _step2.value;
    // create a HTML element for each feature
    var _el = document.createElement('div');
    _el.className = 'Q_MapMarker abash';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el).setLngLat(abashPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/abashevskaya-toy.html\">".concat(abashPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var vologlace = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Вологодское кружево'
    },
    geometry: {
      coordinates: [39.89399369615825, 59.220856507096585],
      type: 'Point'
    }
  }]
};
var _iterator3 = _createForOfIteratorHelper(vologlace.features),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var vologlacePoint = _step3.value;
    // create a HTML element for each feature
    var _el2 = document.createElement('div');
    _el2.className = 'Q_MapMarker vologlace';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el2).setLngLat(vologlacePoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/vologodskoe-lace.html\">".concat(vologlacePoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var gorod = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Городецкая роспись'
    },
    geometry: {
      coordinates: [43.474924773467876, 56.64895735383985],
      type: 'Point'
    }
  }]
};
var _iterator4 = _createForOfIteratorHelper(gorod.features),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var gorodPoint = _step4.value;
    // create a HTML element for each feature
    var _el3 = document.createElement('div');
    _el3.className = 'Q_MapMarker gorod';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el3).setLngLat(gorodPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/gorodets-painting.html\">".concat(gorodPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
var rakul = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Ракульская роспись'
    },
    geometry: {
      coordinates: [43.11123241681102, 60.89064608840255],
      type: 'Point'
    }
  }]
};
var _iterator5 = _createForOfIteratorHelper(rakul.features),
  _step5;
try {
  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
    var rakulPoint = _step5.value;
    // create a HTML element for each feature
    var _el4 = document.createElement('div');
    _el4.className = 'Q_MapMarker rakul';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el4).setLngLat(rakulPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/rakul-painting.html\">".concat(rakulPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator5.e(err);
} finally {
  _iterator5.f();
}
var skop = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Скопинская керамика'
    },
    geometry: {
      coordinates: [39.549319310084684, 53.82418255982557],
      type: 'Point'
    }
  }]
};
var _iterator6 = _createForOfIteratorHelper(skop.features),
  _step6;
try {
  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
    var skopPoint = _step6.value;
    // create a HTML element for each feature
    var _el5 = document.createElement('div');
    _el5.className = 'Q_MapMarker skop';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el5).setLngLat(skopPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/skopinsk-ceramic.html\">".concat(skopPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator6.e(err);
} finally {
  _iterator6.f();
}
var tver = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Тверская вышивка'
    },
    geometry: {
      coordinates: [35.921080552674255, 56.85958809952663],
      type: 'Point'
    }
  }]
};
var _iterator7 = _createForOfIteratorHelper(tver.features),
  _step7;
try {
  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
    var tverPoint = _step7.value;
    // create a HTML element for each feature
    var _el6 = document.createElement('div');
    _el6.className = 'Q_MapMarker tver';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el6).setLngLat(tverPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/tverskaya-lace.html\">".concat(tverPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator7.e(err);
} finally {
  _iterator7.f();
}
var tyla = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Тульская сталь'
    },
    geometry: {
      coordinates: [37.61742951375976, 54.194281113432424],
      type: 'Point'
    }
  }]
};
var _iterator8 = _createForOfIteratorHelper(tyla.features),
  _step8;
try {
  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
    var tylaPoint = _step8.value;
    // create a HTML element for each feature
    var _el7 = document.createElement('div');
    _el7.className = 'Q_MapMarker tyla';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el7).setLngLat(tylaPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/tulskaya-stal.html\">".concat(tylaPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator8.e(err);
} finally {
  _iterator8.f();
}
var dpi = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Музей декоративного искусства'
    },
    geometry: {
      coordinates: [37.609790071625184, 55.774653500176896],
      type: 'Point'
    }
  }]
};
var _iterator9 = _createForOfIteratorHelper(dpi.features),
  _step9;
try {
  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
    var dpiPoint = _step9.value;
    // create a HTML element for each feature
    var _el8 = document.createElement('div');
    _el8.className = 'Q_MapMarker dpi';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el8).setLngLat(dpiPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"#\">".concat(dpiPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator9.e(err);
} finally {
  _iterator9.f();
}
var veliko = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Великоустюгская роспись'
    },
    geometry: {
      coordinates: [46.30130908411516, 60.76241019458968],
      type: 'Point'
    }
  }]
};
var _iterator10 = _createForOfIteratorHelper(veliko.features),
  _step10;
try {
  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
    var velikoPoint = _step10.value;
    // create a HTML element for each feature
    var _el9 = document.createElement('div');
    _el9.className = 'Q_MapMarker veliko';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el9).setLngLat(velikoPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/velikoustugskaya-rospis.html\">".concat(velikoPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator10.e(err);
} finally {
  _iterator10.f();
}
var vologhoh = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Вологодская хохлома'
    },
    geometry: {
      coordinates: [39.87540159910813, 59.2116632564113],
      type: 'Point'
    }
  }]
};
var _iterator11 = _createForOfIteratorHelper(vologhoh.features),
  _step11;
try {
  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
    var vologhohPoint = _step11.value;
    // create a HTML element for each feature
    var _el10 = document.createElement('div');
    _el10.className = 'Q_MapMarker vologhoh';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el10).setLngLat(vologhohPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/vologodskaya-hohloma.html\">".concat(vologhohPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator11.e(err);
} finally {
  _iterator11.f();
}
var dim = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Дымковская игрушка'
    },
    geometry: {
      coordinates: [49.70170252117998, 58.61558976475635],
      type: 'Point'
    }
  }]
};
var _iterator12 = _createForOfIteratorHelper(dim.features),
  _step12;
try {
  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
    var dimPoint = _step12.value;
    // create a HTML element for each feature
    var _el11 = document.createElement('div');
    _el11.className = 'Q_MapMarker dim';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el11).setLngLat(dimPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/dimskaya-toy.html\">".concat(dimPoint.properties.title, "</a>"))).addTo(map);
  }

  //
  //
} catch (err) {
  _iterator12.e(err);
} finally {
  _iterator12.f();
}
var paleh = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {
      title: 'Палехская миниатюра'
    },
    geometry: {
      coordinates: [41.85408591572286, 56.80376352371647],
      type: 'Point'
    }
  }]
};
var _iterator13 = _createForOfIteratorHelper(paleh.features),
  _step13;
try {
  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
    var palehPoint = _step13.value;
    // create a HTML element for each feature
    var _el12 = document.createElement('div');
    _el12.className = 'Q_MapMarker paleh';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(_el12).setLngLat(palehPoint.geometry.coordinates).setPopup(new mapboxgl.Popup({
      offset: 25
    }) // add popups
    .setHTML("<a class=\"A_MapMarkerTitle\" href=\"/crafts/palehskaya-min.html\">".concat(palehPoint.properties.title, "</a>"))).addTo(map);
  }
} catch (err) {
  _iterator13.e(err);
} finally {
  _iterator13.f();
}
/******/ })()
;