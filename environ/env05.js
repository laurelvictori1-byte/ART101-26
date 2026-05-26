let HatsuneMiku = {
    name: "Hatsuni Miki",
    mood: ["happy", "upset"],
    favoriteFoods: ["melon pan", "taiyaki", "shaved ice", "leeks"],
    moodCount: 0,
    favoriteFoodsCount: 0
};

let songList = ["blackvow.mp3", "butterfly.mp3", "dreameater.mp3", "halloween.mp3", "remote.mp3"];

function fadeText(newDialogue) {
    console.log("fade is clicked");
    $("#text-1").fadeOut(1000, function() {
        $("#text-1").html("<p>" + newDialogue + "</p>").fadeIn(1000);
    });
}

function playAudio (musicType) {
    let song = new Audio(musicType);
    song.play();
    return song
}

function stopAudio (songToPause) {
    songToPause.pause();
}

let curSong = null;
let songPlaying = false;

function chooseAudio () {
    let userChoice = prompt("What do you want me to sing? " +
    "Something dramatic, something upbeat, something jazzy, something seasonal, or something electronic?"
    );

    if (userChoice.toLowerCase() == "dramatic" || userChoice.toLowerCase() == "something dramatic") {
        if (!songPlaying){
            curSong = playAudio ("blackvow.mp3");
            songPlaying = true;
        } else {
            stopAudio (curSong);
            curSong = playAudio ("blackvow.mp3");
        }
    }
    else if (userChoice.toLocaleLowerCase() == "upbeat" || userChoice.toLowerCase() == "something upbeat") {
        if (!songPlaying){
            curSong = playAudio ("butterfly.mp3");
            songPlaying = true;
        } else {
            stopAudio (curSong);
            curSong = playAudio ("butterfly.mp3");
        }
    }
    else if (userChoice.toLocaleLowerCase() == "jazzy" || userChoice.toLowerCase() == "something jazzy") {
        if (!songPlaying){
            curSong = playAudio ("dreameater.mp3");
            songPlaying = true;
        } else {
            stopAudio (curSong);
            curSong = playAudio ("dreameater.mp3");
        }
    }
    else if (userChoice.toLocaleLowerCase() == "seasonal" || userChoice.toLowerCase() == "something seasonal") {
        if (!songPlaying){
            curSong = playAudio ("halloween.mp3");
            songPlaying = true;
        } else {
            stopAudio (curSong);
            curSong = playAudio ("halloween.mp3");
        }
    }
    else if (userChoice.toLocaleLowerCase() == "electronic" || userChoice.toLowerCase() == "something electronic") {
        if (!songPlaying){
            curSong = playAudio ("remote.mp3");
            songPlaying = true;
        } else {
            stopAudio (curSong);
            curSong = playAudio ("remote.mp3");
        }
    }
}       

$("#dialogue-1").click(function () {
    console.log("mood count" + HatsuneMiku.moodCount);
    console.log("dia-1 is clicked");
    fadeText("Yoroshiku! My name is " + HatsuneMiku.name + ". I'm feeling " + HatsuneMiku.mood[HatsuneMiku.moodCount] + ". "); 
    HatsuneMiku.moodCount = HatsuneMiku.moodCount + 1;
    if (HatsuneMiku.moodCount==2) { 
        HatsuneMiku.moodCount=0; 
    }
});

$("#dialogue-2").click(function () {
    console.log("food count" + HatsuneMiku.favoriteFoodsCount);
    console.log("dia-2 is clicked");
    fadeText("That's not very nice! I'm " + HatsuneMiku.name + ". My favorite food is " 
    + HatsuneMiku.favoriteFoods[HatsuneMiku.favoriteFoodsCount] + ". ");
    HatsuneMiku.favoriteFoodsCount = HatsuneMiku.favoriteFoodsCount + 1;
    if (HatsuneMiku.favoriteFoodsCount==4) { 
        HatsuneMiku.favoriteFoodsCount=0; 
    }
});

$("#len").click(function() {
    console.log("len is clicked");
    chooseAudio ();
});

$("#hoverclocktext").hover(
  function () {
    $("#time").stop(true, true).slideDown(300);
},
  function () {
    $("#time").stop(true, true).slideUp(300);
});

$("#hoverlentext").hover(
  function () {
    $("#clickme").stop(true, true).slideDown(300);
},
  function () {
    $("#clickme").stop(true, true).slideUp(300);
});