function turnRight() {
    turnEllipse(180);
  }
  
  function turnLeft() {
    turnEllipse(-180);
  }
  
  function turnEllipse(degrees) {
    var angle = $("#superellips").data("angle");
    if (!angle)
      angle = 0;
    angle = +angle + degrees;
    $("#superellips")
      .data("angle", angle)
      .css({ transform: "rotate(" + angle + "deg)", transition: "1s" });
  }