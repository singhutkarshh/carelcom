console.log("Welcome to Carelcom-Music Player");
play = document.getElementById("play");
pause = document.getElementById("pause");
previous = document.getElementById("previous");
next = document.getElementById("next");
title = document.getElementById("title");
audio = document.getElementById("audio");
image = document.getElementById("image");
progress = document.getElementById('progressbar');
progressContainer = document.getElementById('progress-container');

const songs =['Pirates_of_Carribean.mp3','Harry_Potter.mp3','Avengers.mp3','Cold_Water.mp3','Senorita.mp3','Dil_Meri_Na_Sune.mp3',
'Besabriyaan.mp3','Ek_Ladki_Ko_Dekha.mp3','Sab_Tera.mp3','Chal_Wahan_Jaate_Hain.mp3'];
let index=0;

function loadSong(song){
	document.getElementById("title").innerHTML = `${song}`;
	audio.src =`./audio/${song}`;
}
function playSong(){ 
	image.classList.remove("imgRotateNot");
	image.classList.add("imgRotate");
	loadSong(songs[index]);
	let flag = audio.classList.contains("pause");
	if(flag){
		audio.play();
		audio.classList.remove("pause");
	    audio.classList.add("play");
	}
	else{
		audio.pause();
	    audio.classList.remove("play");
		audio.classList.add("pause");
	}
}

function pauseSong(){
	image.classList.remove("imgRotate");
	image.classList.add("imgRotateNot");
	loadSong(songs[index]);
	let flag = audio.classList.contains("play");
	if(flag){
		audio.pause();
		audio.classList.remove("play");
		audio.classList.add("pause");
	}
	else{
		audio.play();
		audio.classList.remove("pause");
	    audio.classList.add("play");
	}
	document.getElementById("title").innerHTML = `Tap to Play!`;
	
}

function nextSong(){
	pauseSong();
	if(index==songs.length-1){
		index=0;
	}
	else{
		index++;
	}
	playSong();

}

function prevSong(){
	pauseSong();
	if(index==0){
		index=songs.length-1;
	}
	else{
		index--;
	}
	playSong();

}

function pause(){
	pauseSong();
	index=0;
}

function setProgress(e){
	let width = this.clientWidth;
	let clickX = e.offsetX;
	let duration = audio.duration;

	audio.currentTime = (clickX/width)*duration;
}
function displayProgress(e){
	const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
 	progress.style.width=`${progressPercent}%`;
}

play.addEventListener('click',function(){
	playSong();
});
pause.addEventListener('click',function(){
	image.classList.remove("imgRotate");
	image.classList.add("imgRotateNot");
	loadSong(songs[index]);
	let flag1 = audio.classList.contains("play");
	if(flag1){
		audio.pause();
		audio.classList.remove("play");
		audio.classList.add("pause");
	}
	document.getElementById("title").innerHTML = `Pause! Tap to Play`;
});
next.addEventListener('click',function(){
	nextSong();
});
previous.addEventListener('click',function(){
	prevSong();
});
progressContainer.addEventListener('click',setProgress);
audio.addEventListener('timeupdate', displayProgress);
audio.addEventListener('ended',nextSong);