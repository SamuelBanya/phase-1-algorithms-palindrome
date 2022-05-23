function reverseString(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    console.log(`${word}[${i}]: ${word[i]}`);
    reverseWord += word[i];
    console.log("reverseWord: ", reverseWord);
  }

  return reverseWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  // Write a function isPalindrome that will receive one argument, a string.
  // Your function should return true if the string is a palindrome
  // (that is, if it reads the same forwards and backwards, like "mom" or "racecar"),
  // and return false if it is not a palindrome.

  // A new string variable called 'reverseWord' would need to be declared to incorporate the characters of the reversed word
  // This would need a word.forEach() loop to then loop for each character of the provided 'word' variable
  // Upon each iteration of the .forEach() loop, the single character would be added to the new string variable, 'reverseWord'
  // After the loop is complete, an 'if' statement with a condition to check if 'word' === 'reverseWord'


  // Test case:
  // If that is true, then it is a palindrome
  // Aka:
  // If (word === reverseWord) {
  // return true
  // }

  let reverseWord = reverseString(word);

  if (word === reverseWord) {
    console.log(`Palindrome check: Yes, ${word} === ${reverseWord}`);
    return true;
  }
  else {
    console.log("Palindrome check: No, it is not a palindrome");
    return false;
  }
}

/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// The idea is that we want to loop through the entire array in a reverse manner, and add each character to a new string, and simply compare it at the end

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("sam"));
}

module.exports = isPalindrome;

isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("a");
isPalindrome("ab");
