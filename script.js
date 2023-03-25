
function execute() {
  var number = document.getElementById("enter").value;
  var giveMessage = document.getElementById("output");
  var op = document.getElementById("num");
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  if (number == "") {
    giveMessage.innerHTML = "OOPS!!! No number entered... Please enter the number";
  }
  else if (number < 1 || number > 10) {
    giveMessage.innerHTML = "INVALID NUMBER... Please enter the valid number";
  }
  else if (isNaN(number)) {
    giveMessage.innerHTML = "INVALID DATATYPE.......Please enter a number";
    op.innerHTML = "";
  }
  else {
    if (randomNumber == number) {
      giveMessage.innerHTML = "Congratulations you have WON!!🥳🥳🥳🥳🥳";
      op.innerHTML = "Actual number is " + randomNumber;
    }
    else if (randomNumber > number) {
      giveMessage.innerHTML = "Your number is less than actual number 😔 please try again....";
      op.innerHTML = "Actual number is " + randomNumber;
    }
    else {
      giveMessage.innerHTML = "Your number is greater than actual number 😔 please try again...."
      op.innerHTML = "Actual number is " + randomNumber;
    }

  }
}