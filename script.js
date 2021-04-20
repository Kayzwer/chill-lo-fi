var song1 = document.getElementById('lofi1');
var icon1 = document.getElementById('icon1');
var song2 = document.getElementById('lofi2');
var icon2 = document.getElementById('icon2');
var song3 = document.getElementById('lofi3');
var icon3 = document.getElementById('icon3');
var song4 = document.getElementById('lofi4');
var icon4 = document.getElementById('icon4');

icon1.onclick = function() {
    if(song1.paused){

        song1.play();
        icon1.src = 'media/pause.png';

        song2.pause();
        icon2.src = 'media/play.png';
        song3.pause();
        icon3.src = 'media/play.png';
        song4.pause();
        icon4.src = 'media/play.png';

    } else {
        song1.pause();
        icon1.src = 'media/play.png';
    }
}

icon2.onclick = function() {
    if(song2.paused){

        song2.play();
        icon2.src = 'media/pause.png';

        song1.pause();
        icon1.src = 'media/play.png';
        song3.pause();
        icon3.src = 'media/play.png';
        song4.pause();
        icon4.src = 'media/play.png';

    } else {
        song2.pause();
        icon2.src = 'media/play.png';
    }
}

icon3.onclick = function() {
    if(song3.paused){

        song3.play();
        icon3.src = 'media/pause.png';

        song1.pause();
        icon1.src = 'media/play.png';
        song2.pause();
        icon2.src = 'media/play.png';
        song4.pause();
        icon4.src = 'media/play.png';

    } else {
        song3.pause();
        icon3.src = 'media/play.png';
    }
}

icon4.onclick = function() {
    if(song4.paused){

        song4.play();
        icon4.src = 'media/pause.png';

        song1.pause();
        icon1.src = 'media/play.png';
        song2.pause();
        icon2.src = 'media/play.png';
        song3.pause();
        icon3.src = 'media/play.png';

    } else {
        song4.pause();
        icon4.src = 'media/play.png';
    }
}