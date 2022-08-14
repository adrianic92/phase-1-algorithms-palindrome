function isPalindrome(word) {
  // Write your algorithm here
  const wordLength = word.length;
  const lower = word.toLowerCase();
  let truth = 0;

  for (let i = 0; i <= wordLength; i++) {
    if (lower[0 + i] !== lower[wordLength - (i + 1)]) {
      truth++;
    }
  }

  if (truth > 0) {
    return false
  }
  else {
    return true
  }

}

/* 
  Add your pseudocode here
  Define isPalindrome function
    - Find length of the word
    - Lower case the word
    - Define a variable that will remain zero unless changed
    - Define a for loop that will iterate through each letter of the word
      - As the for loop iterates through the word, it compares the word to the word in reverse
      - If at any point the word does not match with its reverse version, it will add to the truth variable
    - If truth variable is a value greater than zero, the isPalendrome function will return false
    - If the truth variable remains zero, the isPalendrome function will return true
*/

/*
  Add written explanation of your solution here
  The goal of the isPalindrome function is to check if a word is a palindrome.
  Defining variables and finding the length of the word is the first thing to do, using const for the variables for the word length and the lowercase version of the word.
  The next step is to define a variable using let which will allow it to change, if needed.
  A for loop is then defined to iterate through the letters of each word, comparing the word to itself in reverse.
  The for loop will then add to the changeable variable if at any point the word doesn't match itself in reverse.
  After iterating through the whole word, the function is then set to return whether the word is true or false by checking whether the changeable variable remained unchanged or not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tattarrattat"));
}

module.exports = isPalindrome;
