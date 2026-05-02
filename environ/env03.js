let environmentTitle = "Classroom";

let environmentElements = ["clock", "tables", "chairs", "text box", "len", "doors"];

let mainEntity = {
    name: "Hatsuni Miki",
    character: "Childhood Friend",
    mood: ["happy", "upset"],
    isFriendInterest: true,
    favoriteFoods: ["melon pan", "taiyaki", "shaved ice", "leeks"],
    moodCount: 0,
    favoriteFoodsCount: 0
};

function fadeText(newDialogue) {
    console.log("fade is clicked");
    $("#text-1").fadeOut(1000, function() {
        $("#text-1").html("<p>" + newDialogue + "</p>").fadeIn(1000);
    });
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