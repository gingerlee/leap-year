var triangleCheck = function(result) {

  var sortedResult = result.sort();

  if (sortedResult[0] + sortedResult[1] =< sortedResult[2]) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());

    var result = [];
    result.push(sideOne);
    result.push(sideTwo);
    result.push(sideThree);


    triangleCheck(result);






    /* $(".not").text("");

    // $(".year").text(year);
    //if (!result) {
    //  $(".not").text("not");
    //}

    $("#result").show(); */
    event.preventDefault();

  });

});
