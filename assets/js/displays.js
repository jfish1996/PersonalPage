
var boxHasScaled = false;

var boxContent = $(".boxContent");
boxContent.hide()

$(".box").on("click", function () {
    var box = $(this);

    if (boxHasScaled === false) {
        boxContent.show();

        box.width(400);
        box.height(400);


        boxHasScaled = true;

    } else if (boxHasScaled === true) {
        boxContent.hide();
        boxHasScaled = false;
        box.width(50);
        box.height(50);
    }



})
