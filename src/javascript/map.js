import '../index.css'

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

mapboxgl.accessToken =
  'pk.eyJ1IjoiaGVsZW4wOWRlcyIsImEiOiJjbDkxYjNnZnIwNm9nM3ZsaTZhNWgxZ2dhIn0.1624lJuGETwT-3NLXW4H6w'
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/helen09des/cliyv5o1i00ap01qqgruo599u', // style URL
  center: [40.933352, 55.751209], // starting position [lng, lat]
  zoom: 6.14 // starting zoom
})

const uelen = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Уэленская резьба по кости' },
      geometry: {
        coordinates: [-169.816428759645, 66.16106671086933],
        type: 'Point'
      }
    }
  ]
}

for (const uelenPoint of uelen.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker uelen'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(uelenPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/uelen-bone-carving.html">${uelenPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const abash = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Абашевская игрушка' },
      geometry: {
        coordinates: [43.349051565654634, 53.9315184157615],
        type: 'Point'
      }
    }
  ]
}

for (const abashPoint of abash.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker abash'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(abashPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/abashevskaya-toy.html">${abashPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const vologlace = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Вологодское кружево' },
      geometry: {
        coordinates: [39.89399369615825, 59.220856507096585],
        type: 'Point'
      }
    }
  ]
}

for (const vologlacePoint of vologlace.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker vologlace'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(vologlacePoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/vologodskoe-lace.html">${vologlacePoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const gorod = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Городецкая роспись' },
      geometry: {
        coordinates: [43.474924773467876, 56.64895735383985],
        type: 'Point'
      }
    }
  ]
}

for (const gorodPoint of gorod.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker gorod'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(gorodPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/gorodets-painting.html">${gorodPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const rakul = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Ракульская роспись' },
      geometry: {
        coordinates: [43.11123241681102, 60.89064608840255],
        type: 'Point'
      }
    }
  ]
}

for (const rakulPoint of rakul.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker rakul'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(rakulPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/rakul-painting.html">${rakulPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const skop = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Скопинская керамика' },
      geometry: {
        coordinates: [39.549319310084684, 53.82418255982557],
        type: 'Point'
      }
    }
  ]
}

for (const skopPoint of skop.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker skop'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(skopPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/skopinsk-ceramic.html">${skopPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const tver = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Тверская вышивка' },
      geometry: {
        coordinates: [35.921080552674255, 56.85958809952663],
        type: 'Point'
      }
    }
  ]
}

for (const tverPoint of tver.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker tver'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(tverPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/tverskaya-lace.html">${tverPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const tyla = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Тульская сталь' },
      geometry: {
        coordinates: [37.61742951375976, 54.194281113432424],
        type: 'Point'
      }
    }
  ]
}

for (const tylaPoint of tyla.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker tyla'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(tylaPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/tulskaya-stal.html">${tylaPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const dpi = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Музей декоративного искусства' },
      geometry: {
        coordinates: [37.609790071625184, 55.774653500176896],
        type: 'Point'
      }
    }
  ]
}

for (const dpiPoint of dpi.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker dpi'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(dpiPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="#">${dpiPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const veliko = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Великоустюгская роспись' },
      geometry: {
        coordinates: [46.30130908411516, 60.76241019458968],
        type: 'Point'
      }
    }
  ]
}

for (const velikoPoint of veliko.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker veliko'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(velikoPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/velikoustugskaya-rospis.html">${velikoPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const vologhoh = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Вологодская хохлома' },
      geometry: {
        coordinates: [39.87540159910813, 59.2116632564113],
        type: 'Point'
      }
    }
  ]
}

for (const vologhohPoint of vologhoh.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker vologhoh'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(vologhohPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/vologodskaya-hohloma.html">${vologhohPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const dim = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Дымковская игрушка' },
      geometry: {
        coordinates: [49.70170252117998, 58.61558976475635],
        type: 'Point'
      }
    }
  ]
}

for (const dimPoint of dim.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker dim'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(dimPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/dimskaya-toy.html">${dimPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}

//
//

const paleh = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { title: 'Палехская миниатюра' },
      geometry: {
        coordinates: [41.85408591572286, 56.80376352371647],
        type: 'Point'
      }
    }
  ]
}

for (const palehPoint of paleh.features) {
  // create a HTML element for each feature
  const el = document.createElement('div')
  el.className = 'Q_MapMarker paleh'

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(palehPoint.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<a class="A_MapMarkerTitle" href="/crafts/palehskaya-min.html">${palehPoint.properties.title}</a>`
        )
    )
    .addTo(map)
}
