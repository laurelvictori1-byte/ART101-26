// add creature to the garden
$("#crAdd").click(function () {

    let crName=$("#crName").val();
    console.log(crName);
    $("#creature-list").append("<div>"+crName+"</div>");

    $("#crName").val("");

});