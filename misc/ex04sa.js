let count=1;
let colors= ["Orchid", "Coral", "HotPink", "Plum", "SlateBlue"];
let colorButton=1;
let colorBackground=0;
let pencil={
    color: "Yellow",
    isSharp: false,
};

$("#needy-button").click(function(){
    
    if (colorButton >= colors.length){ colorButton = 0; }
    if (colorBackground >= colors.length){ colorBackground = 0; }

    $("#needy-button").html("what? wanted an award? you've clicked " + count + " times and your favorite color today is " 
    + colors[colorButton]);

    $("#needy-button").css( "background-color", colors[colorButton]);
    console.log(colorButton, colorBackground);
    $("html").css( "background-color", colors[colorBackground]);

    console.log(pencil.color);

    count += 1;
    colorButton += 1;
    colorBackground += 1;
    
});

// let count=0;
// let colors= ["Orchid", "Coral", "HotPink", "Plum"];
// let colorCount;

// let pencil={
//     color: "Yellow",
//     isSharp: false,
// };

// $("#needy-button").click(function(){

// count=count+1;

// colorCount=count-1;

//     $("#needy-button").html("what? wanted an award? you've clicked " + count + " times and your favorite color today is " 
//         + colors[count]);

//     $("#needy-button").css( "background-color", colors[colorCount]);

//     $("html").css( "background-color", colors[colorCount+1]);

//     console.log(pencil.color);

// });