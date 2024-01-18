const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", isPalindrome);

function isPalindrome() {
  const inputText = document.querySelector(".input-text").value.toLowerCase();
  const reversedText = inputText.split("").reverse().join("");

  if (inputText === reversedText) {
    result.textContent = `${inputText} is a palindrome!`;
  } else {
    result.textContent = `${inputText} is not a palindrome.`;
  }
}
