const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const inputText = document.querySelector(".input-text");

btn.addEventListener("click", countVowel);

// count vowels in the entered word
function countVowel() {
  const word = inputText.value.toLowerCase();
  const vowels = "aeiou";

  // count of vowels
  let count = 0;

  for (let char of word) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      // Increment the count if it's a vowel
      count++;
    }
  }

  result.textContent = `Number of vowels: ${count}`;
}
