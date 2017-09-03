$(document).ready(function(){

var key = "dc6zaTOxFJmzC";
var getUrl = "https://api.giphy.com/v1/gifs/search?q=dog&api_key=" + key + "&limit=1";

$.ajax({
    url: getUrl,
    method: 'GET',
}).done(function(response){
    console.log(response);
    var image = response.data[0].images.original.url;
    console.log(image);
    //var imageUrl = response.data;
    //console.log(imageUrl);
    var newImage = $('<img>');
    newImage.attr("src", image);
    console.log(newImage);
    $("#gifs").html(newImage);
})

})