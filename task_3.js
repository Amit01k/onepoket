// Task 3: Asynchronous File Handling 
// Create a Node.js script that reads a text file named "data.txt" and counts the number of words in it.
// The script should print the total word count to the console.

const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  word_count = 0
  let split_data = data.split(" ")
  for (let i = 0; i < split_data.length; i++) {
    word_count += 1
  }
  console.log(word_count)
});
