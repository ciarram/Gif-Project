$(document).ready(function(){
//pulls the GIF from the web
var topic = ["I Love Lucy", "Parks and Recreation", "Unbreakable Kimmy Schmidt", "The IT Crowd", "Sherlock"];
console.log(topic);

var key = "dc6zaTOxFJmzC";
var getUrl = "https://api.giphy.com/v1/gifs/search?q=parks+and+recreation&api_key=" + key + "&limit=10";

function renderButtons(){
    //$("#buttons").empty();
    for(var index = 0; index < topic.length; index++){
        var topicButton = $("<button>");
        console.log(topicButton);
        topicButton.addClass("show");
        topicButton.attr("data-name", topic[index])
        //console.log(topicButton);
        topicButton.text(topic[index]);
        topicButton.push("#buttons");
        console.log("this works")
        $("#buttons").append(topicButton);
        $("#buttons").html(topicButton);
    }

}

$.ajax({
    url: getUrl,
    method: 'GET',
}).done(function(response){
    console.log(response);
    
    var image = response.data[0].images.original_still.url;
    console.log(image);
    //var newGif = $("<div class='new-gifs'>");
    var newImage = $('<img>');
    newImage.attr("src", image);
    newImage.attr("data-state", 'still');
    newImage.attr("data-animate", response.data[0].images.original_still.url);
    console.log(newImage);
    //newGif.prepend(newImage);
    //newGif.prepend(topic);
    //console.log(newGif);
    //$("#gifs").html(newImage);
    
})
//displaying the 10 GIFs with a button


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