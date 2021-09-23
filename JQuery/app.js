$(document).ready(function () {
  //1

  $("<button>Say Hello</button>").prependTo("body");

  $("button").click(function () {
    alert("Nice to See You!");
  });

  //2

  $(".secondButton").click(function () {
    alert($(".inputText").val());
  });

  //3

  $(".hover").mouseover(function () {
    $(this).css("background-color", "lightGrey");
  });
  $(".hover").mouseout(function () {
    $(this).css("background-color", "transparent");
  });

  //4

  $(".colorful").click(function () {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    let randomColor = $(this).css(
      "color",
      "rgb(" + colorR + "," + colorG + "," + colorB + ")"
    );
  });

  //5

  $(".thirdButton").click(function () {
    $("<span>It's Becca</span>").appendTo(".forName");
  });

  //6
  let friends = [
    "jim",
    "pam",
    "dwight",
    "michael",
    "creed",
    "angela",
    "stanley",
    "kelly",
    "ryan",
    "oscar",
  ];

  $(".fourthButton").click(function () {
    for (let i = 0; i < friends.length; i++) {
      $("<li>" + friends[i] + "</li>").appendTo("ul");
    }
  });
});
