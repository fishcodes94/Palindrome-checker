const checkBtn = document.querySelector("button");

const resultsContainer = document.getElementById("results-container");

const palindromeChecker = () => {
  let userInput = document.getElementById("user-input").value;
  let userInputElement= document.getElementById("user-input")

  const reverseInput = userInput.split("").reverse().join("");

  if (userInput === "") {
    alert("Please enter text");
    

  } else {
    if (reverseInput === userInput) {
      resultsContainer.innerHTML = `<p><strong>${userInput}</strong> is a palindrome</p>`;
    } else {
      resultsContainer.innerHTML = `<p><strong>${userInput}</strong> is not a palindrome</p>`;
    }
    userInputElement.value=""

  }


};

checkBtn.addEventListener("click", palindromeChecker);
