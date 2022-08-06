const gamePattern = []
const buttonColours = ["red","blue","green","yellow"]
const userClickedPattern = []
var gameStarted = false
var level = 0

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id")
    userClickedPattern.push(userChosenColour)
    
    playSound(userChosenColour)

    animatePress(userChosenColour)

    nextSequence()

    checkAnswer(userClickedPattern.length - 1)

})

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    var jqChoose = $("#" + randomChosenColour)
    $(jqChoose).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
    level++
    $("#level-title").text("Level " + level)
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3")
    audio.play()
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    },100)
    
}

$(document).keypress(function(){
    
    if(!gameStarted) {
        nextSequence()
        gameStarted = true
    }
})


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        $("#level-title").text("Level " + level)

        if (userClickedPattern.length === gamePattern.length) {

            setTimeout(function() {
                nextSequence()
            },2000)
        }

    } else {
        $("#level-title").text("Kaybettiniz! Lütfen Sayfayi Yenileyiniz")
    }
}











