let count=0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;

let pencil={
    color: "Yellow",
    isSharp: false,
};

$("#needy-button").click(function(){

count=count+1;

colorCount=count-1;

    $("#needy-button").html("what? wanted an award? you've clicked " + count + " times and your favorite color today is " 
        + colors[count]);

    $("#needy-button").css( "background-color", colors[colorCount]);

    $("html").css( "background-color", colors[colorCount+1]);

    console.log(pencil.color);

});