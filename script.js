function generateLottoNumbers() {
    var numbers = [];
  
    while (numbers.length < 6) {
      var randomNumber = Math.floor(Math.random() * 45) + 1;
      if (numbers.indexOf(randomNumber) === -1) {
        numbers.push(randomNumber);
      }
    }
  
    var lottoNumbersElement = document.getElementById("lottoNumbers");
    lottoNumbersElement.innerHTML = "";
  
    for (var i = 0; i < numbers.length; i++) {
      var span = document.createElement("span");
      span.textContent = numbers[i];
      span.className = "ball";
      if (numbers[i] >= 1 && numbers[i] <= 10) {
        span.classList.add("red");
      } else if (numbers[i] >= 11 && numbers[i] <= 20) {
        span.classList.add("orange");
      } else if (numbers[i] >= 21 && numbers[i] <= 30) {
        span.classList.add("yellow");
      } else if (numbers[i] >= 31 && numbers[i] <= 40) {
        span.classList.add("green");
      } else {
        span.classList.add("blue");
      }
      lottoNumbersElement.appendChild(span);
    }
  
    var numberHistoryElement = document.getElementById("numberHistory");
    var li = document.createElement("li");
    li.textContent = numbers.join(", ");
    numberHistoryElement.appendChild(li);
  }
  