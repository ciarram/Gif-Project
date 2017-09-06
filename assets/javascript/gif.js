$(document).ready(function(){
//pulls the GIF from the web
var topic = ["I Love Lucy", "Parks and Recreation", "Unbreakable Kimmy Schmidt", "The IT Crowd", "Sherlock"];
console.log(topic);


//function renderButtons() {
    //console.log("the function works");
    $("#buttons").empty();
    for(var index = 0; index < topic.length; index++) {
        var topicButton = $("<button>").addClass("show").attr("data-name", topic[index]).text(topic[index]);
        console.log(topicButton, 'this is a button');
        $("#buttons").append(topicButton);
        
    }

//}
//displaying the 10 GIFs with a button
function displayGifs(){
var shows = $(this).attr("data-name");
var key = "dc6zaTOxFJmzC";
var getUrl = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + key + "&limit=10";
    console.log("I can pick up a string");
//$(topicButton).on('click', function(){
    $.ajax({
    url: getUrl,
    method: 'GET',
    }).done(function(response){
        console.log(response);
        for(var i=0; i < response.data.length; i++){
        var rating = response.data[i].rating;
            console.log('rating',rating);
        var printedRating = $('<p>').text("Rating: " + rating);
            console.log('printedRating',printedRating);
        var image = response.data[i].images.original_still.url;
        console.log(image);
        var newImage = $('<img>');
        newImage.attr("src", image);
        newImage.attr("data-state", 'still');
        newImage.attr("data-animate", response.data[i].images.original.url);
        console.log(newImage);
        $("#gifs").append(printedRating);
        $("#gifs").append(newImage);
    }   
    })
//})
}

//Adding a new button when entering a name and clicking the submit button in the form section

$("#search-button").on('click', function(event){
    event.preventDefault();
    var newShow = $("#input").val();
    newShow.push(topic);
        console.log('newShow',newShow);

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