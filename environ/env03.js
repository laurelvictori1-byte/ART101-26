let environmentTitle = "Classroom";

let environmentElements = ["clock", "tables", "chairs", "text box", "len", "doors"];

let mainEntity = {
    name: "Miku",
    character: "Childhood Friend",
    mood: "Patient",
    isFriendInterest: true,
    favoriteFoods: ["melon pan", "taiyaki", "shaved ice", "leeks"]
};

function fadeText(hidden) {
$("#text-1").css("visibility", hidden);
};

$("#dialogue-1").click(function () {
    console.log("dia-1 is clicked");
    fadeText;
});

$("#dialogue-2").click(function () {
    console.log("dia-2 is clicked");
});