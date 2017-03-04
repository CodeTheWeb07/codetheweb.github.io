var feedmod = document.getElementById('outterFrame');
document.getElementById('feedbackbtn').onclick = function() {
    document.getElementById('outterFrame').style.display = "block";
    document.title = "Code The Web | Feedback";
};
document.getElementById('closebtn').onclick = function() {
    document.getElementById('outterFrame').style.display = "none";
    if (feedmod.style.display === "none") {
        document.title = "Code The Web | Home";
    } else {
        document.title = "Code The Web | Feedback";
    }
}
function hide() {
    var btn = document.getElementById("introbtn");
    var intro = document.getElementById("intro");
    var main = document.getElementById("bod");
    intro.style.display = "none";
    main.style.display = "block";
    if (main.style.display === "block") {
    document.title = "Code The Web | Home";
    } else {
        document.title = "Code The Web";
    }
};
$(window).scroll(function() {
if ($(this).scrollTop() > 400){  
    $('#pgHead').addClass("scrolledpgHead");
    $('#pgHead').addClass("blue");
  }
  else{
    $('#pgHead').removeClass("scrolledpgHead");
    $('#pgHead').removeClass("blue");
  }
});
$(window).scroll(function(){
if ($(this).scrollTop() > 60){
    $('.TempDesign').addClass("display");
  }
});
$(window).scroll(function(){
if ($(this).scrollTop() > 1500){
    $('.Feedback').addClass("display");
  }
});
$(window).scroll(function(){
if ($(this).scrollTop() > 900){
    $('.Queries').addClass("display");
  }
});
$(window).scroll(function() {
if ($(this).scrollTop() > 1000){  
    $('#pgHead').addClass("teal");
    $('#pgHead').removeClass("blue");
  }
  else{
    $('#pgHead').removeClass("teal");
  }
});
    $(window).scroll(function() {
if ($(this).scrollTop() > 1600){  
    $('#pgHead').addClass("yellow");
    $('#pgHead').removeClass("blue");
    $('#pgHead').removeClass("teal");
  }
  else{
    $('#pgHead').removeClass("yellow");
  }
});
window.onclick = function(event) {
    if (event.target === feedmod) {
        feedmod.style.display = "none";
    }
}
function showdiv(){
    var list = document.getElementById('buttonslist');
    list.style.display = "block";
}
$(document).ready(function(){
    $("#showdiv1").click(function() {
        $("#buttonslist").slideToggle("slow");
    });
});