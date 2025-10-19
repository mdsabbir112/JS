/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters 
the first square number (like 4, 9, 16, etc.)
*/
for (let i = 5; i <= 100; i++) {
  // check if the number is a perfect square
  if (Math.sqrt(i) % 1 === 0) {
    console.log("First square number found:", i);
    break; // stop the loop
  }
  console.log(i);
}