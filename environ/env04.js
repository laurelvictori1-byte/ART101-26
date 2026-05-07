let environmentTitle = "Classroom";

let environmentElements = ["tables", "chairs", "text box", "len", "doors"];

let mainEntity = {
    name: "Hatsuni Miki",
    character: "Childhood Friend",
    mood: ["happy", "upset"],
    isFriendInterest: true,
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
    new Audio(musicType).play();
}

function stopAudio (otherMusic) {
    new Audio(otherMusic).pause();
}

function chooseAudio () {
    let userChoice = prompt("What do you want me to sing? " +
    "Something dramatic, something upbeat, something jazzy, something seasonal, or something electronic?"
    );

    if (userChoice == "dramatic") {
        stopAudio ("butterfly.mp3", "dreameater.mp3", "halloween.mp3", "remote.mp3");
        playAudio ("blackvow.mp3");
    }
    else if (userChoice == "upbeat") {
        playAudio ("butterfly.mp3");
    }
    else if (userChoice == "jazzy") {
        playAudio ("dreameater.mp3");
    }
    else if (userChoice == "seasonal") {
        playAudio ("halloween.mp3");
    }
    else if (userChoice == "electronic") {
        playAudio ("remote.mp3");
    }
}       

$("#dialogue-1").click(function () {
    console.log("mood count" + mainEntity.moodCount);
    console.log("dia-1 is clicked");
    fadeText("Yoroshiku! My name is " + mainEntity.name + ". I'm feeling " + mainEntity.mood[mainEntity.moodCount] + ". "); 
    mainEntity.moodCount = mainEntity.moodCount + 1;
    if (mainEntity.moodCount==2) { 
        mainEntity.moodCount=0; 
    }
});

$("#dialogue-2").click(function () {
    console.log("food count" + mainEntity.favoriteFoodsCount);
    console.log("dia-2 is clicked");
    fadeText("That's not very nice! I'm " + mainEntity.name + ". My favorite food is " 
    + mainEntity.favoriteFoods[mainEntity.favoriteFoodsCount] + ". ");
    mainEntity.favoriteFoodsCount = mainEntity.favoriteFoodsCount + 1;
    if (mainEntity.favoriteFoodsCount==4) { 
        mainEntity.favoriteFoodsCount=0; 
    }
});

$("#len").click(function() {
    console.log("len is clicked");
    chooseAudio ();
});