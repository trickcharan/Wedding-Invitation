(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 * token 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
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
var vid = document.getElementById("my_audio");
const PLAY_STATE = {
    NOT_PLAYING:0,
    PLAYING:1,
    STOPPED:2,
    STARTED:3,
    PAUSED:4
  }
 var play_state = PLAY_STATE.NOT_PLAYING
//  $( document ).ready(function() {
//     console.log( "ready!" );
//     setTimeout(() => {
//         $('#iconId').click()
//      }, 5000);
// });
// $(document).on('click', function(){
//     vid = document.getElementById("my_audio");
//     console.log("Play state at click "+play_state)
//     if(play_state == PLAY_STATE.NOT_PLAYING){
//         vid.play();
//         play_state = STARTED
//     }
// });
function changeIcon(iconId){
    //fa-solid fa-play 
    console.log("Play state" + play_state)
    console.log("Vid State" + vid)
    if(play_state == PLAY_STATE.NOT_PLAYING || play_state == PLAY_STATE.STARTED || play_state == PLAY_STATE.PAUSED){
        document.getElementById('iconId').className = "fa-solid fa-circle-pause fab-container";
        play_state = PLAY_STATE.PLAYING
        vid.play();
    } else if(play_state == PLAY_STATE.PLAYING){ // playing
        document.getElementById('iconId').className = "fa-solid fa-play fab-container";
        play_state = PLAY_STATE.PAUSED
        vid.pause();
    }
}
// Set the date we're counting down to
var countDownDate = new Date("Sep 07, 2022 09:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = '<div>' + addLeadingZeros(days, 2) + '<span>Days</span></div>' +
    '<div>' + addLeadingZeros(hours, 2) + '<span>Hours</span></div>' +
    '<div>' + addLeadingZeros(minutes, 2) + '<span>Mins</span></div>' +
    '<div>' + addLeadingZeros(seconds, 2) + '<span>Secs   </span></div>';
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "<h2>Bless the married couple for happy life!</h2>";
    }
}, 1000);

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
  }

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

