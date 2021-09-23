window.addEventListener("DOMContentLoaded", function () {
  //1

  let button = document.createElement("button");
  let buttonTxt = document.createTextNode("Say Hello");
  button.appendChild(buttonTxt);
  document.body.prepend(button);

  button.addEventListener("click", function () {
    alert("Nice to see you!");
  });

  //2

  let secondButton = document.querySelector(".secondButton");

  secondButton.addEventListener("click", function () {
    let alertText = document.querySelector(".inputText").value;
    alert(alertText);
  });

  //3

  let hoverDiv = document.querySelector(".hover");

  hoverDiv.addEventListener("mouseover", function () {
    hoverDiv.style.background = "lightGrey";
  });
  hoverDiv.addEventListener("mouseout", function () {
    hoverDiv.style.background = "none";
  });

  //4

  let colorfulText = document.querySelector(".colorful");

  colorfulText.addEventListener("click", function () {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    colorfulText.style.color =
      "rgb(" + colorR + "," + colorG + "," + colorB + ")";
  });

  //5

  let thirdButton = document.querySelector(".thirdButton");
  let nameDiv = document.querySelector(".forName");

  thirdButton.addEventListener("click", function () {
    let span = document.createElement("span");
    let name = document.createTextNode("It's Becca");
    span.appendChild(name);
    nameDiv.appendChild(span);
  });

  //6

  let fourthButton = document.querySelector(".fourthButton");
  let ul = document.querySelector("ul");

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
fourthButton.addEventListener("click", function() {

    for(let i=0; i < friends.length; i++){
        
        let individualSpace = document.createElement("li")
        let individuals = document.createTextNode(friends[i])
        individualSpace.appendChild(individuals)

        ul.appendChild(individualSpace)

    }




})


});
