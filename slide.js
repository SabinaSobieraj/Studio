/* Sekcja Slider z uzyciem JQuery */
// 'use strict';

// $(function() {

//     var width = 300; /* wielkosc slajdow */
//     var seppedOfOurAnimation = 3000; /* predkosc naszej animacji slajdow, predkosc przesuwania */
//     var pause = 0;/* przerwa pomiedzy przesunieciami */
//     var firstSlide = 1;

//     //Referencje do elementow slider z czesci HTML zawierajacy slajdy
//     var $slider = $('#slider');/* dzieki temu przeszukujey HTML raz i tu mamy info o slajdach */
//     var $slideContainer = $('.slides', $slider);/* kontener zawierajacy slajdy */
//     var $slides = $('.slide', $slider);/* lista wszystkich slajdow z kontenera */

//     var interval;/* interwal start stop slider na klikniecie mysza */

//     function startSlider() { /* start sto interwalu slidera */
//         interval = setInterval(function() {
//             /* tu nastepuje animacja przesowania */
//             $slideContainer.animate({'margin-left': '-='+width}, seppedOfOurAnimation, function() {
//                 if (++firstSlide === $slides.length) {/* tu nastepuje sprawdzenie(funkcja) ktora mowi nam na ktorym slajdzie jestesmy i reset */
//                     firstSlide = 1;
//                     $slideContainer.css('margin-left', 0);
//                 }
//             });
//         }, pause);
//     }
//     function pauseSlider() {
//         clearInterval(interval);/* czysci interwal */
//     }

//     $slideContainer /* zatrzymanie slidera jak na niego klikniemy i jak zjedziemy myszka pojedzie dalej */
//         .on('mouseenter', pauseSlider)
//         .on('mouseleave', startSlider);

//     startSlider(); /* wywolanie funkcji przesuwania slidera */


// });
  

