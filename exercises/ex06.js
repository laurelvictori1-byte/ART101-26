//declaring variables
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount = 0;
let mood = "neutral";

//reusable functions
//purple = function name
//brown = parameter name

//if  current color (as determined by  colorCount) matches colorToMatch, append associated image to body
function makeImage(colorToMatch) {
    //what the function actually does
        if (colors[colorCount]==colorToMatch) {
        $("body").append
        ("<img width=100 src='"+colorToMatch+".jpg'>");
    }
}

//changes background color to colorToPaint
function paintPage(colorToPaint) {
        $("body").css("background-color", colorToPaint);
}

//what happens when the orchid image is clicked (uses paintPage function)
$("#Orchid").click(function() {
    console.log("orchid is clicked");
    paintPage( "Orchid");
});

$("#Plum").click(function() {
    console.log("plum is clicked");
    paintPage( "Plum");
});

$("#Coral").click(function() {
    console.log("coral is clicked");
    paintPage( "Coral");
});

//what happens when the main button is clicked
$("#needy-button").click(function() {

//increase count with each button press
count = count + 1;

console.log("color count" +colorCount);

    //displays messages regarding number of clicks and current color
    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );

    //changes background to colorCount color
    paintPage(colors[colorCount]);

//displays text after button depending on colorCount
if (colors[colorCount] == "HotPink") {
        $("#needy-button").after
        (" notPink ");
    }
    else if (colors[colorCount] == 
        "Orchid") {
            $("#needy-button").after
            (" hey Orchid ");
    }
    else {
        $("#needy-button").after
        (" all other colors ");
    }

    //assigns moods to button count
    if (count < 5) { mood=" fresh and happy "; }
    else if (count >= 5 && count < 10) { mood=" keep pushing "; }
    else { mood=" so tired "}

    //for colorToMatch parameter above
    makeImage("Orchid");
    makeImage("Plum");
    makeImage("Coral");

    //increases colorCount every time button is pressed
    colorCount = colorCount+1;

    //resets colorCount if it reaches 4 (max colors is 3)
    if (colorCount==4) { 
        colorCount=0; 
        console.log("it happened...");
    }

    console.log(mood);

});