$(document).ready(function(){
//pulls the GIF from the web
var key = "dc6zaTOxFJmzC";
var getUrl = "https://api.giphy.com/v1/gifs/search?q=dog&api_key=" + key + "&limit=1";

$.ajax({
    url: getUrl,
    method: 'GET',
}).done(function(response){
    console.log(response);
    var image = response.data[0].images.original_still.url;
    console.log(image);
    var newImage = $('<img>');
    newImage.attr("src", image);
    newImage.attr("data-state", 'still');
    newImage.attr("data-animate", response.data[0].images.original.url);
    console.log(newImage);
    $("#gifs").html(newImage);
})
//click on the GIF to animate it
$("img").on('click',function(){
    

});


})