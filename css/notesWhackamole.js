$("#start").click(function() {
    // once clicked cannot click a second time
    $(this).disable();
    pickRandomMole();
    runAnimation();
});



function gameOver(){
    $("#start").enable();
}






// this will narrow the selection down
$(".hole").om("click", ".active"function() {

});





// local storage will allow you to save data. will set any given item in the
// users browser and is unique to EACH persons Browser 
localStorage.getItem("highscore");
// will set the highscore and save that value
localStorage.setItem("highscore", 27);
// will originally start off at zero because the game hasn't 
// started yet
