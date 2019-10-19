$(document).ready(function () {

var lightmage = $("#lmage")
var darkmage = $("#dmage")

var Textbox =$(".nes-input")
var value;
var locallight;
var localdark;
lightmage.hide()


function typeCheck(x){

    if(x === "light"){
        console.log("Weeee");
        $("#header").css("color","black");
        $("#header").css("background-color","#fff");
        $('body,html').css("background-color","#fff");
        $('body,html').css("color","black");

        localStorage.clear();
        var locallight = localStorage.setItem("setting", value)

        lightmage.show()
        darkmage.hide();
        Textbox.removeClass("is-dark")
        console.log(value);

        value=locallight;

       

    }else if(x ==="dark") {
        $("#header").css("color","#fff");
        $("#header").css("background-color","#212529");
        $('body,html').css("background-color","#212529");
        $('body,html').css("color","#fff");

        localStorage.clear();
        var localdark = localStorage.setItem("setting", value)
       
        lightmage.hide()
        darkmage.show();
        Textbox.addClass("is-dark");
        console.log(value);

        value=localdark;


    }

    
}


$('#LD').change(function(){ 

     value = $(this).val();
    console.log(value);

    typeCheck(value);
    
    
      
          
        
    
})

function reload(){

var value = localStorage.getItem("setting")

typeCheck(value);


}

reload();


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }


});