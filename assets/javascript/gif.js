$(document).ready(function(){
//pulls the GIF from the web
var topic = [];
var key = "dc6zaTOxFJmzC";
var getUrl = "https://api.giphy.com/v1/gifs/search?q=i+love+lucy&api_key=" + key + "&limit=10";

$.ajax({
    url: getUrl,
    method: 'GET',
}).done(function(response){
    console.log(response);

    //grabs the 10 images
    for(var index=0; index<response.data.length; index++){
    var image = response.data[index].images.original_still.url;
    console.log(image);
    var newImage = $('<img>');
    newImage.attr("src", image);
    newImage.attr("data-state", 'still');
    newImage.attr("data-animate", response.data[index].images.original.url);
    console.log(newImage);
    $("#gifs").html(newImage);
    }
})
//click on the GIF to animate it
//$("img").on('click',function(){
    //let $this = $(this);
    //currentState = $this.data('state');
    //console.log('currentState', currentState);
    //if(){

    //}else{

    //} 

//});


})