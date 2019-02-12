$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var beverage = $("#beverage").val();
    var born = $("#born").val();
    var foodInput = $("input#food").val();
    var musicInput= $("input#music").val();
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();

    $(".person1").text(person1Input);
    $(".flavor").text(flavor);
    $(".beverage").text(beverage);
    $(".born").text(born);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);
    $(".animal").text(animalInput);

    $("#story").show();

    event.preventDefault();
  });
});
